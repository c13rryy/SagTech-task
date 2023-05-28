import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  date: 0,
  taskId: null,
  isChecked: [],
  realDates: [],
  correctDate: null,
  taskStatus: {},
};

const taskSlice = createSlice({
  name: "id",
  initialState,
  reducers: {
    getId: (state, action) => {
      state.date = action.payload;
    },

    getTaskID: (state, action) => {
      state.taskId = action.taskId;
    },

    actulDates: (state, action) => {
      state.realDates = action.payload;
    },

    numberDate: (state, action) => {
      state.correctDate = action.payload;
    },

    checkBox: (state, action) => {
      const taskId = action.payload;
      const date = state.correctDate;

      const index = state.isChecked.indexOf(taskId);
      if (index !== -1) {
        state.isChecked.splice(index, 1);
      } else {
        state.isChecked.push(taskId);
      }

      if (!state.taskStatus[date]) {
        state.taskStatus[date] = [];
      }

      const taskStatus = state.taskStatus[date];
      const taskIdIndex = taskStatus.indexOf(taskId);

      if (taskIdIndex !== -1) {
        taskStatus.splice(taskIdIndex, 1);
      } else {
        taskStatus.push(taskId);
        taskStatus.sort();
      }
    },
  },
});

export const { getId, getTaskID, checkBox, actulDates, numberDate } =
  taskSlice.actions;

export default taskSlice.reducer;
