import { configureStore } from "@reduxjs/toolkit";
import wishSlice from "../features/wishlist/wishSlice";
import cartSlice from "../features/cart/cartSlice";
import paySlice from "../features/payment/paySlice";
import userDataSlice from "../features/userData/userSlice";

const store = configureStore({
    reducer: {
        wishlist: wishSlice,
        cartItems: cartSlice,
        paymentDetails: paySlice,
        userData: userDataSlice,
    },
})

export default store