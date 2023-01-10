import { createSlice } from "@reduxjs/toolkit";
import { __reqLogin } from "../thunk/nonMember.js";

const loginSlice = createSlice({
    name: "loginSlice",
    initialState: {
        isActiveID: false,
        isActivePW: false,
        loginType: "BUYER",
        typeButtonStyle: {
            buyer: true,
            seller: false,
        },
        isCog: false,
    },
    reducers: {
        LOGIN_ID: (state, action) => {
            state.username = action.username;
            state.isActiveID = action.isActiveID;
        },
        LOGIN_PW: (state, action) => {
            state.isActivePW = action.isActivePW;
        },
        LOGIN_USER: (state, action) => {
            state.loginType = action.loginType;
            state.token = action.token;
            state.typeButtonStyle = {
                buyer: action.buyer,
                seller: action.seller,
            };
            state.isCog = action.isCog;
        },
        ERROR_TYPE: (state, action) => {
            state.errorMsg = action.errorMsg;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(__reqLogin.fulfilled, (state, action) => {
            if (action.payload.FAIL_Message) {
                state.errorMsg = action.payload.FAIL_Message;
            }
            if (typeof action.payload.token === "string") {
                state.token = action.payload.token;
            }
        });
    },
});

export default loginSlice;
