import axios from "axios";
import {GET_ERRORS,GET_CATEGORY, GET_UPDATE_CATEGORY} from "./moduleTypes";

{/*Add New Category*/}
export const addCategory = (category, history) => async dispatch => {
    try {
        await axios.post("/api/categories", category);
        history.push("/");
        window.location.replace("/AdminAsCategory/AddCategory")
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
/*export const updateCategory=(category,history)=>async dispatch=>{
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
};*/

{/*Get category by id*/}
export const getCategory = (id, history) => async dispatch =>{
    try{
        const res = await axios.get('/api/categories/${id}');
        dispatch({
            type: GET_UPDATE_CATEGORY,
            payload: res.data
        });

    }catch (error) {
        history.push("/CategoryList")

    }
};

{/*Display All Categories*/}
export  const getAllCategories = () => async  dispatch => {
    const res = await axios.get("/api/categories/all");
    dispatch({
        type:GET_CATEGORY,
        payload:res.data
    })
};
