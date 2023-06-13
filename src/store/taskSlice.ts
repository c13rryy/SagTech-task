import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface TaskStatusInfo {
  [key: string]: string[];
}
interface TaskSlice {
  date: string | number;
  taskId: string | null;
  isChecked: string[];
  realDates: string[];

  correctDate: string | null;
  taskStatus: TaskStatusInfo;
}

const initialState: TaskSlice = {
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
    getId: (state, action: PayloadAction<string>) => {
      state.date = action.payload;
    },

    getTaskID: (state, action: PayloadAction<string>) => {
      state.taskId = action.payload;
    },

    numberDate: (state, action: PayloadAction<string>) => {
      state.correctDate = action.payload;
    },

    actulDates: (state, action: PayloadAction<string[]>) => {
      state.realDates = action.payload;
    },

    checkBox: (state, action) => {
      const taskId = action.payload;
      const date =
        typeof state.correctDate === "string" ? state.correctDate : "";

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

export const { getId, getTaskID, checkBox, numberDate, actulDates } =
  taskSlice.actions;

export default taskSlice.reducer;
