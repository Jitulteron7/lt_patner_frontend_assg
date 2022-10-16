import axios from "axios";
import { API_BASE_URL } from "../conts"
const Instance = (token) => {
  console.log(API_BASE_URL, "API_BASE_URL")
  return axios.create({
    baseURL: API_BASE_URL,
    credentials: "include",
    withCredentials: true,
    headers: {
      Authorization: token ? `${token}` : "",
    },
  });
};

export default Instance;
