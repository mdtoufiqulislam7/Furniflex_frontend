import { configureStore } from "@reduxjs/toolkit";
import auth_slice from "./auth_slice";
import product_slice from "./product_slice";





export const store = configureStore({

    reducer:{
        user:auth_slice,
        item:product_slice,

       
    }
})


export default store