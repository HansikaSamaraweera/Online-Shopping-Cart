import{combineReducers} from "redux";
import formErrors from "./formErrors";
import formReducer from "./formReducer"

export  default combineReducers({
    errors:formErrors,
    new_task:formReducer
});