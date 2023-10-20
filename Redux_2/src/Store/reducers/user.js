import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  status: 'idle'
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    removeUser: (state, action) => {
      const index = state.users.findIndex((user) => user.id === action.payload.id);
      if (index !== -1) {
        state.users.splice(index, 1);
      }
    }
  }
});
export const { addUser, removeUser } = userSlice.actions;

export const selectUser = (state) => state.user;
const userReducer = userSlice.reducer;

export default userReducer
