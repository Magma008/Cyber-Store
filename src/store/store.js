import { configureStore } from "@reduxjs/toolkit";
import wishSlice from "../features/wishlist/wishSlice";
import cartSlice from "../features/cart/cartSlice";

const store = configureStore({
    reducer: {
        wishlist: wishSlice,
        cartItems: cartSlice,
    },
})

export default store