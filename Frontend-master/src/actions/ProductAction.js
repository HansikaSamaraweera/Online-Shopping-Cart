import axios from 'axios';
import {GET_COMMENT} from "./types";

export const addComment = (comment,history)=> async dispatch=>{
    await axios.post("/reviews/add", comment);
    history.push("/");

};
export const addItem = (item,history)=> async dispatch=>{
    await axios.post("/cart/add", item);
    history.push("/");

};




