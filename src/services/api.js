const axios = require("axios");

export const api = axios.create({
    // baseURL: "http://localhost:3001/"
    baseURL: "https://api-myedu.herokuapp.com/"
});

export const loginEadSession = async (email, password) => {
    return  api.post("/ead/login", {email, password}); 
}

export const getDisciplinas = async () => {
    return await api.get("/ead/dashboard");
}

export const getAllTheme = async (id_theme) => {
    return api.get(`ead/themes/${id_theme}`);
}

export const getEducator = async (id_educator) => {
    return api.get(`/ead/educator/${id_educator}`);
}

export const updateStatus = async (status, id_theme) => {
    return api.post("/ead/update-status-theme", {status, id_theme});
}
