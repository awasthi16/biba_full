import React from 'react'
import { BrowserRouter, Form, Route, Routes } from 'react-router-dom'
import Footer from './Footer'
import Girls from './Girls'
import Home from './Home'
import Nav from './Nav'
import Collection from './Collection'
import CoordSets from './CoordSets'
import Sale from './Sale'
import Dress_Materials from './Dress_Materials'
import Bottoms from './Bottoms'
import Jewellery from './Jewellery'
import Fragrances from './Fragrances'




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