import axios from 'axios';

const instance =axios.create({
    //http://localhost:8001
    // https://tinder-india.herokuapp.com/
    baseURL: 'https://tinder-india.herokuapp.com/'
})

export default instance;