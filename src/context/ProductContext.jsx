/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react"
import axios from "axios"

export const ProductContext = createContext(null)

const ProductProvider = ({ children }) => {
  const [items, setItems] = useState([])
  const [open, setOpen] = useState(false)
  let api = "https://3fb92b152ce9d43c.mokky.dev/mediapark"
  const getData = async () => {
    try {
      const response = await axios.get(api)
      setItems(response.data)
    } catch (e) {
      console.log(e.message)
    }
  }
  useEffect(() => {
    getData()
  }, [])
  const handleBurger = () => {
    setOpen(!open)
  }
  
  

  const onDelete = (id) => {
    const newData = items.filter((v) => v.id !== id)
    setItems(newData)
  }
  const Burger = () => {
    if (setOpen === false) {
      setOpen("")
    }
  }

  return (
    <ProductContext.Provider value={{ items,Burger, onDelete,handleBurger, open,setOpen }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider
