import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    date: 0,
    taskId: null,
    isChecked: [],
    /*  cammonArray:[],
      diffArray:[] */
    taskStatus: {},
  };
  
  const idTaker = createSlice({
    name: 'id',
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
        const date = state.date;
        
        // Update isChecked array
        const index = state.isChecked.indexOf(taskId);
        if (index !== -1) {
          state.isChecked.splice(index, 1);
        } else {
          state.isChecked.push(taskId);
        }
        
        // Update taskStatus object for the specific date
        if (!state.taskStatus[date]) {
          state.taskStatus[date] = [];
        }
        
        const taskStatus = state.taskStatus[date];
        const taskIdIndex = taskStatus.indexOf(taskId);
        
        if (taskIdIndex !== -1) {
          taskStatus.splice(taskIdIndex, 1);
        } else {
          taskStatus.push(taskId);
          taskStatus.sort(); // Sort the IDs within the object
        }
      },
      
      
      
      },
  });
  
  export const { getId, getTaskID, checkBox, updateTaskStatus } = idTaker.actions;
  
  export default idTaker.reducer;