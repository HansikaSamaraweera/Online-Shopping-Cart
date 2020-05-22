import axios from "axios";
import {GET_ERRORS} from "./types";

{/*Add Item to Wish List*/}
export const addToWishList = (wishList, history) => async dispatch => {
    try {
        await axios.post(" /wishList/add", wishList);
        history.push("/");
        dispatch({
            type: GET_ERRORS,
            payload: {}
        });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    }
};

