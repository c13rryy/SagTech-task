import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null,
    password: null
}

const inputData = createSlice({
    name:'data',
    initialState,
    reducers: {
        getData: (state, action) => {
            state.email = action.payload.email;
            state.password = action.payload.password;
        }
    }
});


export const { getData } = inputData.actions;

export default inputData.reducer;



