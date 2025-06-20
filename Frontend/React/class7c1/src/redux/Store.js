import { configureStore } from "@reduxjs/toolkit";
import markReducer from "../slices/MarkSlice.js"
export const store = configureStore({
    reducer: {
        selections: markReducer
    }
})