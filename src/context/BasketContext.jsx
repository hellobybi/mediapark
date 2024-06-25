/* eslint-disable react/prop-types */
import { createContext,useState } from "react"
import { useEffect } from "react"

export const BasketContext = createContext()

const BasketProvider = ({children})=>{

    let storage = JSON.parse(localStorage.getItem("products"));
    const [basket,setBasket] = useState(storage || [])

    const getBasketData = (data) =>{
        const isixist = basket.some((item)=> item.id === data.id)
        console.log(isixist);
        if(!isixist){
        setBasket([...basket,data])
        }
    };
    useEffect(()=>{
        localStorage.setItem('products', JSON.stringify(basket))
    },[basket]);


    const onDelete = (id) =>{
        const newData = basket.filter((v)=> v.id !== id)
        setBasket(newData)
      }
      const deleteData = () =>{
        setBasket([])
      }


    return(
        <BasketContext.Provider value={{getBasketData, basket,onDelete,deleteData}}>
            {children}
        </BasketContext.Provider>
    )
}

export default BasketProvider