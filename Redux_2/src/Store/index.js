import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./reducers/home";
import todoReducer from "./reducers/todo";
import productReducer from "./reducers/product";

export const store = configureStore({
    reducer: {
        home: homeReducer,
        product: productReducer,
        todo: todoReducer,
    }
})