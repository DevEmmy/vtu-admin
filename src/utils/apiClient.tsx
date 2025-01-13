import axios from "axios";

const getToken = ()=>{
    return localStorage.getItem("AdminToken")
}

export const axiosConfig = axios.create({
    baseURL: "https://megapay-backend.onrender.com"
});

axiosConfig.interceptors.request.use(config => {
    const token = getToken();
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

