import {baseUrl} from "../../env/Config";
import axios from "axios";
import {getAll} from "../slice/ProductSlince";

const domain = baseUrl.host + baseUrl.port;
export const getAllProduct = (page,size,search) => async (dispatch) => {
    try {
        const response = await axios.get(domain + `/product/getAll?page=${page}&size=${size}&search=${search}`);
        dispatch(getAll(response.data));
    } catch (error) {
        console.log(error);
    }
};