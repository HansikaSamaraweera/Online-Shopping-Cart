import axios from "axios";
import {
    GET_ERRORS,
    GET_CATEGORY
} from "./types";

export const addCategory = (category, history) => async dispatch => {
    try {
        await axios.post("http://localhost:8080/api/categories", category);
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

/*export const getBacklog = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/categories/all");
    dispatch({
        type: GET_CATEGORY,
        payload: res.data
    });
};*/
