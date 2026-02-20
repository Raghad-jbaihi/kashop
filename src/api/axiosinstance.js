import axios from "axios";


const axiosInstanse =axios.create({
    baseURL:'https://knowledgeshop.runasp.net/api'
});


export default axiosInstanse;