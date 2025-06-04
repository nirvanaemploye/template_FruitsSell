import React from "react";
import Title from "../../../Share/Title/Title";
import Img1 from "../../../assets/about_us/TeamImg/Siya.svg";
import Img2 from "../../../assets/about_us/TeamImg/Jerry.svg";
import Img3 from "../../../assets/about_us/TeamImg/img16.svg";
import PrimaryBtn from "../../../Share/PrimaryBtn/PrimaryBtn";

const HndalHover = () => {
  return (
   <div className="hidden absolute top-0 left-0 w-full h-full bg-black/40 rounded-lg group-hover:flex transition-all duration-500 flex-col items-center justify-center gap-2 text-white">
      <h1 className=" text-4xl">Raeo Maraia</h1>
      <p className="text-lg font-semibol text-white">Lorem ipsum</p>
    </div>
  );
};
const Team = () => {
  return (
    <section className="py-24 ">
      <div className="container space-y-12 relative">
        <img src={Img3} alt="" className="w-24 sm:w-32 lg:w-auto absolute top-0 right-0" />
        <Title>Our Team</Title>
        <div className="lg:flex items-center space-y-12 gap-">
          {/* right side */}
          <div data-aos="fade-right" className="text-center lg:text-left px-5 sm:px-20 lg:px-0 space-y-5 lg:w-5/12">
            <h1 className="text-4xl sm:text-5xl 2xl:text-6xl">Meet Our Expert Team</h1>
            <p className=" sm:leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud.
            </p>
            <p className=" sm:leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud.
            </p>
            <PrimaryBtn className="rounded-lg">View All Members</PrimaryBtn>
          </div>
          {/* left side */}
          <div className=" sm:flex gap-5 space-y-6 sm:space-y-0 justify-end lg:w-7/12 gap-y-10 px-10 lg:px-0 ">
            <div data-aos="zoom-in" className="relative group">
              <img src={Img1} alt="Team" className="w-full" />
              <HndalHover />
            </div>
            <div data-aos="zoom-in" className="relative group">
              <img src={Img2} alt="Team" className="w-full" />
              <HndalHover />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
