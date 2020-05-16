import axios from 'axios';
import {DELETE_PRODUCT,GET_PRODUCT1,GET_ERRORS, GET_PRODUCT, GET_PROJECT_TASK, GET_USER} from "./types";



export const addNewUser =(user, history)=>async dispatch=>{
    try {
        await axios.post("/api/Users", user);
        history.push("/");
        window.location.replace("/Admin")
        dispatch({
            type:GET_ERRORS,
            payload:{}
        })
    }catch (error) {
        dispatch({
            type:GET_ERRORS,
            payload:error.response.data
        })
    }
};
export const addNewUserCus =(user, history)=>async dispatch=>{
    try {
        await axios.post("/api/Users", user);
        // history.push("/");
        sessionStorage.setItem("sessionName",user.name);
        sessionStorage.setItem("sessionPost",user.post);
        window.location.replace("/")
        dispatch({
            type:GET_ERRORS,
            payload:{}
        })
    }catch (error) {
        dispatch({
            type:GET_ERRORS,
            payload:error.response.data
        })
    }
};

export const getUsers=()=>async dispatch=>{
    const res=await axios.get("/api/Users/all");

    dispatch({
        type: GET_PROJECT_TASK,
        payload: res.data
    })

}

export const login = name =>async dispatch=>{
    const res=await axios.get(`/api/Users/name/${name}`);

    dispatch({
        type: GET_USER,
        payload: res.data
    })

};

export const addProduct = (product,history) => async dispatch => {
    try {
        await axios.post('http://localhost:8080/api/Products', product);
        history.push("/ProductList");
        dispatch({
            type:GET_ERRORS,
            payload:{}
        })
    }
    catch (error) {
        dispatch({
            type:GET_ERRORS,
            payload:error.response.data
        })
    }
};

export  const DeleteProduct = p_id => async  dispatch => {
    if(window.confirm('You are deleting Product ${p_id}, this action cannot be undone')) {
        await axios.delete('http://localhost:8080/api/Products/delete/${p_id}');
        dispatch({
            type: DELETE_PRODUCT,
            payload: p_id
        });
    }
};


export  const getBacklog = () => async  dispatch => {
    const res = await axios.get("http://localhost:8080/api/Products/all")
    dispatch({
        type:GET_PRODUCT,
        payload:res.data
    })
};

export const getProduct = (p_id, history) => async dispatch =>{
    try{
        const res = await axios.get('http://localhost:8080/api/Products/${p_id}');
        dispatch({
            type: GET_PRODUCT1,
            payload: res.data
        })

    }catch (error) {
        history.push("/ProductList")

    }
}


export const getUser = (id, history) => async dispatch => {
    try {
        const res = await axios.get(`/api/Users/${id}`);
        dispatch({
            type: GET_PROJECT_TASK,
            payload: res.data
        });
    } catch (error) {
        history.push("/");
    }
};
