import  { useState } from 'react'

const About = () => {
  // const [set,setSet] = useState('hello');
  // const setbata = () =>{
  //   setSet('lol')
  // }
  const [phone,setPhone] = useState(true)
  const [tel,setTel] = useState(false)
  return (
    <div className='max-w-[1200px] mx-auto mt-10'>
      {/* <img className='rounded-[20px] shadow-gray-500 shadow-2xl' src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ieU2Au7lXso8/v0/-1x-1.jpg" alt="" /> */}




      <div onMouseOver={()=>setPhone(true)}>
        phone
      </div>
      <div onMouseOver={()=>{setTel(true),setPhone(false)}} onMouseOut={()=>setTel(false)}>
        telvior
      </div>
    {
      phone ? <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBSYY1_TLbeaoJZR2SFDknS0Uc-OBHzFfGMQ&s" alt="" /> : null 
    } 
    {
      tel ? <img src="https://olcha.uz/image/600x600/products/2022-12-02/televizor-mi-tv-p1-55-gl-172948-0.jpeg" alt="" /> : null 
    }  
    </div>
  )
}

export default About