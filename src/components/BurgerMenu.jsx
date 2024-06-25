// import React from 'react'
import { Link } from "react-router-dom"
import { GoChevronRight } from "react-icons/go"
import { useContext } from "react"
import { ProductContext } from "../context/ProductContext"

const BurgerMenu = () => {
  // const {items} = useContext(ProductContext)
  // const {basket} = useContext(BasketContext)
  const { Burger,setOpen } = useContext(ProductContext)
  return (
    <div className="w-full p-3 absolute left-0 ">
      <nav className="flex flex-col justify-center items-start gap-5 ">
        <div>
          <Link className={""} to="/"></Link>
        </div>
        <Link
        onClick={()=>Burger(setOpen(false))}
          className={
            "flex justify-between items-center p-3 border-[1px] border-gray-100 w-full rounded-2xl"
          }
          to="/about"
        >
          <span className="font-bold text-[14px]">О нас</span>
          <GoChevronRight className=" font-bold text-[33px] text-gray-500"/>
        </Link>
        <Link
        onClick={()=>Burger(setOpen(false))}
          className={
            " bg-red-600 flex justify-between items-center p-3 w-full text-white rounded-2xl"
          }
          to="/mediaclub"
        >
          <span className="font-bold text-[14px]">
          Mediaclub
          </span>
          <GoChevronRight className=" font-bold text-[33px] text-white"/>
        </Link>
        <Link
        onClick={()=>Burger(setOpen(false))}
          className={
            "bg-blue-950 flex justify-between items-center p-3 w-full text-white rounded-2xl"
          }
          to="/blog"
        >
          <span className="text-[14px] font-bold">Mediablog</span>
          <GoChevronRight className=" font-bold text-[33px] text-white"/>
        </Link>

        <Link
        onClick={()=>Burger(setOpen(false))}
          className={
            "flex justify-between items-center p-3 border-[1px] border-gray-100 w-full rounded-2xl"
          }
          to="/delivery"
        >
          <span className="font-bold text-[14px]">Доставка</span>
          <GoChevronRight className=" font-bold text-[33px] text-gray-500"/>
        </Link>
        <Link
        onClick={()=>Burger(setOpen(false))}
          className={
            "flex justify-between items-center p-3 border-[1px] border-gray-100 w-full rounded-2xl"
          }
          to="/ourshops"
        >

          <span className="font-bold text-[14px]">Магазины</span>
          <GoChevronRight className=" font-bold text-[33px] text-gray-500"/>
        </Link>
        <Link
        onClick={()=>Burger(setOpen(false))}
          className={
            "flex justify-between items-center p-3 border-[1px] border-gray-100 w-full rounded-2xl"
          }
          to="/contact"
        >
          <span className="font-bold text-[14px]">Связаться с нами!</span>
          <GoChevronRight className=" font-bold text-[33px] text-gray-500"/>
        </Link>
        <Link
        onClick={()=>Burger(setOpen(false))}
          className={
            " flex justify-between items-center p-3 border-[1px] border-gray-100 w-full rounded-2xl"
          }
        >
          <span className="font-bold text-[14px]">язык</span>
          <GoChevronRight className=" font-bold text-[33px] text-gray-500"/>
        </Link>
      </nav>
    </div>
  )
}

export default BurgerMenu
