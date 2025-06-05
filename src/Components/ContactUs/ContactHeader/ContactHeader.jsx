import React from 'react'
import PrimaryBtn from "../../../Share/PrimaryBtn/PrimaryBtn";
import HeadImg from "../../../assets/ContactImg/ContactImg.svg";
import { MdOutlineShoppingBag } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';


const ContactHeader = () => {
  return (
    <section className="py-24">
      <div className="container relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0">
        {/* text content */}
        <div data-aos="fade-right" className="flex flex-col justify-center items-center lg:items-start gap-8 text-center lg:text-left">
          <h1 className="text-7xl sm:text-8xl 2xl:text-9xl">Contact <span className="text-secondary">Us</span></h1>
          <p className="sm:w-2/3 sm:leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link to="/shop">
          <PrimaryBtn className="flex items-center gap-3 rounded-lg">
            <span className="text-2xl 2xl:text-3xl">
              <MdOutlineShoppingBag />
            </span>
            Order Now
          </PrimaryBtn></Link>
        </div>
        {/* image */}
        <div className="flex justify-center items-end">
            <img
             data-aos="zoom-in"
             loading='lazy'
             src={HeadImg} alt="About Us Img" className="w-full sm:scale-150"/>
        </div>
      </div>
    </section>
  )
}

export default ContactHeader