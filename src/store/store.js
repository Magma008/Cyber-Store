import { configureStore } from "@reduxjs/toolkit";
import wishSlice from "../features/wishlist/wishSlice";

const store = configureStore({
    reducer: {
        wishlist: wishSlice,
    },
})

export default store