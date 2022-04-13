import axios from 'axios';

export default axios.create({
    baseURL: 'https://foreatapi.herokuapp.com'
});