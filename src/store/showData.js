import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    information: []
};

const showData = createSlice({
    name:'show',
    initialState,
    reducers: {
        getAllInfo: (state, action) => {
            state.information = action.payload;
            
        }
    }
});

export const { getAllInfo } = showData.actions;

export default showData.reducer;



