// import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from './context/AuthContext'
// import { ProductContext } from './context/ProductContext'
// import { BasketContext } from './context/BasketContext'
// import { useContext } from 'react'

const Navbar = () => {
  const {setIsAuth} = useContext(AuthContext)
  const logOut = ()=>{
    setIsAuth(false)
    localStorage.removeItem('token')
  }
// const {items} = useContext(ProductContext)
// const {basket} = useContext(BasketContext)
  return (
    <div className=' hidden lg:flex justify-between p-3 items-center max-w-[1440px] mx-auto'>
      <div className='flex justify-center items-center'>
        <div className='flex justify-center items-center gap-2'>
        <img className='w-4' src="/assets/logo/phone.png" alt="" />
        <p className='text-gray-500 text-[14px]'>+998 71 203 33 33</p>
        </div>
        <div>
        <Link className={''} to="/"></Link>
        </div>
      </div>
      <nav className='flex justify-center items-center gap-9 '>
      <Link className={' hover:text-black text-gray-500 text-[12px] transition-all'} to="/about">О нас</Link>
      <Link className={'px-[6px] py-[4px] rounded-[7px] bg-red-600 text-white text-[12px]'} to="/mediaclub">Mediaclub</Link>
      <Link className={'bg-blue-900 px-[6px] py-[3.5px] rounded-[7px] text-white flex justify-center items-center text-[12px]'} to="/blog">Mediablog <img className='w-5 rotate-[-45deg]' src="/assets/logo/right-arrow.png" alt="" /> </Link>
     
      <Link className={' hover:text-black text-gray-500 text-[14px] transition-all'} to="/delivery">Доставка</Link>
      <Link className={' hover:text-black text-gray-500 text-[14px] transition-all'} to="/ourshops">Магазины</Link>
      <Link className={' hover:text-black text-gray-500 text-[14px] transition-all'} to="/contact">Связаться с нами!</Link>
      <Link className={' hover:text-black text-gray-500 text-[14px] transition-all'} to="/products">products</Link>
      <Link className={' hover:text-black text-gray-500 text-[14px] transition-all'} >Русский</Link>
      
    </nav>
    {/* <button onClick={logOut}>log out</button> */}
    </div>
  )
}

export default Navbar