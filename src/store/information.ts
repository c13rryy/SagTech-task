import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { InformationSlice } from "../reusles-types/reusles.types";
// TODO: прибел, нужный кодстайл
interface SliceAboutInfo {
  information: InformationSlice[];
  allInfo: InformationSlice[];
}

const initialState: SliceAboutInfo = {
  information: [],
  allInfo: [],
};

const information = createSlice({
  name: "information",
  initialState,
  reducers: {
    getAllInfo: (state, action: PayloadAction<InformationSlice[]>) => {
      state.information = action.payload;
    },

    infoForCalendar: (state, action: PayloadAction<InformationSlice[]>) => {
      state.allInfo = action.payload;
    },
  },
});

export const { getAllInfo, infoForCalendar } = information.actions;

export default information.reducer;
