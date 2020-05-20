import {GET_PROJECT_TASK,DELETE_PRODUCT,GET_PRODUCT1} from "../actions/types";

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

        case GET_PRODUCT1:
            return {
                ...state,
                product_task1: action.payload

            };
        /*case GET_USER:
            return{
                ...state,
                user_det: action.payload
            };*/

        case DELETE_PRODUCT:
            return {
                ...state,
                project: state.project.filter(
                    project => project.id !== action.payload
                )
            };
            default:
            return state;


    }

}
