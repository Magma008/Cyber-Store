import { createSlice } from "@reduxjs/toolkit";

let localData = localStorage.getItem("wishlist");
let data = (JSON.parse(localData));

const wishSlice = createSlice({
    name: "wishlist",
    initialState: {
        items: data || [],
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
            }
            localStorage.setItem("wishlist", JSON.stringify(state.items)) 
        }
    }
})

export const { togggleWishlist } = wishSlice.actions;
export default wishSlice.reducer;