// import React from 'react'
import { Carousel } from "../components/Carousel";
import Products from "./Products";
import Popular from "../components/headerComps/popular/Popular";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const Home = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    <div className="max-w-[1440px] mx-auto flex justify-center items-center gap-6 flex-col mt-10">
      {isAuth ? (
        <div className="w-full">
          <Carousel />
          <Popular />
          <h1 className="mt-7 font-bold px-4 text-[26px]">Хить продаж</h1>
          <Products />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-4 w-[300px] md:w-[350px] p-4 border-[1px] border-gray-300 rounded-2xl hover:shadow-xl hover:shadow-gray-200 mt-[100px]">
          <h1 className="text-[22px] font-bold text-blue-950">Вход или регистрация</h1>
          <Link
            className="bg-red-500 text-white p-3 rounded-xl w-full text-center"
            to={"/login"}
          >
            вход
          </Link>
          <Link
            className=" border-2 border-red-500 text-red-600 font-semibold text-center p-3 rounded-xl w-full"
            to={"/register"}
          >
            регистрация
          </Link>
          <div className="flex justify-center items-center gap-4 px-4">
            <input className="accent-red-600 scale-[1.5]" type="checkbox" />
          <a href="https://mediapark.uz/public-offer" className=" text-[14px] md:text-[16px]"> Принимаю условияПолитики Конфедициальности</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
