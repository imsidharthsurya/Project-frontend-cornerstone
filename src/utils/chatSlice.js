import {createSlice} from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const chatSlice=createSlice({
    name:"chat",
    initialState:{
        chats:[]
    },
    reducers:{
        addChat:(state,action)=>{
            state.chats.push(action.payload)
        }
    }
})

export const {addChat}=chatSlice.actions;
export default chatSlice.reducer;