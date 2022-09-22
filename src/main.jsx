import React from 'react'
import ReactDOM from 'react-dom/client'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Nav } from './components/nav/Nav'
import { Viewmain } from './components/viewmain/Viewmain'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Nav/>
    <Viewmain/>

    <Footer/>
    
  </React.StrictMode>
)
