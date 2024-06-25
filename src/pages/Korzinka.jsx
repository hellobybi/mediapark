import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Isnot from "./Isnot";
import { BasketContext } from "../context/BasketContext";
import { ChosenContext } from "../context/ChosenContext";
import { HiOutlinePlus } from "react-icons/hi";
import { FaMinus } from "react-icons/fa6";
import { FaVanShuttle } from "react-icons/fa6";
import PUST1 from "../components/PUST1";

const Korzinka = () => {
  const { basket, onDelete, deleteData } = useContext(BasketContext);
  const { getChosenData } = useContext(ChosenContext);
  const [selectedItems, setSelectedItems] = useState({});
  const [counts, setCounts] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const initialCounts = basket.reduce((acc, item) => {
      acc[item.id] = acc[item.id] || 1;
      return acc;
    }, {});
    setCounts(initialCounts);
  }, [basket]);

  useEffect(() => {
    const total = basket.reduce((sum, item) => {
      const count = counts[item.id] || 1;
      return sum + Number(item.price) * count;
    }, 0);
    setTotalPrice(total);
  }, [basket, counts]);

  const handleMinus = (id) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: Math.max((prevCounts[id] || 1) - 1, 1)
    }));
  };

  const handlePlus = (id) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 1) + 1
    }));
  };

  const handleSelectItem = (id) => {
    setSelectedItems((prevSelected) => ({
      ...prevSelected,
      [id]: !prevSelected[id]
    }));
  };

  const handleDeleteSelected = () => {
    Object.keys(selectedItems).forEach((id) => {
      if (selectedItems[id]) {
        onDelete(id);
      }
    });
    setSelectedItems({});
  };

  return (
    <div className="bg-gray-100 h-[100%] w-full">
      {basket.length === 0 ? (
        <PUST1 />
      ) : (
        <div className="max-w-[1440px] mx-auto flex-col lg:flex-row items-center lg:items-stretch lg:flex justify-between gap-10  p-5 pb-14">
          <section className="mt-4 w-full lg:w-[65%]  flex flex-col justify-center items-start mx-auto gap-6 box-border p-5 bg-white rounded-2xl">
            <h1 className=" font-bold text-[20px] font-sanf">Korzinka</h1>
            {/* <header> */}
            <button
              onClick={() => deleteData()}
              className=" font-semibold text-gray-500"
            >
              Удалить все <span>({basket.length})</span>
            </button>
            {/* </header> */}
            <ul className="flex flex-col gap-4">
              {basket.map((item) => (
                <li
                  className=" border-[1px] border-gray-300 flex-col sm:flex-row flex justify-between items-center  p-4 w-full rounded-[22px]"
                  key={item.id}
                >
                  <div className=" flex items-center justify-between sm:justify-center gap-4">
                    <input
                      type="checkbox"
                      className=" accent-red-600 scale-[1.5] p-2"
                      checked={selectedItems[item.id] || false}
                      onChange={() => handleSelectItem(item.id)}
                    />
                    <img className="w-[81px]" src={item.img} alt={item.title} />
                    <div className="flex justify-center flex-col gap-2">
                      <Link
                        className="flex items-center justify-center gap-10"
                        to={`/products/${item.id}`}
                      >
                        <div className="flex flex-col justify-start items-start">
                          <h2 className="py-4 relative top-2 w-[70%] overflow-hidden h-[40px] mb-2 font-semibold lg:font-bold">
                            {item.title}
                          </h2>
                          <span className=" sm:hidden mb-1 font-bold">
                            {(
                              Number(item.price) * (counts[item.id] || 1)
                            ).toLocaleString()}
                            сум
                          </span>
                          <div className="flex sm:items-center justify-start flex-col sm:flex-row sm:gap-4 sm:py-1 sm:pt-2">
                            <span
                              id="month"
                              className=" text-red-600 text-[12px] bg-red-50  px-4 py-1 block text-center rounded-[8px]  font-medium"
                            >
                              {item.month}
                            </span>
                            <div className="flex items-center justify-start mt-2">
                              <img
                                className="w-[15px]"
                                src="/public/assets/img/wallet-62.svg"
                                alt="Wallet"
                              />
                              <p
                                id="bonus"
                                className="text-[12px] font-semibold "
                              >
                                +217 530 сум бонусов
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>

                      <div className="flex gap-2 ml-1">
                        <button
                          onClick={() => onDelete(item.id)}
                          disabled={!selectedItems[item.id]}
                          className=" font-bold text-red-600 text-[12px] disabled:text-blue-900 "
                        >
                          Удалить
                        </button>
                        <button
                          className=" font-bold hover:border-b-[1px] text-[12px] text-blue-950 hover:underline border-b-[1px] border-white transition-all"
                          onClick={() => getChosenData(item)}
                        >
                          В избранное
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex  flex-col sm:gap-6 items-center">
                    <span className=" hidden sm:block text-end font-bold">
                      {(
                        Number(item.price) * (counts[item.id] || 1)
                      ).toLocaleString()}
                      сум
                    </span>
                    <div className="flex  justify-between bg-gray-50 w-[140%] p-2 sm:mr-8 mr-12  rounded-lg py-1 items-center">
                      <button className="" onClick={() => handleMinus(item.id)}>
                        <FaMinus className="text-gray-600" />
                      </button>
                      <p className="font-bold text-[16px]">
                        {counts[item.id] || 1}
                      </p>
                      <button className="" onClick={() => handlePlus(item.id)}>
                        <HiOutlinePlus className="text-gray-600" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
          <div className=" w-full lg:w-[35%] mt-5  ">
            <div className=" bg-white rounded-[23px] p-6 flex flex-col gap-2 sticky top-[120px]">
              <h1 className="text-2xl font-bold">Ваш заказ</h1>
              <div className="flex justify-between items-center border-dotted border-b-[3px]">
                <p
                  id="tovar"
                  className=" text-gray-600 pr-4 text-[14px] font-semibold top-4  bg-white h-[30px] relative"
                >
                  {basket.length} товары на сумму
                </p>
                <h1
                  id="sum"
                  className=" text-[16px] font-bold top-3 pl-4 bg-white h-[30px] relative"
                >
                  {totalPrice.toLocaleString()} сум
                </h1>
              </div>
              <div className="flex justify-between items-center border-dotted border-b-[3px]">
                <p className=" pr-4 text-[18px] font-bold top-3  bg-white h-[30px] relative">
                  Всего
                </p>
                <h1
                  id="sum"
                  className="text-[16px] font-bold top-3 pl-4 bg-white h-[30px] relative"
                >
                  {totalPrice.toLocaleString()} сум
                </h1>
              </div>
            </div>
            <div className=" bg-white rounded-[23px] p-6 flex gap-4 justify-start sticky top-[290px] mt-4">
              <FaVanShuttle className="text-red-600  w-11 h-11 p-3 rounded-xl bg-red-50" />
              <div>
                <h1 id="free" className=" font-semibold">
                  Для вас доступна бесплатная доставка
                </h1>
                <a className=" underline" href="https://mediapark.uz/delivery">
                  Узнать больше
                </a>
              </div>
            </div>
            <button className="w-full bg-red-600 text-white h-14 rounded-2xl font-bold sticky top-[400px] mt-4">
              Оформить заказ
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Korzinka;
