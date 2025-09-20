import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Footer'
import Nav from './Nav'


const App = () => {
  return (
    <>
    <Nav/>

      {/* <BrowserRouter>

      <Routes>

      <Route path='/' element={<Home/>} />
      <Route path='/suits' element={<Suits/>}/>
      <Route path='/kurtas' element={<Kurtas/>}/>
      <Route path='/dresses' element={<Dresses/>}/>
      

      </Routes>
      
      
      
      </BrowserRouter> */}
    
    <Footer/>
   
    </>
  )
}

export default App