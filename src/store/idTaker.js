import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    date : null,
    taskId : null,
}

const idTaker = createSlice({
    name:'id',
    initialState,
    reducers: {
        getId: (state, action) => {
            state.date = action.payload;
            
        },

        getTaskID: (state, action) => {
            state.taskId = action.taskId;
            
        }
    }
});

export const { getId, getTaskID } = idTaker.actions;

export default idTaker.reducer;