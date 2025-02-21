import axios from "axios";

const getToken = ()=>{
    return localStorage.getItem("AdminToken")
}

export const axiosConfig = axios.create({
    baseURL: "http://localhost:4030",
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

