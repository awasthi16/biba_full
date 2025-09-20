import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Footer'
import Home from './Home'
import Nav from './Nav'


const App = () => {
  return (
    <>
<Nav/>
    <Home/>
    <Footer/>
   
    </>
  )
}

export default App