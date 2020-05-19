import axios from "axios";
import {
    GET_ERRORS,
    GET_CATEGORY
} from "./types";
import category from "../reducers/category";

{/*Add New Category*/}
export const addCategory = (category, history) => async dispatch => {
    try {
        await axios.post("/api/categories", category);
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

{/*Update Categories*/}
export const updateCategory=(category,history)=>async dispatch=>{
    try{
        await axios.post("/api/categories/updateCategory");
        history.push('/');
        dispatch({
            type:GET_ERRORS,
            payload:{}
        });
    }catch (error) {
        dispatch({
            type:GET_ERRORS,
            payload:error.response.data
        });
    }
};

/*export const getAllCategories = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/categories/all");
    dispatch({
        type: GET_CATEGORY,
        payload: res.data
    });
};*/
