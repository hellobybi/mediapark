// import React from "react";   

import React from "react";
// import { useContext } from 'react'
import { ProductContext } from "../../../context/ProductContext";
import { BasketContext } from "../../../context/BasketContext";
import { ChosenContext } from "../../../context/ChosenContext";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import { useContext } from "react";
// import { ProductContext } from "../context/ProductContext";
// import { BasketContext } from "../context/BasketContext";
// import { ChosenContext } from "../context/ChosenContext";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FaScaleUnbalanced } from "react-icons/fa6";
import { SlBasket } from "react-icons/sl";
import { FaStar } from "react-icons/fa";
import { CompareContext } from "../../../context/CompareContext";

const Konditsionery = () => {
  const { items } = useContext(ProductContext);
  const { getBasketData } = useContext(BasketContext);
  const { getChosenData } = useContext(ChosenContext);
  const {getCompareData} = useContext(CompareContext)
  return (
    <div>
      <ul id="grid" className="grid grid-cols-6 max-w-[1450px] mx-auto gap-4 box-border mt-11 px-[-40px]">
        {items.map((item) => {
          if (item.filter === "kold") {
            return (
              <li id="grid-2"
                className=" hover:border-[1px]  flex flex-col justify-between border-[1px] hover:border-gray-300 border-white transition-all p-3 rounded-[20px] h-[100%]"
                key={item.id}
              >
                <Link className="" to={`/products/${item.id}`}>
                  <img className=" h-[190px]" src={item.img} alt="" />
                  <div className="flex flex-col py-2 gap-1">
                    <p className=" line-through text-gray-500 font-medium mt-3">
                      {item.nonPrice}
                    </p>
                    <b className="text-[20px] font-[700]">{item.price}</b>
                    <span className="text-[12px] font-medium text-gray-500 mb-2">
                      {item.text}
                    </span>
                    {/* <span className=" text-blue-950 border-[1px] border-blue-950 p-1 block text-center rounded-[8px] font-medium">
              {item.month}
            </span> */}
                    <b className=" overflow-hidden h-12 text-gray-500 font-normal mt-2">
                      {item.title}
                    </b>
                  </div>
                  <div className=" flex gap-1 items-center justify-start">
                    <FaStar className="text-gray-600" />
                    <p className="text-gray-500 font-[500] text-[14px]">
                      Будьте Первыми
                    </p>
                  </div>
                </Link>
                <div className="mt-2 flex justify-between gap-2 items-center">
                  <button
                    className=" bg-red-500 px-[22px] py-[14px] rounded-[10px] hover:bg-red-600"
                    onClick={() => getBasketData(item)}
                  >
                    {
                      <SlBasket className="text-white text-[20px] font-semibold text-center" />
                    }
                  </button>
                  <button 
                  onClick={()=>getCompareData(item)}
                   className="bg-gray-200 px-[18px] py-[14px] rounded-[10px]">
                    {
                      <FaScaleUnbalanced className="text-gray-600 text-[20px]" />
                    }
                  </button>
                  {/* <button className='border-2 border-red-500 p-1 rounded-md'
            onClick={()=>onDelete(item.id)}
            >
            <img className='w-[25px]' src="public/assets/logo/delete.png" alt="" />
          </button> */}
                  <button
                    className="bg-gray-200 px-[18px] py-[14px] rounded-[10px]"
                    onClick={() => getChosenData(item)}
                  >
                    {
                      <MdOutlineFavoriteBorder className="text-gray-600 text-[20px]" />
                    }
                  </button>
                </div>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default Konditsionery;
