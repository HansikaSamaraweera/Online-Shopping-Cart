import {
    GET_PROJECT_TASK
} from "../actions/types";

const initialState = {
    new_tasks: [],
    //new_task: {}
}

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_PROJECT_TASK:
            return {
                ...state,
                new_tasks: action.payload
            };
        default:
            return state;
    }
}
