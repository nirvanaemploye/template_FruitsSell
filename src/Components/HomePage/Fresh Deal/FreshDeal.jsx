import React from "react";
import FreshBg from "../../../assets/Home_page/FreshImg/bg_rectangle2.svg";
import Title from "../../../Share/Title/Title";
import banana from "../../../assets/Home_page/FreshImg/Banana.svg";
import gauva from "../../../assets/Home_page/FreshImg/gauva.svg";
import oranges from "../../../assets/Home_page/FreshImg/oranges.svg";
import strawberry from "../../../assets/Home_page/FreshImg/strawberry.svg";
import watermelon from "../../../assets/Home_page/FreshImg/watermelon.svg";
import PrimaryBtn from "../../../Share/PrimaryBtn/PrimaryBtn";
import HandelHover from "../../../Share/handelHover/HandelHover";

const bgStyle = {
  backgroundImage: `url(${FreshBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const FreshDeal = () => {
  return (
    <section style={bgStyle} className="py-24">
      <Title>Fresh Deals Daily</Title>
      {/* main content fresh deal */}
      <div data-aos="fade-up" className="container pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* left side */}
        <div className="hidden lg:flex flex-col justify-between gap-y-4 ">
          {/* Gauva */}
          <div className="bg-gradient-to-r from-[#819F2D] via-[#A5B654] to-[#819F2D] p-2 group relative flex items-center justify-center ">
            <img
              src={gauva}
              alt=""
              className="group-hover:scale-110 transition-all duration-500"
            />
            <HandelHover />
          </div>
          {/* Watermelon */}
          <div className="bg-gradient-to-r from-[#F3FDA6] to-[#F16556] p-2 relative group flex items-center justify-center ">
            <img
              src={watermelon}
              alt=""
              className="group-hover:scale-110 transition-all duration-500"
            />
            <HandelHover />
          </div>
        </div>
        {/* middle */}
        {/* Banana */}
        <div className="relative group  bg-gradient-to-t from-yellow-600 to-yellow-200 flex items-center justify-center ">
          <img
            src={banana}
            alt=""
            className="group-hover:scale-110 transition-all duration-500 "
          />
          <HandelHover />
        </div>
        {/* right side */}
        <div className="flex flex-col justify-between gap-y-4  ">
          {/* Oranges */}
          <div className="bg-gradient-to-l from-[#FCA708] to-[#D4A650] p-2 group h-full relative flex items-center justify-center ">
            <img
              src={oranges}
              alt=""
              className="group-hover:scale-110 transition-all duration-500"
            />
            <HandelHover />
          </div>
          {/* Strawberry */}
          <div className="bg-gradient-to-b from-[#A21B06] to-[#DCAA55] p-2 group relative flex items-center justify-center ">
            <img
              src={strawberry}
              alt=""
              className="group-hover:scale-110 transition-all duration-500"
            />
            <HandelHover />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreshDeal;
