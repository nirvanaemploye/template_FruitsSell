import { BrowserRouter, Routes, Route } from "react-router-dom";
import Head from "./Components/Head/Head";
import Navbar from "./Share/Navbar/Navbar";
// Home
import HomeHeader from "./Components/HomePage/Header/Header";
import Footer from "./Share/Footer/Footer";
import Well from "./Components/HomePage/Well/Well";
import FreshPick from "./Components/HomePage/Fresh Pick/FreshPick";
import FreshDeal from "./Components/HomePage/Fresh Deal/FreshDeal";
import Highlights from "./Components/HomePage/Highlights/Highlights";
import Feature from "./Components/HomePage/Feature/Feature";
// About
import AboutHeader from "./Components/AboutPage/Header/Header";
import Trusted from "./Components/AboutPage/Trusted/Trusted";
import Choose from "./Components/AboutPage/Why/Choose";
import Team from "./Components/AboutPage/Team/Team";
import Customers from "./Components/AboutPage/Customers/Customers";
// Shop
import Shopheader from "./Components/ShopPage/ShopHeader/Shopheader";
import AddCart from "./Components/ShopPage/AddCart/AddCart";
// Contact
import ContactHeader from "./Components/ContactUs/ContactHeader/ContactHeader";
import Contactdetails from "./Components/ContactUs/Contactdetails/Contactdetails";
import Contactbox from "./Components/ContactUs/ContactBox/Contactbox";
// Cart

//AOS
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 600, delay: 100,
      offset: 20,
      once: true
    });
  });
  return (
    <BrowserRouter>
      <Head />
      <Navbar />
      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <>
              <HomeHeader />
              <Well />
              <FreshDeal />
              <Highlights />
              <FreshPick />
              <Feature />
            </>
          }
        />
        {/* Product */}
      </Routes>
      <Routes>
        <Route path="/product" element={<h1>Product</h1>} />
      </Routes>
      <Routes>
        <Route
          path="/about"
          element={
            <>
              <AboutHeader />
              <Trusted />
              <Choose />
              <Team />
              <Customers />
            </>
          }
        />
      </Routes>
      {/* Shop */}
      <Routes>
        <Route
          path="/shop"
          element={
            <>
              <Shopheader />
              <AddCart />
            </>
          }
        />
      </Routes>
      {/* Contact */}
      <Routes>
        <Route
          path="/contact"
          element={
            <>
              <ContactHeader />
              <Contactdetails />
              <Contactbox />
            </>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
