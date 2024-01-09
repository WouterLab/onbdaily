import axios from "axios";

const instance = axios.create({
  // baseURL: "https://onbdaily.na4u.ru",
  baseURL: "http://localhost:4000",
});

export default instance;
