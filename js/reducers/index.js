import { combineReducers } from "redux";
import login from "./loginReducer.js";

const rootReducer = combineReducers({ login });

export default rootReducer;
