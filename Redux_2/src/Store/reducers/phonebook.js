import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    phonebooks: [],
    posts: []
}

const phonebookSlice = createSlice({
    name: "phonebook",
    initialState,
    reducers: {
        addPhoneBook: (state, action) => {
            state.phonebooks.push(action.payload);
        },
        
        deletePhoneBook: (state, action) => {
            state.phonebooks = state.phonebooks.filter(
                (phonebook) => phonebook.id !== action.payload
            );
        }
        
    }
    
})
export const { addPhoneBook, deletePhoneBook } = phonebookSlice.actions
const phonebookReducer = phonebookSlice.reducer
export default phonebookReducer
