import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: []
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      const indexToDelete = action.payload;

      state.todos.splice(indexToDelete, 1);
    }
  }
});

export const { addTodo, deleteTodo } = todoSlice.actions;

const todoReducer = todoSlice.reducer;

export default todoReducer;
