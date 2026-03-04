import axios from "axios";


const axiosInstanse =axios.create({
    baseURL:'https://knowledgeshop.runasp.net/api',
        headers:{
            "Accept-Language":"en"
        }
    }
);


export default axiosInstanse;