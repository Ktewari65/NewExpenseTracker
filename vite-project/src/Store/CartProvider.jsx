import React, { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) =>{
    const[token,setToken] = useState(localStorage.getItem("Token"))
    const  isToken= !!token
   // console.log(isToken)
     
    localStorage.setItem("Token",token)



    const tokenHandler = (token) =>{
         setToken(token)
    }

    const removeTokenHandler = () =>{
        console.log(isToken)
        localStorage.removeItem("Token")
        setToken(null)
    }

    const object = {
        token:token,
        isLoggedIn:isToken,
        addToken:tokenHandler,
        removeToken:removeTokenHandler
    }
    return(
        <CartContext.Provider  value={object}>
               {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider