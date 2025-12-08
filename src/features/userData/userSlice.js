import { createSlice } from "@reduxjs/toolkit";

const userDataSlice = createSlice({
    name: "userData",
    initialState: {
        datas: [],
    },
    reducers: {
        sendData: (state, action) => {
            // console.log(state)
            // console.log(action.payload)
            localStorage.setItem("userInfo", JSON.stringify(action.payload))
        },
        renewData: (state, action) => {
            localStorage.removeItem("userInfo")
            localStorage.setItem("userInfo", JSON.stringify(action.payload))
        }
    }
})

export const { sendData } = userDataSlice.actions;
export default userDataSlice.reducer;