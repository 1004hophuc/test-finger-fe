import axios from "axios";

export const server = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage["accessToken"]}`,
  },
});
