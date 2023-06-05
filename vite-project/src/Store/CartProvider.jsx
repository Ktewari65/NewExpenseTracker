import React, { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) =>{
    const[token,setToken] = useState(localStorage.getItem("Token"))
    const  isToken= !!token
     
    localStorage.setItem("Token",token)



    const tokenHandler = (token) =>{
         setToken(token)
    }

    const object = {
        token:token,
        addToken:tokenHandler
    }
    return(
        <CartContext.Provider  value={object}>
               {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider