import React from 'react'
import { BrowserRouter, Form, Route, Routes } from 'react-router-dom'
import Footer from './Footer'
import Girls from './Girls'
import Home from './Home'
import Nav from './Nav'
import Collection from './Collection'
import CoordSets from './CoordSets'
import Sale from './Sale'



const App = () => {
  return (
    <>










<Nav/>
    <Home/>
    <Footer/>
    <Girls/>
    <Collection/>
    <CoordSets/>
    <Sale/>
    </>
  )
}

export default App