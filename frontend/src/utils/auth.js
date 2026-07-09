// Small helpers so no component has to touch localStorage keys directly.

export function saveAuth({ jwtToken, name, email }) {
    localStorage.setItem("token", jwtToken);
    localStorage.setItem("loggedInUser", JSON.stringify({ name, email }));
}

export function getToken() {
    return localStorage.getItem("token");
}

export function getLoggedInUser() {
    const raw = localStorage.getItem("loggedInUser");
    return raw ? JSON.parse(raw) : null;
}

export function isAuthenticated() {
    return Boolean(getToken());
}

export function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
}
