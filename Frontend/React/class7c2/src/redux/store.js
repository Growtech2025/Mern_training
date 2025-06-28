import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/Userslice"
import adminReducer from "../slices/Adminslice"
export const store = configureStore({
    reducer: {
        user: userReducer,
        admin: adminReducer

    }
})