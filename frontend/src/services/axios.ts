import axios from "axios";

const instance = axios.create({
  baseURL: "https://onbdaily.na4u.ru",
});

export default instance;
