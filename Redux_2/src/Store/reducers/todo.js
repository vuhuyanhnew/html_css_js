import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  titles: []
};
export const fetchTodos = createAsyncThunk(
  'todo/fetchTodos',
  async (payload, thunkAPI) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const result = await response.json()
    const titles = result.map((item) => item.title);
    console.log(titles);
    return titles;
  }
)

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
    }, extraReducers: (builder) => {
      builder.addCase(fetchTodos.fulfilled, (state, action) => {
        state.titles = action.payload
      })
    }
  }
});

export const { addTodo, deleteTodo } = todoSlice.actions;

const todoReducer = todoSlice.reducer;

export default todoReducer;
