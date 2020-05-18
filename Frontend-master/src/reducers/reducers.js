import {DELETE_ACCOUNT, DELETE_PRODUCT, GET_PROJECT_TASK} from "../actions/types";

const initialState={
    user_tasks:[],
    user_task:{}
}
export default function (state=initialState,action) {
    switch (action.type) {

        case DELETE_ACCOUNT:
            return {
                ...state,
                user_tasks: state.user_tasks.filter(
                    user_task => user_task.id !== action.payload
                )
            };
        default:
            return state;


    }

}