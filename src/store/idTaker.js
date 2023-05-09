import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    date : null
}

const idTaker = createSlice({
    name:'id',
    initialState,
    reducers: {
        getId: (state, action) => {
            state.date = action.payload;
            
        }
    }
});

export const { getId } = idTaker.actions;

export default idTaker.reducer;