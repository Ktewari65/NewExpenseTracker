import React, { useState } from "react";
import classes from './Home.module.css' 
import ExpenseForm from "../Expense/ExpenseForm";
import { Link } from "react-router-dom";
import ExpenseList from "../Expense/ExpenseList";
const Home = (props) =>{
  const[data,setData] = useState([])
console.log(data)
  const comingDataHandler = (items) =>{
       setData((previous)=>{
        console.log(previous)
           return [...previous,items]
      })
   
  }  

  return(
    <div>
        <hr className={classes.parent}></hr>
           <div className={classes.home}>
               Welcome to Expense Tracker !!!
           </div>
                   <h3 className={classes.profile}>Your profile is Incomplete!!!  <Link to="/details">Complete Now</Link></h3>
                  <ExpenseForm comingData={comingDataHandler}/>
                  <ExpenseList onSend={data}/>
     </div>

  )
}
 export default Home