import { Link } from "react-router-dom";
import { useContext } from "react";
// import { useState } from "react";
import { useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { BasketContext } from "../context/BasketContext";
import { ChosenContext } from "../context/ChosenContext";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FaScaleUnbalanced } from "react-icons/fa6";
import { CompareContext } from "../context/CompareContext";
import { SlBasket } from "react-icons/sl";
import { FaStar } from "react-icons/fa";

//
// import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../style.scss";

// import required modules
import { Navigation } from "swiper/modules";

//

const Products = () => {
  const { items } = useContext(ProductContext);
  const { getCompareData } = useContext(CompareContext);
  const { getBasketData } = useContext(BasketContext);
  const { getChosenData } = useContext(ChosenContext);
  const [Clicked, setClicked] = useState(false);

  const [add, setAdd] = useState(false);
  const handleToggle = (data) => {
    setAdd(!add);
    // handleToggle.some((item) => item.id === data.id);
  };
  return (
    <div>
      <Swiper
        style={{
          "--swiper-navigation-color": "black",
          "--swiper-navigation-padding": "400px",
          "--swiper-navigation-bg": "#000"
        }}
        className="grid xl:grid-cols-6 p-6  max-w-[1650px] mx-auto gap-4 box-border mt-11 px-[-40px]"
        slidesPerView={1.5}
        spaceBetween={20}
        navigation={true}
        pagination={{
          clickable: true
        }}
        breakpoints={{
          430: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          620: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          830: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          1124: {
            slidesPerView: 5,
            spaceBetween: 20
          },
          1404: {
            slidesPerView: 6,
            spaceBetween: 20
          }
        }}
        modules={[Navigation]}
      >
        {items.map((item) => (
          <SwiperSlide
            className=" hover:border-[1px]   flex flex-col justify-between border-[1px] hover:border-gray-300 border-white transition-all p-3 2xl:p-3 rounded-[20px] "
            key={item.id}
          >
            <Link className="" to={`/products/${item.id}`}>
              <img className=" h-[190px]" src={item.img} alt="" />
              <div className="flex flex-col py-2 gap-1">
                <p className=" line-through text-gray-500 font-medium mt-3">
                  {parseInt(item.nonPrice).toLocaleString()} сум
                </p>
                <b className="text-[20px] font-[700]">
                  {parseInt(item.price).toLocaleString()} сум
                </b>
                <span className="text-[12px] font-medium text-gray-500 mb-2">
                  {item.text}
                </span>
                <span className=" text-blue-950 border-[1px] border-blue-950 p-1 block text-center rounded-[8px] font-medium">
                  {item.month}
                </span>
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
                onClick={() => getCompareData(item)}
                className="bg-gray-200 px-[18px] py-[14px] rounded-[10px]"
              >
                {<FaScaleUnbalanced className="text-gray-600 text-[20px]" />}
              </button>
              {/* <button className='border-2 border-red-500 p-1 rounded-md'
                onClick={()=>onDelete(item.id)}
                >
                  <img className='w-[25px]' src="public/assets/logo/delete.png" alt="" />
                </button> */}
              <button
                // onClick={() => getChosenData(item)}
                onClick={(e) => {
                  {
                    if (!Clicked) {
                      // e.target.style.backgroundColor = "red";
                      e.target.style.backgroundColor = "#EFF0F0";
                      e.target.style.color = "red";
                      e.target.style.border = "#EFF0F0";
                      setClicked(true);
                    } else {
                      e.target.style.backgroundColor = "#EFF0F0";
                      e.target.style.color = "gray";
                      setClicked(false);
                    }
                  }
                  getChosenData(item);
                }}
                className="bg-gray-200 px-[18px] py-[14px] rounded-[10px]"
              >
                <MdOutlineFavoriteBorder
                  className="text-[20px] text-gray-600"
                  // className={`"text-gray-600 text-[20px]"
                  // ${
                  //   add
                  //   ? "text-red-600 text-[20px]"
                  //   : "text-gray-600 text-[20px]"
                  // }`}
                />
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Products;
