import { createSlice } from "@reduxjs/toolkit";
//const store = require("./redux")
import { configureStore } from "@reduxjs/toolkit";


const isToken = localStorage.getItem("Token")
const token = !!isToken
//console.log(token)
const initialState = { setName : "" , setDescription : "", 
setCategory:"", isLoggedIn:token,
isLightTheme: true}

const auth = createSlice({
    name:"One",
    initialState,
    reducers: {
         setName(state,action){
         state.setName = action.payload
         },
         setDescription(state,action){
         state.setDescription = action.payload
         },
         setCategory(state,action){
         state.setCategory = action.payload
         },
         login(state){
         state.isLoggedIn= true
         },
         logout(state){
         state.isLoggedIn = false
         },
         toggleTheme(state){
        state.isLightTheme = false
         }
    }
})

const store = configureStore({
    reducer: auth.reducer
})

export default store

export const formElements = auth.actions
