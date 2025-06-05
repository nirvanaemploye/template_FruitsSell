import React from 'react'
import HeadImg from "../../../assets/ShopImg/ShopHead.svg";
import PrimaryBtn from "../../../Share/PrimaryBtn/PrimaryBtn";
import { MdOutlineShoppingBag } from 'react-icons/md';
import { motion } from 'motion/react';

const Shopheader = () => {
  return (
    <section  className="py-12 mdpy-24">
      <div className=" overfclow-x-hidden container relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0">
        {/* text content */}
        <div data-aos="fade-right" className="flex flex-col justify-center items-center lg:items-start gap-8 text-center lg:text-left">
          <h1 className="text-7xl sm:text-8xl 2xl:text-9xl">Shop <span className="text-secondary">Now</span></h1>
          <p className="w-2/3 sm:leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <PrimaryBtn className="flex items-center gap-3 rounded-lg">
            <span className="text-2xl 2xl:text-3xl">
              <MdOutlineShoppingBag />
            </span>
            Order Now
          </PrimaryBtn>
        </div>
        {/* image */}
        <div className="flex justify-center items-end w-full ">
            <img
             data-aos="zoom-in"
             loading='eager'
             src={HeadImg} alt="About Us Img" className="lg:scale-125 lg:me-32"/>
        </div>
      </div>
    </section>)
}

export default Shopheader