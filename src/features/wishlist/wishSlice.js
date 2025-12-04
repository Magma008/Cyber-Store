import { createSlice } from "@reduxjs/toolkit";

const wishSlice = createSlice({
    name: "wishlist",
    initialState: {
        items: [],
    },
    reducers: {
        togggleWishlist: (state, action) => {
            // state.items.push(action.payload.card)
            const product = action.payload.card
            const exists = state.items.find((item) =>  item.id === product.id)
            
            if (exists) {
                state.items = state.items.filter((item) => item.id !== product.id)
            } else {
                state.items.push(product);
                console.log("Qo'shildi");            
            }
            
        }
    }
})

export const { togggleWishlist } = wishSlice.actions;
export default wishSlice.reducer;