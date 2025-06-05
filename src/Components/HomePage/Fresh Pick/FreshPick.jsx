import React from "react";
import FreshBg from "../../../assets/Home_page/FreshImg/bg_rectangle2.svg";
import Title from "../../../Share/Title/Title";
import Lychee from "../../../assets/Home_page/FreshPick/Lychee.svg";
import Orange from "../../../assets/Home_page/FreshPick/oranges.svg";
import Apple from "../../../assets/Home_page/FreshPick/Apple.svg";
import Cherry from "../../../assets/Home_page/FreshPick/Cherry.svg";
import PrimaryBtn from "../../../Share/PrimaryBtn/PrimaryBtn";

const bgStyle = {
  backgroundImage: `url(${FreshBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const FreshPickData = [
  {
    id: 1,
    img: Lychee,
    fruit: "Lychee",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    price: 4.5,
  },
  {
    id: 2,
    img: Orange,
    fruit: "Orange",
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    price: 4.5,
  },
  {
    id: 3,
    img: Apple,
    fruit: "Apple",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 4.5,
  },
  {
    id: 4,
    img: Cherry,
    fruit: "Cherry",
    details: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 4.5,
  },
];

const FreshPick = () => {
  return (
    <section style={bgStyle} className="py-24">
      <Title>Fresh Picks</Title>
      <div className="mt-28">
        <div className="container p-8 lg:pt-10 grid grid-cols-2 lg:grid-cols-4 gap-y-36 gap-x-12 ">
          {FreshPickData.map((item) => (
            <div
              key={item.id}
              data-aos="zoom-in"
              className="relative group bg-white flex flex-col items-center justify-center px-3 pt-16 pb-6 shadow-lg hover:shadow-2xl transition-all duration-200"
            >
              {/* Floating image */}
              <div className="rounded-full h-36 w-36 sm:h-52 sm:w-52 absolute border-[2px] border-gray-400 group-hover:border-primary top-0 -translate-y-1/2 bg-white flex items-center justify-center duration-500 tra">
                <img
                  src={item.img}
                  alt={item.fruit}
                  className="object-contain scale-90 group-hover:scale-100 transition-all duration-700"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col items-center  gap-2 sm:gap-5 mt-5 sm:mt-14 w-full">
                <h1 className="text-3xl sm:text-4xl text-center">{item.fruit}</h1>
                <p className="text-center text-xs sm:text-sm ">{item.details}</p>
                <div className="flex items-center w-full gap-3 px-2">
                  <button className="bg-white border border-black text-xs sm:text-md 2xl:text-lg font-semibold shadow-md py-3 px-3 hover:scale-105 duration-300 font-Poppins rounded-full w-full">
                    ${item.price}
                  </button>

                  <PrimaryBtn className="hidden sm:block px-0 text-xs rounded-full w-full">
                    Shop Now
                  </PrimaryBtn>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreshPick;
