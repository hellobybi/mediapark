import  { useState } from 'react'
import { PiTelevisionSimple } from "react-icons/pi";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { PiLaptop } from "react-icons/pi";
import { PiWashingMachineLight } from "react-icons/pi";
import { TbFridge } from "react-icons/tb";
import { GiTrophyCup } from "react-icons/gi";
import { GoHome } from "react-icons/go";

const Katalog = () => {
  // const [set,setSet] = useState('hello');
  // const setbata = () =>{
  //   setSet('lol')
  // }
  const [phone,setPhone] = useState(false)
  const [tel,setTel] = useState(true)
  const [note,setNote] = useState(false)
  const [texno,setTexno] = useState(false)
  const [info,setInfo] = useState(false)
  const [kub,setKub] = useState(false)
  return (
    <div className=' flex justify-between max-w-[1440px] h-screen mx-auto mt-10 bg-white'>
      {/* <img className='rounded-[20px] shadow-gray-500 shadow-2xl' src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ieU2Au7lXso8/v0/-1x-1.jpg" alt="" /> */}




      
      <div className=' w-[25%]'>
      <div onMouseOver={()=>setTel(true)}
       className={`${setTel  ? "hover:text-red-600 rounded-[15px] p-4 hover:bg-red-100" : ""}`}
      >
        <div className='flex items-center  gap-3'>
        <PiTelevisionSimple  className='text-[28px]' />
        <h1>Телевизоры, Аудио и Видео</h1>
        </div>
      </div>
      
      <div onMouseOver={()=>{{setPhone(true),setTel(false)}}} onMouseOut={()=>setPhone(false)}
      className={`${setTel ? "hover:text-red-600 rounded-[15px] p-4 hover:bg-red-100" : ""}`}
      >
        <div className='flex items-center  gap-3'>
        <HiOutlineDevicePhoneMobile   className='text-[28px]' />
        <h1 className='w-[200px] block'>Смартфоны, телефоны, планшеты и гаджеты</h1>
        </div>
      </div>

      <div onMouseOver={()=>{{setNote(true),setTexno(false)}}} onMouseOut={()=>setNote(false)}
      className={`${setNote ? "hover:text-red-600 rounded-[15px] p-4 hover:bg-red-100" : ""}`}
      >
        <div className='flex items-center gap-3'>
        <PiLaptop    className='text-[28px]' />
        <h1 className='w-[200px] block'>Ноутбуки, моноблоки, игровые приставки</h1>
        </div>
      </div>

      <div onMouseOver={()=>{{setTexno(true),setNote(false)}}} onMouseOut={()=>setTexno(false)}
      className={`${setTexno ? "hover:text-red-600 rounded-[15px] p-4 hover:bg-red-100" : ""}`}
      >
        <div className='flex items-center  gap-2'>
        <PiWashingMachineLight     className='text-[28px]' />
        <h1 className='w-[200px] block'>Смартфоны, телефоны, планшеты и гаджеты</h1>
        </div>
      </div>


      <div onMouseOver={()=>{{setInfo(true),setKub(false)}}} onMouseOut={()=>setInfo(false)}
      className={`${setInfo ? "hover:text-red-600 rounded-[15px] p-4 hover:bg-red-100" : ""}`}
      >
        <div className='flex items-center  gap-2'>
        <TbFridge      className='text-[28px]' />
        <h1 className='w-[200px] block'>Техника для кухни</h1>
        </div>
      </div>

      <div onMouseOver={()=>{{setKub(true),setInfo(false)}}} onMouseOut={()=>setKub(false)}
      className={`${setKub ? "hover:text-red-600 rounded-[15px] p-4 hover:bg-red-100" : ""}`}
      >
        <div className='flex items-center gap-2'>
        <GiTrophyCup       className='text-[28px]' />
        <h1 className='w-[200px] block'>Спорт, хобби</h1>
        </div>
      </div>

      </div>
    <div>
    {
      phone ? <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBSYY1_TLbeaoJZR2SFDknS0Uc-OBHzFfGMQ&s" alt="" /> : null 
    } 
    {
      tel ? <img src="https://olcha.uz/image/600x600/products/2022-12-02/televizor-mi-tv-p1-55-gl-172948-0.jpeg" alt="" /> : null 
    } 
    {
      note ? <img className='w-[200px]' src="https://toptop.uz/storage/offer/images/noutbuk-lenovo-v130-15ikb-81hn00yxak_detail.jpg" alt="" /> : null
    }
    {
      texno ? <img className='w-[200px]' src="https://mini-io-api.texnomart.uz/catalog/product/3550/355093/186932/eb2f2dc9-b1ef-4ac1-9a76-955ae4ee9687.jpg" alt="" /> : null
    }
    {
      info ? <img className='w-[200px]' src="https://frankfurt.apollo.olxcdn.com/v1/files/5kxfikrme5bq2-UZ/image" alt="" /> : null
    }
    {
      kub ? <img className='w-[200px]' src="https://w7.pngwing.com/pngs/539/633/png-transparent-trophy-medal-trophy-medal-%D0%BA%D1%83%D0%B1%D0%BE%D0%BA-%D0%B7%D0%BE%D0%BB%D0%BE%D1%82%D0%BE%D0%B9-%D0%BA%D1%83%D0%B1%D0%BE%D0%BA-thumbnail.png" alt="" /> : null
    }
      </div> 
    </div>
  )
}

export default Katalog