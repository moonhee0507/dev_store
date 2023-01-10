import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./js/state/reducer/rootReducer.js";

const store = configureStore({
    reducer: {
        rootReducer,
    },
    devTools:
        window.__REDUX__DEVTOOLS_EXTENSION__ &&
        window.__REDUX__DEVTOOLS_EXTENSION__(),
});

console.log("Store:", store.getState());
store.subscribe(() => console.log("subscribe", store.getState()));

export default store;
