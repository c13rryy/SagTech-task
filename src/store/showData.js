import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    information: [],
    allInfo: [],
    router: null,
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
        },

        allRoutes: (state,action) => {
            state.router = action.payload
        }
    }
});

export const { getAllInfo, infoForCalendar, allRoutes } = showData.actions;

export default showData.reducer;



