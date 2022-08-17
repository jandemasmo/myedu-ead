const axios = require("axios");

export const api = axios.create({
  // baseURL: "http://localhost:3001/"
  baseURL: "https://api-myedu.herokuapp.com/",
});

export const sendMessage = async (name, email, message) => {
  return api.post("/contact", { name, email, message });
};
