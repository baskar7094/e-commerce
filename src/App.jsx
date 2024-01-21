import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout'
import Home from './components/sub/home/home'
import About from './components/sub/about/about'
import Contact from './components/sub/contact/contact'
import Collection from './components/products/collections/collection'


 function App() {

  return (
    <>
  <BrowserRouter>
  <Routes>
<Route path='/' element={<Layout/>}>
  <Route index element={<Home/>}/>
  <Route path='about' element={<About/>}/>
  <Route path='contact' element={<Contact/>}/>
  <Route path='collections' element={<Collection/>}/>
</Route>

  </Routes>
  
  </BrowserRouter>
    </>
  )
}

export default App
