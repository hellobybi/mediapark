// import React from "react";
import { Link } from "react-router-dom";
import { BasketContext } from "../../context/BasketContext";
import { ChosenContext } from "../../context/ChosenContext";
import { BsBoxSeam } from "react-icons/bs";
import { SlBasket } from "react-icons/sl";
import { FaScaleUnbalanced } from "react-icons/fa6";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { RiUserLine } from "react-icons/ri";
import { useContext } from "react";
import { CompareContext } from "../../context/CompareContext";

const HeaderRight = () => {
  const { basket } = useContext(BasketContext);
  const { chosen } = useContext(ChosenContext);
  const { compare } = useContext(CompareContext);
  return (
    // <div className=" fixed bottom-0 w-full p-6 border-t-[1px] border-red-200">
      <div 
      id="hello"
      className="  flex justify-between items-center lg:p-2 p-3 sm:p-6 bg-white lg:bg-transparent fixed w-full left-0 right-0 bottom-0 lg:static lg:flex lg:justify-between lg:items-center lg:w-[50%]">
        <Link
          className={
            "flex text-center justify-center items-center flex-col gap-1 "
          }
          to="/status"
        >
          {/* <div className="flex justify-center items-center"> */}
            <BsBoxSeam className="text-[20px] h-auto text-gray-500 lg:text-[#191a3b] z-[-1] font-[900]" />
            {/* <span className={`${basket.length===0?"hidden":`
          w-[25px] text-[10px]  font-semibold absolute z-20 ml-11 mb-4 text-center block  rounded-[30px] bg-red-500 text-white `}`}>{basket.length}
          </span> */}
          {/* </div> */}

          <span className=" font-semibold lg:font-normal mt-1 text-[14px]">Статус заказа</span>
        </Link>
        {/*  */}
        <Link
          className={
            "flex text-center justify-center items-center flex-col  gap-1"
          }
          to="/compare"
        >
          <div className="flex justify-center items-center">
            <FaScaleUnbalanced className="text-[20px] h-auto text-gray-500 lg:text-[#191a3b] z-[-1]" />
            <span
              className={`${
                compare.length === 0
                  ? "hidden"
                  : `
          w-[25px] text-[10px]  font-semibold absolute z-20 ml-11 mb-4 text-center block  rounded-[30px] bg-red-500 text-white `
              }`}
            >
              {compare.length}
            </span>
          </div>

          <span className="font-semibold lg:font-normal mt-1 text-[14px]">Сравнить</span>
        </Link>
        {/*  */}
        <Link
          className={
            "flex text-center justify-center items-center flex-col gap-1 "
          }
          to="/korzinka"
        >
          <div className="flex justify-center items-center">
            <SlBasket className="text-[24px] h-auto text-gray-600 lg:text-[#191a3b] z-[-1]" />
            <span
              className={`${
                basket.length === 0
                  ? "hidden"
                  : `
        w-[25px] text-[10px]  font-semibold absolute z-20 ml-11 mb-4 text-center block  rounded-[30px] bg-red-500 text-white `
              }`}
            >
              {basket.length}
            </span>
          </div>

          <span className="font-semibold lg:font-normal text-[14px]">Корзина</span>
        </Link>
        {/*  */}
        <Link
          className={
            "flex text-center justify-center items-center flex-col gap-1 "
          }
          to="/chosen"
        >
          <div className="flex justify-center items-center">
            <MdOutlineFavoriteBorder className="text-[24px] h-auto text-gray-600 lg:text-[#191a3b] z-[-1]" />
            <span
              className={`${
                chosen.length === 0
                  ? "hidden"
                  : `
        w-[25px] text-[10px]  font-semibold absolute z-20 ml-11 mb-4 text-center block  rounded-[30px] bg-red-500 text-white `
              }`}
            >
              {chosen.length}
            </span>
          </div>

          <span className="font-semibold lg:font-normal text-[14px]">Избранное</span>
        </Link>
        {/*  */}
        <Link
          className={
            "flex text-center justify-center items-center flex-col gap-1 "
          }
          to="/register"
        >
          <div className="flex justify-center items-center">
            <RiUserLine className="text-[24px] h-auto text-gray-600 lg:text-[#191a3b] z-[-1]" />
            {/* <span className={`${basket.length===0?"hidden":`
        w-[25px] text-[10px]  font-semibold absolute z-20 ml-11 mb-4 text-center block  rounded-[30px] bg-red-500 text-white `}`}>{basket.length}
        </span> */}
          </div>

          <span className="font-semibold lg:font-normal text-[14px]">Войти</span>
        </Link>
      </div>
    // </div>
  );
};

export default HeaderRight;

{/* <div className="max-w-[1300px] mx-auto"> 
      {basket.length > 0 ? ( 
        <> 
          <h1 className="text-[24px] font-bold pb-[20px]"> 
            Ваша корзина,{" "} 
            <span className="text-[grey]">{basket.length} товар</span> 
          </h1> 
          <div className="max-w-[100%] flex flex-col 2xl:flex-row gap-[20px]"> 
            <div className="flex flex-col gap-[20px] p-[20px] border max-w-[100%] 2xl:w-[950px]"> 
              <div className="px-[20px]"> 
                <div className="flex items-center gap-[10px] justify-between"> 
                  <div className="flex gap-[10px]"> 
                    <input 
                      type="checkbox" 
                      className="w-[20px]" 
                      checked={selectedItems.length === basket.length} 
                      onChange={handleSelectAll} 
                    /> 
                    <p>Снять все</p> 
                  </div> 
                  <button 
                    onClick={handleDeleteSelected} 
                    className="w-[140px] h-[30px] rounded-[10px] bg-white text-black border text-[20px]" 
                  > 
                    Удалить все 
                  </button> 
                </div> 
              </div> 
 
              {basket.map((item) => { 
                const count = counts[item.id] || 1; 
                return ( 
                  <div 
                    className="flex flex-col sm:flex-row items-center justify-between max-w-[100%] border-t p-[20px]" 
                    key={item.id} 
                  > 
                    <div className="flex items-center gap-[20px]"> 
                      <input 
                        type="checkbox" 
                        className="w-[20px]" 
                        checked={selectedItems.includes(item.id)} 
                        onChange={() => handleSelectItem(item.id)} 
                      /> 
                      <img 
                        className="w-[120px] h-[120px]" 
                        src={item.image} 
                        alt={item.title} 
                      /> 
                      <div className="flex flex-col gap-[10px] self-start"> 
                        <span className="pb-2 block text-md">{item.title}</span> */}
