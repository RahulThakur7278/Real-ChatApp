import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {AuthProvider} from "./Context/Authprovider.jsx"
import { BrowserRouter } from 'react-router-dom'
import { SocketProvider } from './Context/SocketContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <AuthProvider>
        <SocketProvider>
        <App></App>
        </SocketProvider>
  
 </AuthProvider>
    </BrowserRouter>
 
)
