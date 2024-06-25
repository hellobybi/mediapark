import React from "react";

const Footer = () => {
  return (
    <div className="">
      <div className="bg-gray-100 w-full hidden lg:block">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center pt-10 px-10">
          <div className="flex flex-col">
            <h1 className=" font-bold text-[30px]">
              Твой магазин в Твоём телефоне
            </h1>
            <span className="w-[370px] text-gray-600 py-4 э text-[18px] block">
              Найдите смартфоны, планшеты и все виды актуальной электроники в
              мобильном приложении MEDIAPARK.
            </span>
            <div className="flex gap-3">
              <img src="https://mediapark.uz/images/appstore.svg" alt="" />
              <img src="https://mediapark.uz/images/googleplay.svg" alt="" />
              <img src="https://mediapark.uz/images/huaweistore.svg" alt="" />
            </div>
          </div>
          <div>
            <img className="" src="/public/assets/img/storeimg.webp" alt="" />
          </div>
        </div>
      </div>
      <div className="bg-[#27415D] w-full">
        <div className="max-w-[1440px] flex-col items-center lg:items-baseline lg:flex-row cursor-pointer mx-auto p-7 lg:py-[100px] px-3 text-white flex justify-between">
          <div className="flex flex-col lg:items-baseline items-center justify-center lg:justify-between gap-2 ">
            <h1 className="text-[30px] font-bold">MEDIAPARK</h1>
            <p className=" mt-5 font-semibold">
              Возникли вопросы? Готовы помочь:
            </p>
            <b className="text-[18px]">+998712033333</b>
            <p className=" font-semibold">График работы:</p>
            <h1 className=" font-semibold text-[20px]">
              Ежедневно : 09:00 - 21:00
            </h1>
          </div>
          <div id="money" className="flex flex-col gap-4 justify-center items-center lg:justify-stretch lg:items-baseline">
            <h1 className="font-bold">Способы оплаты</h1>
            <div className="grid grid-cols-[200px,200px] gap-3">
              <div className=" bg-[#1D4E73] flex justify-center items-center w-[200px] h-[60px] rounded-xl">
                <img
                  className=" p-5 w-[100px]"
                  src="https://mediapark.uz/images/humo.svg"
                  alt=""
                />
              </div>
              <div className=" bg-[#1D4E73] flex justify-center items-center w-[200px] h-[60px] rounded-xl">
                <img
                  className="p-4 w-[60px]"
                  src="https://mediapark.uz/images/uzcard.svg"
                  alt=""
                />
              </div>
              <div className=" bg-[#1D4E73] flex justify-center items-center w-[200px] h-[60px] rounded-xl">
                <img
                  className="w-[200px] p-14"
                  src="https://mediapark.uz/svg/click.svg"
                  alt=""
                />
              </div>
              <div className=" bg-[#1D4E73] flex justify-center items-center w-[200px] h-[60px] rounded-xl">
                <img
                  className=" w-[100px] p-5"
                  src="https://mediapark.uz/svg/payme.svg"
                  alt=""
                />
              </div>
              <div className=" bg-[#1D4E73] flex justify-center items-center w-[200px] h-[60px] rounded-xl">
                <img
                  className=" w-[100px]  p-5"
                  src="https://mediapark.uz/images/visa.svg"
                  alt=""
                />
              </div>
              <div className=" bg-[#1D4E73] flex justify-center items-center w-[200px] h-[60px] rounded-xl">
                <img
                  className=" w-[100px]  p-5"
                  src="https://mediapark.uz/images/mastercard.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="lg:flex justify-between gap-[70px] hidden"
          id="gap"
          >
            <div className="flex flex-col gap-3">
              <h1 className="font-bold">Информация</h1>
              <span className="text-gray-400 font-semibold">О нас</span>
              <span className="text-gray-400 font-semibold">Гарантия</span>
              <span className="text-gray-400 font-semibold">Акция</span>
              <span className="text-gray-400 font-semibold">Наши магазины</span>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="font-bold">Услуги</h1>
              <span className="text-gray-400 font-semibold">Услуги</span>
              <span className="text-gray-400 font-semibold">Способы оплаты</span>
              <span className="text-gray-400 font-semibold">Всё о рассрочке</span>
              <span className="text-gray-400 font-semibold">Партнёрство</span>
              <span className="text-gray-400 font-semibold">Возврат товара</span>
            </div>
            <div className="flex flex-col gap-3"
            id="gap-2"
            >
              <h1 className="font-bold">Для покупателей</h1>
              <span className="text-gray-400 font-semibold">Доставка</span>
              <span className="text-gray-400 font-semibold">Связаться с нами!</span>
              <span className="text-gray-400 font-semibold">Сервисный центр</span>
              <span className="text-gray-400 font-semibold">Оставить отзыв</span>
              <span className="text-gray-400 font-semibold">Вакансии</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
