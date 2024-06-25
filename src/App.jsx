// // import React from 'react'
// // import   toDo   from './to-do'
// import ToDo from "./pages/To-do";
// import Navbar from "./Navbar";
// import Home from "./pages/Home";
// import About from "./pages/About";
// // import Isnot from "./pages/Isnot";
// import DynamicPage from "./pages/Dynamic-page";
// import Products from "./pages/Products";
// // import Search from "./components/Search";
// import Isnot from "./pages/Isnot";
// import SearchPage from "./pages/SearchPage"
// import Korzinka from "./pages/Korzinka";
// import Chosen from "./pages/Chosen";
// import { Route, Routes } from "react-router-dom";
// import MediaClub from "./pages/headerTop/MediaClub";
// import Blog from "./pages/headerTop/Blog";
// import Delivery from "./pages/headerTop/Delivery";
// import Ourshops from "./pages/headerTop/Ourshops";
// import Contact from "./pages/headerTop/Contact"
// import Header from "./components/Header";
// import Compare from "./pages/Compare";
// import Footer from "./components/Footer";
// import Status from "./pages/Status";
// import Discount from "./components/headetBt/Text/Discount";
// import HeaderBt from "./components/headetBt/HeaderBt";
// import Xolodilnik from "./components/headetBt/Text/Xolodilnik";
// import Phones from "./components/headetBt/Text/Phones";
// import Televizor from "./components/headetBt/Text/Televizor";
// import Apple from "./components/headetBt/Text/Apple";
// import Noutebooks from "./components/headetBt/Text/Noutebooks";
// import Konditsionery from "./components/headetBt/Text/Konditsionery";
// import Wash from "./components/headetBt/Text/Wash";
// import Koffe from "./components/headetBt/Text/Koffe";
// import Smart from "./components/headetBt/Text/Smart";
// import Paneli from "./components/headetBt/Text/Paneli";
// // import { useContext } from "react";
// // import { BasketContext } from "./context/BasketContext";
// // import Isnot from "./pages/Isnot";
// // import Warranty from "./pages/warranty";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
function App() {
  const {isAuth} = useContext(AuthContext)
  return <div>{isAuth ? <PrivateRoutes /> : <PublicRoutes />}</div>;
}

export default App;
