import { createSlice } from "@reduxjs/toolkit";


const togglesignSlice = createSlice({
    name:"toggleSign",
    initialState:{
        signIn:false,
    },
    reducers:{
        toggleSignFn:(state, action) =>{
            state.signIn=action.payload;
        }
    }
})

export const { toggleSignFn } = togglesignSlice.actions;
export default togglesignSlice;