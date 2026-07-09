import axios from "axios";

// One shared axios instance for the whole app.
// Every service file (authService, bookService, studentService, ...)
// should import THIS instead of importing axios directly.
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:8080",
    headers: {
        "Content-Type": "application/json",
    },
});

// Attach the JWT to every outgoing request automatically, if we have one.
// The backend's Auth middleware reads it from a header called "authentication"
// (not the more common "authorization: Bearer ..." — matching what's already there).
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.authentication = token;
    }
    return config;
});

// If the backend ever says our token is invalid/expired, clear it and
// bounce the user back to login instead of leaving them stuck on a broken page.
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem("token");
            localStorage.removeItem("loggedInUser");
            if (window.location.pathname !== "/login") {
                window.location.href = "/login";
            }
        }
        return Promise.reject(error);
    }
);

export default api;
