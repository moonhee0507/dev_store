import { createSlice } from "@reduxjs/toolkit";

const naviSlice = createSlice({
    name: "naviSlice",
    initialState: {
        backPage: "/",
    },
    reducers: {
        BACK_PAGE: (state, action) => {
            state.backPage = action.backPage;
        },
        CURRENT_PAGE: (state, action) => {
            state.currentPage = action.currentPage;
        },
    },
});

export default naviSlice;
