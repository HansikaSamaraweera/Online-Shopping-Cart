import {GET_USER} from "../actions/types";

const initialState={
    user_det:{}
}

export default function (state=initialState,action) {
    switch (action.type) {

        case GET_USER:
            return{
                ...state,
                user_det: action.payload
            };
        default:
            return state;


    }

}