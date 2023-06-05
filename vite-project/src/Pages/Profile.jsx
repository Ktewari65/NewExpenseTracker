import React, { useContext } from "react";
import classes from './Profile.module.css'
import { useState } from "react";
import CartContext from "../Store/CartContext";
import axios from "axios";



const Profile = () =>{

    const ctx = useContext(CartContext)
    const [name,setName]= useState('')
    const[photo,setPhoto] = useState('')

  const nameHandler = (event) =>{
     setName(event.target.value)
  }

  const photoHandler = (event) =>{
     setPhoto(event.target.value)
  }

  const formHandler = (event) =>{
    event.preventDefault();
    const object ={
     
       name:name,
       photoURL:photo,
      
    }
      console.log(ctx.token,name,photo)
      fetch('https://expensetreacker-default-rtdb.firebaseio.com/tracker.json',{
        method:'POST',
        body: JSON.stringify(object),
        headers:{
           "Content-Type":"Application.json"
        }
      }).then((response)=>{
      // console.log(response)
      }).catch((err)=>{
        console.log(err)
      })
    }
 
    const editHandler = () =>{
      fetch('https://expensetreacker-default-rtdb.firebaseio.com/tracker.json')
      .then((data) =>{
        const response = data.json().then((data)=>{console.log(data)})
      })
      .catch((err)=>{
        console.log(err)
      })
    }
 

    

    return(
      <div>
 <form className={classes.container}  onSubmit={formHandler}>
      <h3>Contact Details:</h3>
          <label >Full Name:</label>
               <input type="text"  onChange={nameHandler}/>
                      <br></br>
          <label className={classes.child}>Profile Photo URL:</label>
               <input className={classes.child}  type="text"  id="photoUrl"  onChange={photoHandler}/>
                       <br></br>
          <button className={classes.button}>Update</button>
          
          {/* <button>Cancel</button> */}
  </form>
   <button onClick={editHandler}>Edit</button> 
         
 </div>
    )
}

export default Profile

