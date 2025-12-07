import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
    name: "payment",
    initialState: {
        infos: [
            
        ],
    },
    reducers: {
        getAddress: (state, action) => {
            state.infos.push(action.payload)
        }
    }
})

export default paymentSlice.reducer;
export const { getAddress } = paymentSlice.actions; 