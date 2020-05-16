import {GET_PRODUCT, GET_PRODUCT1} from "../actions/types";

const initialState={
    product_task:[],
    product_task1:{}

}

export default function (state=initialState,action) {
    switch (action.type) {

        case GET_PRODUCT:
            return{
                ...state,
                product_task: action.payload
            };

        case GET_PRODUCT1:
            return {
                ...state,
                product_task1: action.payload
            }
        default:
            return state;


    }

}
