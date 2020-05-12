import {GET_PRODUCT} from "../actions/types";

const initialState={
    product_task:{}
}

export default function (state=initialState,action) {
    switch (action.type) {

        case GET_PRODUCT:
            return{
                ...state,
                product_task: action.payload
            };
        default:
            return state;


    }

}
