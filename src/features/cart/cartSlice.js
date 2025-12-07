import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartItems",
    initialState: {
        items: [],
    },
    reducers: {
        toggleCart: (state, action) => {
            const product = action.payload
            const exists = state.items.find((item) => item.id == product.id)

            if (exists) {
                state.items = state.items.filter((item) => item.id != product.id)
            } else {
                state.items.push({ ...product, quantity: 1, totalPrice: Number(product.onDiscount ? product?.dsPrice : product?.price) })
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.id != action.payload.id)
        },
        increaseItem: (state, action) => {
            const increment = state.items.find((item) => String(item.id) == String(action.payload))
            if (increment) {
                increment.quantity += 1
                increment.totalPrice = (increment.onDiscount ? Number(increment.totalPrice) + Number(increment.dsPrice) : Number(increment.totalPrice) + Number(increment.price))

            }
            // console.log(action.payload);
            // console.log(String(action.payload));
            // let itm = state.items.find((numb) => (String(numb.id) === String(action.payload)))
            // if (itm) {
            //     state.items.find((item) => item.id == action.payload ? item.quantity += 1 : item.quantity)
            // console.log(b.quantity += 1)

        },
        decreaseItem: (state, action) => {
            const decrement = state.items.find((item) => String(item.id) == String(action.payload))

            if (decrement) {
                if (decrement.quantity > 1) {
                    decrement.quantity -= 1
                    decrement.totalPrice = (decrement.onDiscount ? Number(decrement.totalPrice) - Number(decrement.dsPrice) : Number(decrement.totalPrice) - Number(decrement.price))
                }
            }
        },
    }
}
)

export const { toggleCart, removeFromCart, increaseItem, decreaseItem } = cartSlice.actions;
export default cartSlice.reducer;