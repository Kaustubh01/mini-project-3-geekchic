import React from 'react'
import Navbar from './components/Navbar'
import './app.css'
import {Routes, Route}from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductForm from './pages/ProductForm'
import { DarkModeProvider, useDarkMode } from './contexts/DarkModeContext'
import { ProductsProvider } from './contexts/products/ProductContext'
import Product from './pages/Product'
import Buy from './pages/Buy'
import Search from './pages/Search'


function App() {
  const {isDarkMode, toggleDarkMode} = useDarkMode()
  return (
    <ProductsProvider>
    <div className={isDarkMode?'App dark-mode':'App'}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>} />
        <Route path='/productform' element = {<ProductForm/>}/>
        <Route path='/product/:id' element = {<Product/>} />
        <Route path='/buy'element = {<Buy/>}/>
        <Route path='search' element= {<Search/>} />
      </Routes>
  
      </div>
      </ProductsProvider>
  )
}

export default App