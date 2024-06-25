import React from 'react'
import { Link } from 'react-router-dom';
import { FcLike } from "react-icons/fc";
const PUST2 = () => {
  return (
    <div className=' h-screen flex flex-col justify-center items-center gap-4 mt-[-100px]'>
        <FcLike   className='text-red-600 bg-red-50 w-[80px] h-[80px] p-4 text-[22px]  rounded-xl'/>
        <h1 className=' font-semibold text-[22px]'>У вас нет избранных товаров</h1>
        <p className='w-[25%] text-gray-600 font-semibold text-center'>Добавляйте товары в Избранное с помощью ❤️️</p>
        <Link to={'/'} className='bg-red-500 text-white w-[20%] p-3 text-center rounded-lg'>Перейти</Link>
    </div>
  )
}

export default PUST2