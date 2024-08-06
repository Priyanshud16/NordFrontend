import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signin from '../Pages/Signin'
import Login from '../Pages/Login'
import MainComponent from '../MainComponent/MainComponent'
import SingleProduct from '../Pages/SingleProduct'
import PrivateRoute from './PrivateRoute'
import AddToCart from '../Pages/AddToCart'

function AllRoutes() {
  return (
   
      <Routes>
        <Route path='/' element={<MainComponent/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/product/:id' element={
          <PrivateRoute>
           <SingleProduct/>
          </PrivateRoute>
          } />
          <Route path="/cart" element={<AddToCart/>}/>
      </Routes>
   
  )
}

export default AllRoutes
