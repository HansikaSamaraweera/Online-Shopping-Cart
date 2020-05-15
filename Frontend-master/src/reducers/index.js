import{combineReducers} from "redux";
import errorsReducer from "./errorsReducer";
import projectTaskReducer from "./projectTaskReducer";
import userDet from "./userDet";
import productReducer from "./productReducer";
export default combineReducers({

    errors:errorsReducer,
    user_task:projectTaskReducer,
    user_details:userDet,
    product_task : productReducer

});
