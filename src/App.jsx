import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Footer'
import Home from './Home'
import Nav from './Nav'
import Dress_Materials from './Dress_Materials'
import Bottoms from './Bottoms'
import Jewellery from './Jewellery'
import Fragrances from './Fragrances'



const App = () => {
  return (
    <>

    <BrowserRouter>

    <Nav/>

    <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/dress_materials' element={<Dress_Materials/>}/>
        <Route path='/bottoms' element={<Bottoms/>}/>
        <Route path='/jewellery' element={<Jewellery/>}/>
        <Route path='/fragrances' element={<Fragrances/>}/>
        <Route path='/'/>

    </Routes>
    
    <Footer/>
    
    </BrowserRouter>
   
   
    </>
  )
}

export default App