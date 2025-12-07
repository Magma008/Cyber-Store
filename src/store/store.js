import { configureStore } from "@reduxjs/toolkit";
import wishSlice from "../features/wishlist/wishSlice";
import cartSlice from "../features/cart/cartSlice";
import paySlice from "../features/payment/paySlice";

const store = configureStore({
    reducer: {
        wishlist: wishSlice,
        cartItems: cartSlice,
        paymentDetails: paySlice,
    },
})

export default store