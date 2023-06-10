import React, { useContext } from "react"
import classes from './Total.module.css'
import CartContext from "../Store/CartContext"
const Total = () =>{
 const ctx = useContext(CartContext)

 console.log(ctx.items)
    let total =0
    total  = ctx.items.reduce((sum,initial)=>{
        return sum + parseInt(initial);
        },0)

        

     //   console.log(total)
return(
    <div>
        <form className={classes.containers}>
            <label>Total :</label>
             <span>{total}</span>
        </form>
    </div>
)
}

export default Total