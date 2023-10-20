import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [], titles: []
};
export const fetchBooks = createAsyncThunk(
  'book/fetchBooks',
  async (payload, thunkAPI) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums')
    const result = await response.json()
    const titles = result.map(item => item.title);
    console.log(titles)
    return titles;
  }
)

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    deleteBook: (state, action) => {
      const indexToDelete = action.payload;

      state.books.splice(indexToDelete, 1);
    }, extraReducers: (builder) => {
      builder.addCase(fetchBooks.fulfilled, (state, action) => {
        state.titles = action.payload
      })
    }
  }
});

export const { addBook, deleteBook } = bookSlice.actions;

const bookReducer = bookSlice.reducer;

export default bookReducer;
