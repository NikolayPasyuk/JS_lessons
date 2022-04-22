import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const key = 'a18ebe46';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
        const query = `/?apikey=${key}&s=${title}`;
        return axiosInstance.get(query)
        // return axiosInstance.get(query).then(res => res.data)
    },
    searchFilmsByType: (title: string, type: string) => {
    }
};


export default API;
