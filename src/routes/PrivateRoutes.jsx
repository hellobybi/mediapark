import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import ToDo from "../pages/To-do";
import Products from "../pages/Products";
import MediaClub from "../pages/headerTop/MediaClub";
import Blog from "../pages/headerTop/Blog";
import Delivery from "../pages/headerTop/Delivery";
import Ourshops from "../pages/headerTop/Ourshops";
import Contact from "../pages/headerTop/Contact";
import Compare from "../pages/Compare";
import Status from "../pages/Status";
import DynamicPage from "../pages/Dynamic-page";
import SearchPage from "../pages/SearchPage";
import Chosen from "../pages/Chosen";
import Discount from "../components/headetBt/Text/Discount";
import Xolodilnik from "../components/headetBt/Text/Xolodilnik";
import Phones from "../components/headetBt/Text/Phones";
import Televizor from "../components/headetBt/Text/Televizor";
import Apple from "../components/headetBt/Text/Apple";
import Noutebooks from "../components/headetBt/Text/Noutebooks";
import Isnot from "../pages/Isnot";
import Konditsionery from "../components/headetBt/Text/Konditsionery";
import Korzinka from "../pages/Korzinka";
import Wash from "../components/headetBt/Text/Wash";
import Koffe from "../components/headetBt/Text/Koffe";
import Smart from "../components/headetBt/Text/Smart";
import Paneli from "../components/headetBt/Text/Paneli";
import Footer from "../components/Footer";
import Navbar from "../Navbar";
import Header from "../components/Header";
import HeaderBt from "../components/headetBt/HeaderBt";
import { Route,Routes } from "react-router-dom";


const PrivateRoutes = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <HeaderBt />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="/products" element={<Products />} />
        <Route path="/mediaclub" element={<MediaClub />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/ourshops" element={<Ourshops />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/status" element={<Status />} />
        <Route path="/products/:id" element={<DynamicPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/chosen" element={<Chosen />} />
        <Route path="/discount" element={<Discount/>} />
        <Route path="xolodilnik" element={<Xolodilnik />} />
        <Route path="/phones" element={<Phones />} />
        <Route path="/televizor" element={<Televizor />} />
        <Route path="/apple" element={<Apple />} />
        <Route path="/noutebooks" element={<Noutebooks />} />
        <Route path="*" element={<Home />} />
        <Route path="konditsionery" element={<Konditsionery />} />
        <Route path="/korzinka" element={<Korzinka />} />
        <Route path="/wash" element={<Wash />} />
        <Route path="/kofe" element={<Koffe />} />
        <Route path="/smart" element={<Smart />} />
        <Route path="/paneli" element={<Paneli />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default PrivateRoutes;
