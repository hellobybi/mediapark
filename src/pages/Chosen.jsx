import { useContext } from "react";
import { Link } from "react-router-dom";
import Isnot from "./Isnot";
// import { ChosenContext } from "../context/ChosenContext";
import { CompareContext } from "../context/CompareContext";
import { MdFavorite } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { BasketContext } from "../context/BasketContext";
import { ChosenContext } from "../context/ChosenContext";
import PUST2 from "../components/PUST2";
// import { useContext } from "react";

const Chosen = () => {
  const { chosen, onAdd } = useContext(ChosenContext);
  const { getBasketData } = useContext(BasketContext);
  const { compare } = useContext(CompareContext);

  return (
    <div>
      {chosen.length === 0 ? (
        <PUST2 />
      ) : (
        <div>
          <h1 className="max-w-[1440px] mx-auto">
            <b className="text-[24px]">Избранное</b> <b>({chosen.length})</b>
          </h1>
          <ul
            id="grid"
            className="grid grid-cols-6 mt-11 max-w-[1440px] mx-auto box-border gap-3"
          >
            {/* <h1>hello</h1> */}
            {chosen.map((item) => (
              <li
                id="grid-3"
                className=" box-border p-2 rounded-xl border-[1px] border-gray-300 flex flex-col justify-between h-[100%]"
                key={item.id}
              >
                <button
                  className="flex justify-end items-center mb-4"
                  onClick={() => onAdd(item.id)}
                >
                  <MdFavorite className="text-red-500 text-[25px]" />
                </button>
                <Link to={`/products/${item.id}`}>
                  <div className="flex justify-center items-center">
                    <img className="h-[190px]" src={item.img} alt="" />
                  </div>
                  <div className="flex flex-col py-2">
                    {/* <p className=' line-through text-gray-500 font-medium mt-3'>{item.nonPrice}</p> */}
                    <b className="text-[20px] font-[700] mt-4">
                      {parseInt(item.price).toLocaleString()} сум
                    </b>
                    <span className="text-[12px] font-medium text-gray-500 mb-2">
                      {item.text}
                    </span>
                    <span className=" text-red-600 bg-[#f7e4e4] w-[80%] p-1 block text-center rounded-[8px] text-[14px] font-medium">
                      {item.month}
                    </span>
                    <div className="flex items-center justify-start mt-2">
                      <img
                        className="w-[20px]"
                        src="/public/assets/img/wallet-62.svg"
                        alt=""
                      />
                      <p className="text-[14px] font-medium">
                        +217 530 cум бонусов
                      </p>
                    </div>
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
                <button
                  className=" bg-red-600 transition-all text-[18px] px-[22px] py-[14px] rounded-[10px] mt-2 hover:bg-red-700 text-white font-semibold"
                  onClick={() => getBasketData(item)}
                >
                  В корзину
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Chosen;
