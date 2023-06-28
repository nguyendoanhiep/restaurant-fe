import {registerSuccess} from '../slice/UserSlince';
import axios from 'axios';
import {baseUrl} from '../../env/Config'

const domain = baseUrl.host + baseUrl.port;
export const registerUser = (username, password, numberPhone, fullName , roles) => async (dispatch) => {
    try {
        const response = await axios.post(domain + '/user/register', {username, password, numberPhone, fullName , roles});
        dispatch(registerSuccess(response.data));
        return response.data;
    } catch (error) {
        console.log(error);
    }
};