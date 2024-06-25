import React from "react";
import { Link } from "react-router-dom";
import { FaLaptop } from "react-icons/fa6";
import { BsSmartwatch } from "react-icons/bs";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineHorizontalSplit } from "react-icons/md";
import { PiWashingMachine } from "react-icons/pi";
import { PiTelevisionSimple } from "react-icons/pi";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Link } from "react-router-dom";
// import Swiper from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "..//..//style.scss";
import "..//..//..//style.scss";

// import required modules
import { Navigation } from "swiper/modules";
const Popular = () => {
  return (
    <div>
      <h1 className="text-[26px] py-8 px-3 font-bold">Популярные категории</h1>
      <Swiper
        slidesPerView={1.5}
        spaceBetween={5}
        // navigation={true}
        pagination={{
          clickable: true
        }}
        breakpoints={{
          330: {
            slidesPerView: 1.5,
            spaceBetween: 20
          },
          514: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          620: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          772: {
            slidesPerView: 3.5,
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
          1200: {
            slidesPerView: 6,
            spaceBetween: 20
          }
        }}
        modules={[Navigation]}
        className="flex justify-between items-center max-w-[1440px] gap-3 mx-auto p-2"
      >
        <SwiperSlide>
          <Link
            to="/noutebooks"
            className="flex justify-center items-center gap-3 border-[1px] w-full border-gray-300 p-4 rounded-2xl"
          >
            <FaLaptop className="text-red-500 bg-red-50 rounded-lg w-[50px] h-[50px] p-3" />
            <span className="text-gray-600 text-[17px] font-semibold">
              Ноутбуки
            </span>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to="/smart"
            className="flex justify-center items-center gap-3 border-[1px] w-full border-gray-300 p-4 rounded-2xl"
          >
            <BsSmartwatch className="text-red-500 bg-red-50 rounded-lg w-[50px] h-[50px] p-3" />
            <span className="text-gray-600 text-[17px] font-semibold">
              Смарт часы
            </span>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to="/phones"
            className="flex justify-center items-center gap-3 border-[1px] w-full border-gray-300 p-4 rounded-2xl"
          >
            <IoPhonePortraitOutline className="text-red-500 bg-red-50 rounded-lg w-[50px] h-[50px] p-3" />
            <span className="text-gray-600 text-[17px] font-semibold">
              Смартфоны
            </span>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to="/paneli"
            className="flex justify-center items-center gap-3 border-[1px] w-full border-gray-300 p-4 rounded-2xl"
          >
            <MdOutlineHorizontalSplit className="text-red-500 bg-red-50 rounded-lg w-[50px] h-[50px] p-3" />
            <span className="text-gray-600 text-[17px] font-semibold">
              Cплит-система
            </span>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to="/paneli"
            className="flex justify-center items-center gap-3 border-[1px] w-full border-gray-300 p-4 rounded-2xl"
          >
            <PiWashingMachine className="text-red-500 bg-red-50 rounded-lg w-[50px] h-[50px] p-3" />
            <span className="text-gray-600 text-[17px] font-semibold">
              Стиральные машины
            </span>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to="/televizor"
            className="flex justify-center items-center gap-3 border-[1px] w-full border-gray-300 p-4 rounded-2xl"
          >
            <PiTelevisionSimple className="text-red-500 bg-red-50 rounded-lg w-[50px] h-[50px] p-3" />
            <span className="text-gray-600 text-[17px] font-semibold">
              Телевизоры
            </span>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Popular;
