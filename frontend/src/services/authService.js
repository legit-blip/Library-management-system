import api from "../utils/axiosInstance";

// This file is the template to copy for every future feature.
// e.g. bookService.js would look almost identical, just pointed at /products.

export async function signupUser({ name, email, password }) {
    const response = await api.post("/auth/signup", { name, email, password });
    return response.data;
}

export async function loginUser({ email, password }) {
    const response = await api.post("/auth/login", { email, password });
    return response.data;
}