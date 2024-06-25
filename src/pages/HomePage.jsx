// import React from 'react'
import { Carousel } from '../components/Carousel'
import Products from './Products'
import Popular from '../components/headerComps/popular/Popular'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='max-w-[1440px] mx-auto flex justify-center items-center gap-6 flex-col mt-10'>      
      <Carousel />
      <Popular />
      <h1 className='mt-7 font-bold text-[26px]'>Хить продаж</h1>
      <Products />
    </div>
  )
}

export default HomePage