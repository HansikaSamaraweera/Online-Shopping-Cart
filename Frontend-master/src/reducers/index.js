import{combineReducers} from "redux";
import errorsReducer from "./errorsReducer";
import projectTaskReducer from "./projectTaskReducer";
import userDet from "./userDet";

export default combineReducers({

    errors:errorsReducer,
    user_task:projectTaskReducer,
    user_details:userDet


});