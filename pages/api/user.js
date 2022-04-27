import axios from 'axios';

const getUser = async user => {
    return await axios.post('http://localhost:5000/user/auth', user);
}

export { getUser }; 