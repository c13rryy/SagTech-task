import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    information: [],
    allInfo: []
};

const showData = createSlice({
    name:'show',
    initialState,
    reducers: {
        getAllInfo: (state, action) => {
            state.information = action.payload;
            
        },

        infoForCalendar: (state, action) => {
            state.allInfo = action.payload
        }
    }
});

export const { getAllInfo, infoForCalendar } = showData.actions;

export default showData.reducer;



