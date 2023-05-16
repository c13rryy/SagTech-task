import { configureStore } from "@reduxjs/toolkit";

import auth from "./auth";

import idTaker from "./idTaker";


import showData from "./showData";


const store = configureStore({
    reducer: {
       auth,
       idTaker, 
       showData
    }
})

export default store;

