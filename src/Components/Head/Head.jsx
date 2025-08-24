import React from "react";
import {
  FaFacebookF,
  FaGoogle,
  FaInstagramSquare,
  FaTwitter,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";

const Head = () => {
  return (
    <div data-aos="fade-down" className="hidden md:block bg-secondary text-white">
      <div  className="container flex justify-between items-center">
        {/* Social Media Icons */}
        <div className="flex justify-center items-center gap-5">
          <FaGoogle />
          <FaFacebookF />
          <FaTwitter />
          <FaInstagramSquare className="rounded-lg"/>
        </div>
        {/* contact info div */}
        <div className="flex justify-center items-center gap-2 ">
          <h1 className="flex items-center justify-center gap-2 ">
            <span>
              <FaLocationDot className="" />
            </span>
            Brogary Villas, New York. NY 10013
          </h1>
          <div className="w-[1px] h-4 bg-white m-2"></div>
          <h1 className="flex items-center justify-center gap-2 ">
            {" "}
            <span>
              <MdCall className="font-medium" />
            </span>
            +1900 678 876
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Head;
