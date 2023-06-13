import React, { useContext } from "react"
import classes from './Total.module.css'
import CartContext from "../Store/CartContext"
import { useSelector,useDispatch } from "react-redux"
import { formElements } from "../ReduxStore/redux"


const Total = () =>{
 const ctx = useContext(CartContext)
const dispatch = useDispatch()
const isLightTheme = useSelector(state =>state.isLightTheme)

 let total =0
 total  = ctx.items.reduce((sum,initial)=>{
 return sum + parseInt(initial);
},0)

 const toggleHandler = (event) =>{
     event.preventDefault()
     dispatch(formElements.toggleTheme())
}
        console.log(isLightTheme)

        

     //   console.log(total)
return(
    <div>
        <form className={classes.containers}>
            <label>Total :</label>
             <span>{total}</span>
        </form>
        <div className={classes.premium}>
      {total>500 && <button  className={`${isLightTheme ? classes.light : classes.dark}`} onClick = {toggleHandler}>Premium</button>}
      </div>
    </div>
)
}

export default Total