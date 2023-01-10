import { combineReducers } from "redux";
import { loginSlice, naviSlice } from "./index.js";

const rootReducer = combineReducers({
    loginSlice: loginSlice.reducer,
    naviSlice: naviSlice.reducer,
});

export default rootReducer;
