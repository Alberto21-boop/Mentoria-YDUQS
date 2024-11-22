import axios from 'axios';

// tenho que cvonfigura isso ainda 
const api = axios.create({
    baseURL: 'http://localhost:3000/tasks',
});

export default api;
