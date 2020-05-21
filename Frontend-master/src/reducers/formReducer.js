import {GET_CATEGORY,
    GET_UPDATE_CATEGORY
} from "../actions/moduleTypes";


let initialState;
initialState = {
    cat_task: [],
    cat_tasks: {}

};
export default function (state=initialState,action) {
    switch (action.type) {

        case GET_CATEGORY:
            return{
                ...state,
                cat_task: action.payload
            };

        case GET_UPDATE_CATEGORY:
            return {
                ...state,
                cat_tasks: action.payload
            }
        default:
            return state;


    }

}
