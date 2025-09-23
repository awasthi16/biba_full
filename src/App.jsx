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











    <BrowserRouter>

    <Nav/>

    <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/dress_materials' element={<Dress_Materials/>}/>
        <Route path='/bottoms' element={<Bottoms/>}/>
        <Route path='/jewellery' element={<Jewellery/>}/>
        <Route path='/fragrances' element={<Fragrances/>}/>
        <Route path='/Girls' element={<Girls/>}/>
         <Route path='/Collection' element={<Collection/>}/>
          <Route path='/CoordSets' element={<CoordSets/>}/>
           <Route path='/Sale' element={<Sale/>}/>


    </Routes>
    
    <Footer/>
    
    </BrowserRouter>
   
   
    </>
  )
}

export default App