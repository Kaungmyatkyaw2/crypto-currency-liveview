import { configureStore } from "@reduxjs/toolkit";
import CoinSlicer from "./feature/CoinSlicer";


const store = configureStore({
    reducer:{
        coins : CoinSlicer
    }
})


export default store