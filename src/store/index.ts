import { configureStore } from "@reduxjs/toolkit";

import auth from "./auth";

import taskSlice from "./taskSlice";

import information from "./information";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    auth,
    taskSlice,
    information,
  },
});

export default store;

export const useAppDispatch: () => typeof store.dispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
