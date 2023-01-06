import {
    LOGIN_ID,
    LOGIN_PW,
    LOGIN_BUTTON,
    LOGIN_USER,
} from "../actions/types.js";

const initialState = {
    isActiveID: false,
    isActivePW: false,
    isActiveButton: false,
    loginType: "BUYER",
    typeButtonStyle: {
        buyer: true,
        seller: false,
    },
};

export default function login(state = initialState, action) {
    switch (action.type) {
        case LOGIN_ID:
            return {
                ...state,
                username: action.payload,
                isActiveID: action.isActiveID,
                isValid: action.payload,
            };

        case LOGIN_PW:
            return {
                ...state,
                isActivePW: action.isActivePW,
                isValid: action.payload,
            };

        case LOGIN_BUTTON:
            return { ...state, isActiveButton: action.isActiveButton };

        case LOGIN_USER:
            return {
                ...state,
                loginType: action.loginType,
                token: action.token,
                typeButtonStyle: {
                    buyer: action.buyer,
                    seller: action.seller,
                },
            };

        default:
            return state;
    }
}
