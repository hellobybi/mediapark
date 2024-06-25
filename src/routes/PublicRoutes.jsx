import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from './auth/Login'
import Register from './auth/Register'

const PublicRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='*' element={<Home />}/>
    </Routes>
  )
}

export default PublicRoutes