import {GET_PROJECT_TASK, GET_USER} from "../actions/types";

const initialState={
    user_tasks:[],
    //user_det:{}
}

export default function (state=initialState,action) {
    switch (action.type) {
        case GET_PROJECT_TASK:
            return{
                ...state,
                user_tasks: action.payload
            };
        /*case GET_USER:
            return{
                ...state,
                user_det: action.payload
            };*/
            default:
            return state;


    }

}