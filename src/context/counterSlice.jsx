import { createSlice } from "@reduxjs/toolkit";



export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: JSON.parse(localStorage.getItem('likes')) || []
    },
    reducers: {
        addToLikes(state, action) {
            state.value = [...state.value, action.payload]
        localStorage.setItem('likes', JSON.stringify(state.value))
        },
        removeFromLiked(state, action){
            state.value = state.value.filter(liked => liked.id !== action.payload.id)
        },
    }
})

export const { addToLikes, removeFromLiked } = counterSlice.actions

export default counterSlice.reducer