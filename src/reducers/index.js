import hobbyReducer from "./hobby";
import {combineReducers} from "redux";
import userReducer  from "./user";

//tổng hợp các reducer của các chức năng khác
const rootReducer = combineReducers({
	hobby : hobbyReducer,
	user : userReducer,
	});
export default rootReducer;