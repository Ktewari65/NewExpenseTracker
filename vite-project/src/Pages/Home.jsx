import React from "react";
import classes from './Home.module.css'


import { Link } from "react-router-dom";
const Home = () =>{
  return(
    <div>
       
        <hr className={classes.parent}></hr>
           <div className={classes.home}>
               Welcome to Expense Tracker !!!
           </div>
                   <h3 className={classes.profile}>Yor profile is Incomplete!!!  <Link to="/details">Complete Now</Link></h3>
                  

    </div>

  )
}
 export default Home