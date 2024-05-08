import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://swcstgbe.cellapp.co/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
