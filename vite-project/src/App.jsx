import LoginForm from './Component/UI/LoginForm'
import './App.css'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import CartContext from './Store/CartContext'
import { useContext } from 'react'
import { useSelector } from 'react-redux'
import "./App.css"




function App() {
  const isLoggedIn = useSelector(state =>state.isLoggedIn)
  const cartCtx= useContext(CartContext)
 
  return (
    <div className='main'>
   
      <Routes>
        <Route exact path="/" element={<LoginForm/>} />
       { !cartCtx.isLoggedin  && <Route path="/home"  element={<Home/>}/> }
       { !cartCtx.isLoggedin  && <Route path="/details"  element={<Profile/>}/>}
        
      </Routes>
     
     
    </div>
   
  )
}

export default App
