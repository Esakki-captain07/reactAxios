import axios from "axios";
const AxiosService = axios.create({
    baseURL:"https://66694b1b2e964a6dfed48276.mockapi.io",
    headers:{
        "Content-type":"application/json"
    }
})

export default AxiosService