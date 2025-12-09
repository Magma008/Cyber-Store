import { createSlice } from "@reduxjs/toolkit";

const paymentSlice = createSlice({
    name: "payment",
    initialState: {
        infos: [
            
        ],
    },
    reducers: {
        getData: (state, action) => {
            // console.log(action.payload);
            
        }
    }
})

export default paymentSlice.reducer;
export const { getData } = paymentSlice.actions; 