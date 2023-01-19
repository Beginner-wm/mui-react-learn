import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state, { payload }) => {
            state.value = state.value + (payload ? payload : 1)
        },
        decrement: (state, { payload }) => {
            state.value = state.value - (payload ? payload : 1)
        },

    }
})

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;