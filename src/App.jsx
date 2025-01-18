import Navbar from "./Componets/Navbar/Navbar"
import Hero from"./Componets/Hero/Hero"
import Banner from './Componets/Banner/Banner'
import Banner2 from './Componets/Banner/Banner2'
import Banner3 from './Componets/Banner/Banner3'
import Footer from './Componets/Footer/Footer'
import Menu from "./Componets/Menu/Menu"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration (default: 400ms)
      once: true,     // Whether animation should happen only once (default: false)
      offset: 100,    // Offset (in px) from the original trigger point
    });
  }, []);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <Menu/>
      <Banner/>
      <Banner2/>
      <Banner3/>
      <Footer/>
    </div>
  )
}

export default App
