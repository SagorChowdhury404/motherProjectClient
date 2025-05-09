import axios from 'axios';

const axiosPublic = axios.create({
    baseURL: `http://localhost:5000`, // Update with your backend base URL
});

const AxiosPublic = () => axiosPublic;

export default AxiosPublic;
