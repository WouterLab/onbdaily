import axios from "axios";

const instance = axios.create({
  baseURL: "http://onbdaily.na4u.ru",
});

export default instance;
