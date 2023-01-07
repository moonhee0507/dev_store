import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../common/constants.js";

export const __reqLogin = createAsyncThunk(
    "loginSlice/__reqLogin",
    async (body) => {
        const res = await fetch(`${API_URL}/accounts/login/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        const data = await res.json();

        return data;
    }
);
