import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLogin: false,
}

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setIsLogin: (state, action) => {
            state.isLogin = action.payload
        }
    },
})

export const {setIsLogin} = homeSlice.actions
const homeReducer = homeSlice.reducer

export default homeReducer