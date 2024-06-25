// import React from "react";
import "../style.scss"
import Search from "./Search"
import { useState } from "react"
import HeaderRight from "./headerComps/HeaderRight"
import { Link } from "react-router-dom"
import Katalog from "./Katalog"
import { HiMenuAlt3 } from "react-icons/hi"
import BurgerMenu from "./BurgerMenu"
import { ProductContext } from "../context/ProductContext"
import { useContext } from "react"
import { GoX } from "react-icons/go"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  // const [open, setOpen] = useState(false)
  const { handleBurger, open, setOpen } = useContext(ProductContext)
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }
  // const handleBurger = () => {
  //   setOpen(!open)
  // }
  const Burger = () => {
    if (setOpen === false) {
      setOpen("")
    }
  }
  return (
    <div className=" bg-white  sticky top-0 p-2 z-40">
      <div
        className="max-w-[1440px] mx-auto 
            lg:flex justify-between items-center "
      >
        <div className="flex justify-between items-center p-4 flex-row-reverse lg:flex-row">
          <Link to={"/"}>
            <img src="https://mediapark.uz/svg/logo.svg" alt="" />
          </Link>
          <div
            className="lg:hidden"
            onClick={() => {
              handleBurger(), open ? <BurgerMenu /> : ""
            }}
          >
            <HiMenuAlt3
              id="menu"
              className="origin-center rotate-180 rotate-y-180 text-[32px] text-gray-700"
            />
          </div>
          <div className="bg-red-600 text-white cursor-pointer w-[140px] h-[47px] rounded-[12px] hidden lg:flex justify-center items-center lg:ml-4">
            <div
              className={`header__menu ${isOpen ? "openmenu" : ""}`}
              onClick={() => {
                handleToggle(), isOpen ? <Katalog /> : ""
              }}
              id="header__menu"
            >
              <div>
                <span className="line-1 text-white"></span>
                <span className="line-2"></span>
                <span className="line-3"></span>
              </div>
              <p className=" font-semibold font-sans ml-[-20px]">Katalog</p>
            </div>
          </div>
        </div>
        <Search />
        <HeaderRight />
      </div>
      {open ? (
        <div className="fixed lg:hidden top-0 left-0 right-0 bg-white w-full h-[1000px]">
          <div className=" flex justify-between items-center p-2 w-[55%]">
            <button onClick={() => Burger(setOpen(false))}>
              <GoX className=" text-[38px] font-bold"/>
            </button>
            <span className="font-bold">Меню</span>
          </div>
          <BurgerMenu />
        </div>
      ) : (
        ""
      )}
      {isOpen ? <Katalog /> : ""}
    </div>
  )
}

export default Header
