import { configureStore } from "@reduxjs/toolkit";
import wordleSlice from "./wordleSlice";


export const store =configureStore({
    reducer:{
        auth:wordleSlice,
        //TODO: add more slices here for posts
    }
},
    
);
export default store;