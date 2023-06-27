import { loginSuccess } from '../slice/LoginSlince';
import axios from 'axios';
import { baseUrl } from '../../env/Config'

const domain = baseUrl.host + baseUrl.port;
export const loginUser = (username, password) => async (dispatch) => {
    try {
        const response = await axios.post(domain + '/user/login', { username, password });
        dispatch(loginSuccess(response.data));
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

