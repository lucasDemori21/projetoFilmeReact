
// Base da URL: https://api.themoviedb.org/3/
//URL da API: /movie/now_playing?api_key=8fbfde8fa0c3c177d5d131d5a52aa4cb


import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
});

export default api;