import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import AuthContextProvider from './Component/AuthContextProvider.jsx'
import { CartProvider } from './Component/CartContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
    <ChakraProvider>
        <AuthContextProvider>
            <CartProvider>
            <App />
            </CartProvider>
        
        </AuthContextProvider>
    </ChakraProvider>
    </BrowserRouter>
 
)
