import React, { useContext } from "react";
import  './LoginForm.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../../Store/CartContext";

 const LoginForm = () =>{

  const cartCtx= useContext(CartContext)
    const[login,setLogin] = useState(true)
    const[name,setName] = useState('')
    const[password,setPassword] = useState('')
    const navigate = useNavigate()

    const loginHandler = () =>{
        setLogin((login) => !login)
    }

    const nameHandler = (event) =>{
        setName(event.target.value)
    }

    const passwordHandler = (event) =>{
        setPassword(event.target.value)
    }

    const formHandler = (event) =>{
   event.preventDefault();
   const object ={
    name:name,
    password:password
   }
   let url =''
       if(login){
         url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBFfooTLjTzP3FcfAOJUdY4VfItSr4ifpw'
       }
       else {
        url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBFfooTLjTzP3FcfAOJUdY4VfItSr4ifpw'
       }
    fetch(url,{
        method:'POST',
        body:JSON.stringify({
           email:name,
           password:password,
           returnSecureToken:true
        }),
       
        headers:{
            'Content-Type' : 'Application/json'
        }
    }).then((data) =>{
       if(data.ok) {
       return data.json()
       }
       else{
        return data.json().then((response) =>{
             const errorMessage = response.error.message;
             console.log(errorMessage)
             throw new Error(errorMessage)
        })
       }
    }).then((response) =>{
        navigate('/home')
        cartCtx.addToken(response.idToken)     // console.log(response.idToken)
    }).catch((error) =>{
        console.log(error)
    })

    }
return(
    
    <div className="login-box">
    <h2>{login ? 'Login' : 'Signup'}</h2>
    <form onSubmit={formHandler}>
      <div className="user-box">
        <input type="text"  required=""  onChange={nameHandler}/>
        <label>Username</label>
      </div>
      <div className="user-box">
        <input type="password"  required=""  onChange={passwordHandler}/>
        <label>Password</label>
      </div>
      <a href="#">
      <button>{login ? "login " : "Create Account"}</button>
       <br></br>
      <button onClick={loginHandler}>{login ? 'Signup' : 'Signin'}</button>
      </a>
    </form>
  </div>
)
 }
  export default LoginForm