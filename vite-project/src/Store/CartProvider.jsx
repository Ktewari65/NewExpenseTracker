import React, { useEffect, useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) =>{
    const[token,setToken] = useState(localStorage.getItem("Token"))
    const[item,setItem] = useState([])
    const  isToken= !!token

    useEffect(()=>{
        setItem(item)
    },[item])
 
     console.log(item)
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
        items:item,
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