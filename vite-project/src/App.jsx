import LoginForm from './Component/UI/LoginForm'
import './App.css'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import CartContext from './Store/CartContext'
import { useContext } from 'react'


function App() {
   const cartCtx= useContext(CartContext)
   console.log(cartCtx.isLoggedIn)

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LoginForm/>} />
       { !cartCtx.isLoggedin  && <Route path="/home"  element={<Home/>}/> }
       { !cartCtx.isLoggedin  && <Route path="/details"  element={<Profile/>}/>}
        
      </Routes>
     
     
    </div>
   
  )
}

export default App
