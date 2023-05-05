import { configureStore } from "@reduxjs/toolkit";

import auth from "./auth";

import inputData from "./input-data";


const store = configureStore({
    reducer: {
       auth,
       inputData
    }
})

export default store;

