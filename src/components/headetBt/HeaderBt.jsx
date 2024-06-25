// import React from 'react'
import { Link } from "react-router-dom";
// import Swiper from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "..//..//style.scss";

// import required modules
import { Navigation } from "swiper/modules";

const HeaderBt = () => {
  return (
    <div id="bg
    "
    
    >
      <Swiper
        slidesPerView={2}
        spaceBetween={5}
        // navigation={true}
        pagination={{
          clickable: true
        }}
        breakpoints={{
          330: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          514: {
            slidesPerView: 4,
            spaceBetween: 20
          },
          620: {
            slidesPerView: 5,
            spaceBetween: 20
          },
          830: {
            slidesPerView: 7,
            spaceBetween: 10
          },
          1124: {
            slidesPerView: 7,
            spaceBetween: 20
          },
          1140: {
            slidesPerView: 8,
            spaceBetween: 20
          },
          1404: {
            slidesPerView: 10
            // spaceBetween:
          },
          1550: {
            slidesPerView: 11
            // spaceBetween:
          },
          1600: {
            slidesPerView: 12
            // spaceBetween:
          }
        }}
        modules={[Navigation]}
        className="h-10 flex justify-between items-center max-w-[1470px] mx-auto p-3"
      >
        <SwiperSlide>
          <Link to="/discount">
            <div className="flex justify-center items-center">
              <img
                src="data:image/svg+xml,%3Csvg%20width%3D%2293%22%20height%3D%2225%22%20viewBox%3D%220%200%2093%2025%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%3Cmask%20id%3D%22mask0_101_3%22%20style%3D%22mask-type%3Aalpha%22%20maskUnits%3D%22userSpaceOnUse%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2293%22%20height%3D%2225%22%3E%0A%20%20%20%20%3Crect%20width%3D%2292.4443%22%20height%3D%2225%22%20rx%3D%2212.5%22%20fill%3D%22%235EC1BC%22%20%2F%3E%0A%20%20%3C%2Fmask%3E%0A%20%20%3Cg%20mask%3D%22url(%23mask0_101_3)%22%3E%0A%20%20%20%20%3Crect%20x%3D%22-0.383789%22%20width%3D%2292.4443%22%20height%3D%2225%22%20rx%3D%2212.5%22%20fill%3D%22%2350CD47%22%20%2F%3E%0A%20%20%20%20%3Crect%20x%3D%2280.0771%22%20y%3D%226.75%22%20width%3D%2222.5%22%20height%3D%2222.5%22%20rx%3D%2211.25%22%20stroke%3D%22white%22%20stroke-width%3D%220.5%22%20%2F%3E%0A%20%20%20%20%3Crect%20x%3D%2271.3271%22%20y%3D%2215%22%20width%3D%2222%22%20height%3D%2222%22%20rx%3D%2211%22%20stroke%3D%22white%22%20%2F%3E%0A%20%20%20%20%3Crect%20x%3D%22-6.92285%22%20y%3D%22-11.25%22%20width%3D%2222.5%22%20height%3D%2222.5%22%20rx%3D%2211.25%22%20stroke%3D%22white%22%20stroke-width%3D%220.5%22%20%2F%3E%0A%20%20%20%20%3Crect%20x%3D%22-14.6729%22%20y%3D%22-1%22%20width%3D%2222%22%20height%3D%2222%22%20rx%3D%2211%22%20stroke%3D%22white%22%20%2F%3E%0A%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E"
                alt="#"
              />
              <span className="text-white z-20 absolute">Акции</span>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className={"text-gray-500 hover:text-black"} to="/xolodilnik">
            Холодильники
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            className={"text-gray-500 hover:text-black"}
            to="/konditsionery"
          >
            Кондиционеры
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className={"text-gray-500 hover:text-black"} to="/phones">
            Cмартфоны
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className={"text-gray-500 hover:text-black"} to="/televizor">
            Tелевизоры
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className={"text-gray-500 hover:text-black"} to="/Apple">
            Apple
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className={"text-gray-500 hover:text-black"} to="/noutebooks">
            Ноутбуки
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className={"text-gray-500 hover:text-black"} to="/wash">
            Стиральные машины
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className={"text-gray-500 hover:text-black"} to="/kofe">
            Кофемашины
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className={"text-gray-500 hover:text-black"} to="/paneli">
            Варочные панели
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className={"text-gray-500 hover:text-black mr-6"} to="/smart">
            Смарт-часы
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link className={"text-gray-500 hover:text-black"} to="/products">
            Все товары
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeaderBt;
