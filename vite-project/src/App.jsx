import LoginForm from './Component/UI/LoginForm'
import './App.css'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Profile from './Pages/Profile'


function App() {
 

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LoginForm/>} />
        <Route path="/home"  element={<Home/>}/>
        <Route path="/details"  element={<Profile/>}/>
        
      </Routes>
     
     
    </div>
   
  )
}

export default App
