import { configureStore } from "@reduxjs/toolkit";

import auth from "./auth";

import taskSlice from "./taskSlice";

import information from "./information";

const store = configureStore({
  reducer: {
    auth,
    taskSlice,
    information,
  },
});

export default store;
