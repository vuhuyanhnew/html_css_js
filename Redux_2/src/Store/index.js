import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./reducers/home";
import todoReducer from "./reducers/todo";
import productReducer from "./reducers/product";
import studentReducer from "./reducers/student";
import phonebookReducer from "./reducers/phonebook";
import userReducer from "./reducers/user";
import bookReducer from "./reducers/book";

export const store = configureStore({
    reducer: {
        home: homeReducer,
        product: productReducer,
        todo: todoReducer,
        student: studentReducer,
        phonebook: phonebookReducer,
        user: userReducer,
        book: bookReducer
    }
})