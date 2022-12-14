import axios from "axios";

const apiAxios = axios.create({
    baseURL: "http://loclahost:3001"
});

export default apiAxios;