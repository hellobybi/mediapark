import { useContext } from "react";
import { Link } from "react-router-dom";
import Isnot from "./Isnot";
import { useState } from "react";
// import { FaStar } from "react-icons/fa";
// import { ChosenContext } from "../context/ChosenContext";
import { CompareContext } from "../context/CompareContext";
import { SlBasket } from "react-icons/sl";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FaScaleUnbalanced } from "react-icons/fa6";
// import { MdFavorite } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { BasketContext } from "../context/BasketContext";
import { ChosenContext } from "../context/ChosenContext";
import { ProductContext } from "../context/ProductContext";
import { RiDeleteBin5Line } from "react-icons/ri";
import PUST3 from "../components/PUST3";
// import { useContext } from "react";

const Compare = () => {
  // const { chosen } = useContext(ChosenContext);
  const { getBasketData } = useContext(BasketContext);
  const { compare, onFilter,deleteData } = useContext(CompareContext);
  const { items } = useContext(ProductContext);
  const { getCompareData } = useContext(CompareContext);
  const { getChosenData } = useContext(ChosenContext);

  const [add, setAdd] = useState(false);
  const handleToggle = (data) => {
    setAdd(!add);
    handleToggle.some((item) => item.id === data.id);
  };

  return (
    <div>
      {compare.length === 0 ? (
        <PUST3 />
      ) : (
        <div>
          <div className="  max-w-[1440px] mx-auto">
            <div className=" flex-col gap-2 sm:gap-0 sm:flex-row flex sm:justify-between sm:items-center p-4">
            <b id="ssr" className="text-[24px] text-gray-600"> Товаров в сравнении сейчас <b className="text-gray-600 text-[14px]">({compare.length})</b></b> 
            <div onClick={()=>deleteData()} className="flex justify-center items-center gap-3 bg-gray-100 py-2 rounded-lg px-4">
            <RiDeleteBin5Line className="text-gray-500" />
              <button onClick={()=>deleteData()}  className=" font-semibold text-gray-500">Удалит все</button>
            </div>
            </div>
          </div>
          <ul id="grid" className="grid grid-cols-6 mt-11 max-w-[1440px] mx-auto box-border gap-3">
            {/* <h1>hello</h1> */}
            {compare.map((item) => (
              <li
              id="grid-2"
                className=" box-border p-2 rounded-xl w-[230px] flex flex-col justify-between h-[100%]"
                key={item.id}
              >
                <Link to={`/products/${item.id}`}>
                  <div className="">
                    <img className="h-[90px]" src={item.img} alt="" />
                  </div>
                  <div>
                    <h1 className=" overflow-hidden h-12 text-[#1F4F79] font-semibold text-[14px] mt-2">
                      {item.title}
                    </h1>
                    <hr className="mt-5 mb-6" />
                    <div className="flex justify-start items-center gap-2">
                      <FaStar className="text-[#FFC623] text-[14px]" />
                      <FaStar className="text-[#FFC623] text-[14px]" />
                      <FaStar className="text-[#FFC623] text-[14px]" />
                      <FaStar className="text-[#FFC623] text-[14px]" />
                      <FaStar className="text-[#FFC623] text-[14px]" />
                      <span>5</span>
                    </div>
                    <hr className="mt-5 mb-6 border-[1px]" />
                    <p className="text-gray-500 font-semibold text-[16px]">
                      {item.month}
                    </p>
                    <hr className="mt-5 mb-6" />
                  </div>

                  <span className="mt-12 block font-bold text-[17px] ">
                  {parseInt(item.price).toLocaleString()} сум
                  </span>
                </Link>
                <div>
                  <div className=" flex justify-between items-center mt-3">
                    <button
                      className=" bg-red-600 px-[22px] w-[40%] flex justify-center items-center py-[14px] rounded-[10px] hover:bg-red-700"
                      onClick={() => getBasketData(item)}
                    >
                      {
                        <SlBasket className="text-white text-[20px] font-semibold text-center" />
                      }
                    </button>
                    <button
                      className={` "bg-gray-200 px-[18px] py-[14px] rounded-[10px]" 
                  ${
                    add
                      ? "text-red-600 bg-red-50  border-red-400 rounded-[10px] px-[15px] py-[11px]"
                      : " bg-gray-200 px-[18px] py-[14px] rounded-[10px]"
                  }`}
                      onClick={() => {
                        getChosenData(item);
                        handleToggle(item);
                      }}
                    >
                      <MdOutlineFavoriteBorder
                        className={`"text-gray-600 text-[20px]"
                      ${
                        add
                          ? "text-red-600 text-[20px]"
                          : "text-gray-600 text-[20px]"
                      }`}
                        onClick={() => getChosenData(item)}
                      />
                    </button>
                    <button className="bg-gray-200 px-[20px] py-[16px] rounded-[10px]" onClick={() => onFilter(item.id)}>
                      <RiDeleteBin5Line className="text-gray-600"/>
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Compare;
