import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  information: [],
  allInfo: [],
};

// TODO: name show поменяй
const information = createSlice({
  name: "show",
  initialState,
  reducers: {
    getAllInfo: (state, action) => {
      state.information = action.payload;
    },

    infoForCalendar: (state, action) => {
      state.allInfo = action.payload;
    },
  },
});

export const { getAllInfo, infoForCalendar } = information.actions;

export default information.reducer;
