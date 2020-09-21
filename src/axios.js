import axios from 'axios'

const instance = axios.create({
    baseURL: "https://tinder-mern-backend-kenmaro.herokuapp.com",
});


export default instance;