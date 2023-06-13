import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import CartProvider from './Store/CartProvider.jsx'
import { Provider } from 'react-redux'
import store from './ReduxStore/redux.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  
 <BrowserRouter>
  <CartProvider>

    <Provider store={store}>
    <App />
    </Provider>
  </CartProvider>
</BrowserRouter>,
)
