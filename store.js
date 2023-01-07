import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./js/slice/index.js";

const store = configureStore({
    reducer: {
        loginSlice: loginSlice.reducer,
    },
    devTools:
        window.__REDUX__DEVTOOLS_EXTENSION__ &&
        window.__REDUX__DEVTOOLS_EXTENSION__(),
});

console.log("Store:", store.getState());
store.subscribe(() => console.log("subscribe", store.getState()));

export default store;
