import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLeaf, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <footer className="bg-primary/20 text-white py-12 mt-12 ">
        <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1, delay:0.2}}
        className="container flex justify-between items-center">
          {/* Logo Section */}
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
            <p className="text-primary">Fruit</p>
            <p className="text-secondary">Selling</p>
            <FaLeaf className="text-green-600" />
          </div>
          {/* Social Icons Section */}
          <div className="text-2xl flex items-center gap-4 mt-6 
          text-gray-800
          ">
            <FaInstagram/>
            <FaFacebook/>
            <FaYoutube/>
            <FaTwitter/>
          </div>
        </motion.div>
      </footer>
    </>
  );
};

export default Footer;
