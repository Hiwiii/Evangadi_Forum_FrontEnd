
import axios from "axios";
const axiosBase = axios.create({
    // baseURL: "http://localhost:5400/api",
    baseURL: "https://evangadiforumbackend-production.up.railway.app/api",
});

export default axiosBase;

