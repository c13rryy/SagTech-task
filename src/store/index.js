import { configureStore } from "@reduxjs/toolkit";

import auth from "./auth";

import idTaker from "./idTaker";

import inputData from "./input-data";

import showData from "./showData";


const store = configureStore({
    reducer: {
       auth,
       idTaker, 
       inputData,
       showData
    }
})

export default store;

