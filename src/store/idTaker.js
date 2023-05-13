import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    date : null,
    taskId : null,
    isChecked: [],
    cammonArray:[],
    diffArray:[]
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
            
        },

        checkBox: (state, action) => {
            const taskId = action.payload;
            const index = state.isChecked.indexOf(taskId);
            if(index !== -1){
                state.isChecked.splice(index, 1)
            } else{
                state.isChecked.push(taskId);
            }
        },

        cammon: (state,action) => {
            state.cammonArray = action.payload;
        },

        diff: (state, action) => {
            state.diffArray = action.payload;
        }
    }
});

export const { getId, getTaskID, checkBox, cammon, diff } = idTaker.actions;

export default idTaker.reducer;