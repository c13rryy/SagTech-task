import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: null,
    info: null
}

const inputData = createSlice({
    name:'task',
    initialState,
    reducers: {
        getData: (state, action) => {
            state.title = action.payload.title;
            state.info = action.payload.info;
        }
    }
});


export const { getData } = inputData.actions;

export default inputData.reducer;



