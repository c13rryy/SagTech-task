import { configureStore } from "@reduxjs/toolkit";

import auth from "./auth";

import idTaker from "./idTaker";

import inputData from "./input-data";


const store = configureStore({
    reducer: {
       auth,
       idTaker, 
       inputData
    }
})

export default store;

