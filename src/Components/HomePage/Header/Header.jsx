import React from "react";
import { motion } from "framer-motion";

import img from "../../../assets/Home_page/HaderImg/img1.svg";
import img2 from "../../../assets/Home_page/HaderImg/img2.svg";
import img3 from "../../../assets/Home_page/HaderImg/53185981.svg";
import PrimaryBtn from "../../../Share/PrimaryBtn/PrimaryBtn";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="py-24 ">
      <div className="container  flex flex-col lg:flex-row justify-between relative">
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          src={img2}
          alt="Decorative fruit pattern"
          className="absolute h-24 sm:h-32 2xl:h-auto right-0 -bottom-48"
        />
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          src={img3}
          alt="Decorative fruit pattern"
          className="absolute -top-20"
        />
        {/* left side */}
        <div className="flex flex-col gap-5 justify-center items-center lg:items-start w-full lg:w-2/5 text-center lg:text-left">
          <h1 data-aos="fade" className="font-AppFont text-7xl sm:text-8xl 2xl:text-9xl">
            Healthy{" "}
          </h1>
          <h1 data-aos="fade" className="font-AppFont text-7xl sm:text-8xl 2xl:text-9xl -mt-8">
            Fresh <span className="text-secondary">Fruits!</span>
          </h1>
          <p data-aos="fade" className="sm:text-xl text-black">
            Order Now For Fresh Healthy Life
          </p>
          <p data-aos="fade" className=" sm:w-3/4 text-base 2xl:text-lg sm:leading-8">
            Fresh, juicy fruits delivered to your doorstep. Boost your health
            with every bite.
          </p>
          <Link to="/shop">
            <PrimaryBtn className="flex items-center gap-3 rounded-lg shadow-lg shadow-primary/60">
              <span className="text-2xl 2xl:text-3xl">
                <MdOutlineShoppingBag />
              </span>
              Order Now
            </PrimaryBtn>
          </Link>
        </div>
        {/* right side */}
        <div className="lg:w-3/5">
          <motion.img
            initial={{ opacity: 0, x: 50, rotate: 0 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
            src={img}
            alt="Basket of fresh fruits"
            className="w-full "
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
