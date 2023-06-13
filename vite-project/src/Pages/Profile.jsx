import React, { useContext } from "react";
import classes from './Profile.module.css'
import { useState } from "react";
import CartContext from "../Store/CartContext";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import { formElements } from "../ReduxStore/redux";




const Profile = () =>{
    const logout = useSelector(state=>state.isLoggedIn)
    const dispatch = useDispatch()
    console.log(logout)
    const ctx = useContext(CartContext)
    const navigate = useNavigate()
    const [name,setName]= useState('')
    const[photo,setPhoto] = useState('')

const nameHandler = (event) =>{
     setName(event.target.value)
  }

const photoHandler = (event) =>{
     setPhoto(event.target.value)
  }

      // LogOut Functionallity

const logoutHandler = () =>{
    //  ctx.removeToken()
    dispatch(formElements.logout())
      navigate("/")
   }

const formHandler = (event) =>{
    event.preventDefault();
    const object ={
     
       name:name,
       photoURL:photo,
      
    }
      console.log(object)
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
        const response = data.json().then((data)=>{})
      })
      .catch((err)=>{
        console.log(err)
      })
    }
 

  const verifyHandler = () =>{
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBFfooTLjTzP3FcfAOJUdY4VfItSr4ifpw',{
        method:'POST',
        body:JSON.stringify({
          requestType:"VERIFY_EMAIL",
           idToken:ctx.token,
        }),
        headers:{
          "Content-Type": "application/json"
        }
      }).then((data)=>{
         let response = data.json().then((response)=>{console.log(response)})
      }).catch((error)=>{
        console.log(error)
      })
     }

return(
  <div>
     <form className={classes.container} >
       <h3>Contact Details:</h3>
          <label >Full Name:</label>
               <input type="text"  onChange={nameHandler}/>
                      <br></br>
          <label className={classes.child}>Profile Photo URL:</label>
               <input className={classes.child}  type="text"  id="photoUrl"  onChange={photoHandler}/>
                       <br></br>
          <button  onClick={formHandler} className={classes.button}>Update</button>
          <button onClick={editHandler}  className={classes.edit}>Edit</button> 
          <button  onClick={verifyHandler} className={classes.verify}>Verify Email</button> 
      </form>
          <button onClick={logoutHandler} className={classes.logout}>Logout</button>     
  </div>
    )
}

export default Profile

