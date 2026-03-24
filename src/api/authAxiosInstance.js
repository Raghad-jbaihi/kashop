import axios from "axios";

const token= localStorage.getItem("accessToken");

console.log(token);
const authAxiosInstanse =axios.create({
    baseURL:'https://knowledgeshop.runasp.net/api',
        headers:{
            "Accept-Language":"en" ,
            "Authorization":`Bearer ${token}` 
        }
    }
);

authAxiosInstanse.interceptors.request.use((config) => {
    const token = localStorage.getItem("accessToken");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});


export default authAxiosInstanse;






