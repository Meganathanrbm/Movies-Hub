import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        auth:false,
        userId:"",
        email:"",
        password:"",
        username:"",
        error:null,
        favorite:[]
    },
    reducers:{
        isAuth:(state,action)=>{
            state.auth = action.payload;
        },
        addEmail:(state,action)=>{
            state.email = action.payload;
        },
        addUserId:(state,action)=>{
            state.userId = action.payload;
        },
        addPassword:(state,action)=>{
            state.password = action.payload;
        },
        addUsername:(state,action)=>{
            state.username = action.payload;
        },
        addError:(state,action)=>{
            state.error = action.payload
        },
        addToFavorite:(state,action) =>{
            state.favorite = action.payload;
        }
    }
})
export const userActions = userSlice.actions;
export default userSlice;

