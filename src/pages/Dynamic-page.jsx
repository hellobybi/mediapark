/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
// import React from "react";
// import Products from './Products'
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaScaleUnbalanced } from "react-icons/fa6";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { PiExportLight } from "react-icons/pi";
import { useContext } from "react";
import { CompareContext } from "../context/CompareContext";
import { ChosenContext } from "../context/ChosenContext";
import Isnot from "./Isnot";
import { BasketContext } from "../context/BasketContext";

const DynamicPage = () => {
  const params = useParams();
  const [data, setData] = useState({});
  const { getBasketData } = useContext(BasketContext);
  const navigate = useNavigate();
  const [iserror, setIserror] = useState(false);
  const [msg, setMsg] = useState("");
  const { getCompareData } = useContext(CompareContext);
  const { getChosenData } = useContext(ChosenContext);
  // console.log(params);

  const [set, setSet] = useState(false);
  const handleToggle = (data) => {
    setSet(!set);
    // handleToggle.some((item) => item.id === data.id);
  };

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://3fb92b152ce9d43c.mokky.dev/mediapark/${params.id}`
      );
      setData(response.data);
    } catch (e) {
      setMsg(e.response.data.message);
      setIserror(true);
    }
  };

  useEffect(() => {
    getData();
  }, [params.id]);

  return (
    <div className="max-w-[1440px] mx-auto pb-14">
      {iserror ? (
        <div>
          <Isnot />
        </div>
      ) : (
        <div>
          <div className="flex justify-between items-center gap-3">
            <div className="flex items-start justify-start">
              <span className=" font-bold lg:font-semibold block text-[15px] sm:text-[18px] md:text-[20px] lg:text-[24px] py-14">
                {data.title}
              </span>
            </div>
            <div className=" p-4 lg:hidden flex justify-center items-center gap-4">
              <button
                onClick={() => getCompareData(data)}
                className="flex justify-center items-center gap-2"
              >
                <FaScaleUnbalanced className="text-[20px] h-auto text-[#191a3b] z-[-1]" />
                <span className=" hidden md:block font-semibold text-[#191a3b]">Сравнить</span>
              </button>
              <button
                onClick={() => {
                  getChosenData(data), handleToggle(data);
                }}
                className="flex justify-center items-center gap-2"
              >
                <MdOutlineFavoriteBorder
                  className={`"text-gray-600 text-[20px]"
                      ${
                        set
                          ? "text-red-600 text-[20px]"
                          : "text-gray-600 text-[20px]"
                      }`}
                  onClick={() => getChosenData(data)}
                />
                <button
                  className={`" hidden md:block font-semibold text-[#191a3b]"
                  ${
                    set
                      ? "text-red-600 font-semibold"
                      : "font-semibold text-[#191a3b]"
                  }`}
                  onClick={() => getChosenData(data)}
                >
                  Избранное
                </button>
              </button>
              <div className="flex justify-center items-center gap-2">
                <PiExportLight className="text-[24px] text-black h-auto z-[-1]" />
                <span className="font-semibold text-[#191a3b] hidden md:block">Отправить</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between lg:flex-row flex-col items-center w-full">
            <div
              id="dim"
              className="flex justify-between items-center gap-[70px]"
            >
              <img id="img" className=" pb-11 w-[400px]" src={data.img} alt="" />
              <div className=" hidden lg:flex flex-col items-start justify-start gap-5 ">
                <b>коротко о товаре</b>
                <div className="flex flex-col gap-5 w-[350px]">
                  <div className=" flex justify-between items-center">
                    <span className="text-gray-600 font-semibold">
                      Операционная система:
                    </span>
                    <span className="text-gray-200 font-semibold">
                      ..................
                    </span>
                    <span>iOS 16</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-semibold">
                      Технология экрана:
                    </span>
                    <span className="text-gray-200 font-semibold">
                      ...............................
                    </span>
                    <span>6.7</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-semibold">
                      Функции звука:
                    </span>
                    <span className="text-gray-200 font-semibold">
                      ................................
                    </span>
                    <span>48 Мп</span>
                  </div>
                  <div className=" flex justify-between items-center">
                    <span className="text-gray-600 font-semibold">
                      Оформление:
                    </span>
                    <span className="text-gray-200 font-semibold">
                      ....................................
                    </span>
                    <span>12 Мп</span>
                  </div>
                  <div className=" flex justify-between items-center">
                    <span className="text-gray-600 font-semibold">
                      Общий объем(л):
                    </span>
                    <span className="text-gray-200 font-semibold">
                      .....................
                    </span>
                    <span>4323 мА⋅ч</span>
                  </div>
                  <div className=" flex justify-between items-center">
                    <span className="text-gray-600 font-semibold">
                      Тип видеокарты:
                    </span>
                    <span className="text-gray-200 font-semibold">
                      ..............................
                    </span>
                    <span>120 Гц</span>
                  </div>
                  <div className=" flex justify-between items-center">
                    <span className="text-gray-600 font-semibold">
                      Уровень шума внешнего блока:
                    </span>
                    <span className="text-gray-200 font-semibold">
                      ........
                    </span>
                    <span>512 ГБ</span>
                  </div>
                  <div className=" flex justify-between items-center">
                    <span className="text-gray-600 font-semibold">
                      Объем основного диска:
                    </span>
                    <span className="text-gray-200 font-semibold">
                      ......................
                    </span>
                    <span>6 ГБ</span>
                  </div>
                </div>
                <p className="font-semibold">Все товары магазина:</p>
              </div>
            </div>
            <div className="flex flex-col w-full lg:w-[30%]  items-center gap-10">
              <div className=" hidden lg:flex justify-center items-center gap-4">
                <button
                  onClick={() => getCompareData(data)}
                  className="flex justify-center items-center gap-2"
                >
                  <FaScaleUnbalanced className="text-[20px] h-auto text-[#191a3b] z-[-1]" />
                  <span className=" font-semibold text-[#191a3b]">
                    Сравнить
                  </span>
                </button>
                <button
                  onClick={() => {
                    getChosenData(data), handleToggle(data);
                  }}
                  className="flex justify-center items-center gap-2"
                >
                  <MdOutlineFavoriteBorder
                    className={`"text-gray-600 text-[20px]"
                      ${
                        set
                          ? "text-red-600 text-[20px]"
                          : "text-gray-600 text-[20px]"
                      }`}
                    onClick={() => getChosenData(data)}
                  />
                  <button
                    className={`"font-semibold text-[#191a3b]"
                  ${
                    set
                      ? "text-red-600 font-semibold"
                      : "font-semibold text-[#191a3b]"
                  }`}
                    onClick={() => getChosenData(data)}
                  >
                    Избранное
                  </button>
                </button>
                <div className="flex justify-center items-center gap-2">
                  <PiExportLight className="text-[24px] text-black h-auto z-[-1]" />
                  <span className="font-semibold text-[#191a3b]">
                    Отправить
                  </span>
                </div>
              </div>
              <div className=" mx-11 border-[1px] border-gra-500 p-4 rounded-[26px] w-full lg:w-[90%]">
                <div className="flex justify-between items-center">
                  <b>Цена товара</b>
                  <p className="text-gray-600 text-[12px]">Код:{data.id}</p>
                </div>
                <b className="text-[22px] font-bold py-4 block">{data.price}</b>
                <div className="flex flex-col justify-between items-center gap-2">
                  <button
                    className="bg-red-600 text-white w-full p-[14px] rounded-[10px] hover:bg-red-700 transition-all"
                    onClick={() => getBasketData(data)}
                  >
                    В корзину
                  </button>
                  <button className="bg-gray-100 text-black w-full p-[14px] rounded-[10px] hover:bg-gray-200 transition-all">
                    Купить в один клик
                  </button>
                </div>
              </div>
              <div className=" w-full border-[1px] border-gra-500 p-4 rounded-[26px] lg:w-[90%]">
                <div>
                  <b>Варианты рассрочки</b>
                  <div className=" flex flex-col gap-3 mt-3">
                    <div className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-[15px]">
                      <img
                        className="w-[100px]"
                        src="https://cdn.mediapark.uz/imgs/dfcb54ec-4678-4792-874a-cf1c75ab6195_alifcha.svg"
                        alt=""
                      />
                      <b className="text-[12px]">{data.month}</b>
                    </div>
                    <div className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-[15px]">
                      <img
                        className="w-[100px]"
                        src="https://cdn.mediapark.uz/imgs/adbf2809-3fb3-4d37-a06b-fe69bfa8456e_Frame-(2).svg"
                        alt=""
                      />
                      <b className="text-[12px]">{data.month}</b>
                    </div>
                    <div className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-[15px]">
                      <img
                        className="w-[100px]"
                        src="https://cdn.mediapark.uz/imgs/dbc9c163-dc28-460a-86ac-603af6a4cbe1_Iman.svg"
                        alt=""
                      />
                      <b className="text-[12px]">{data.month}</b>
                    </div>
                  </div>
                  <button className="bg-red-600 text-white w-full p-[12px] rounded-[10px] hover:bg-red-700 transition-all mt-3">
                    Подверьдить
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DynamicPage;
