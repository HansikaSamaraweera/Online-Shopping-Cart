import axios from 'axios';
import {GET_ERRORS, GET_PROJECT_TASK,GET_USER} from "./types";


export const addNewUser =(user, history)=>async dispatch=>{
    try {
        await axios.post("http://localhost:8080/api/Users", user);
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
        await axios.post("http://localhost:8080/api/Users", user);
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
    const res=await axios.get("http://localhost:8080/api/Users/all");

    dispatch({
        type: GET_PROJECT_TASK,
        payload: res.data
    })

}

export const login = name =>async dispatch=>{
    const res=await axios.get(`http://localhost:8080/api/Users/name/${name}`);

    dispatch({
        type: GET_USER,
        payload: res.data
    })

}