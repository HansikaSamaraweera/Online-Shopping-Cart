import axios from 'axios';
import {GET_COMMENT} from "./types";

export const addComment = (comment,history)=> async dispatch=>{
    await axios.post("http://localhost:8080/reviews/add", comment);
    history.push("/");
    window.location.replace("/Comment");
};


