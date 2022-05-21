const { createSlice } = require("@reduxjs/toolkit");

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action) {
            state.push(action.payload);
        },
        remove(state, action) {
            state = state.filter(item => item.id !== action.payload);
        },
    }
})