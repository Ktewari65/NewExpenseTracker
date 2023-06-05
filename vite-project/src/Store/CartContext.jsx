import React, { createContext } from "react";
 const CartContext = createContext({
    token:'',
    addToken: (token)=>{}
 })

 export default CartContext