import React from "react";
import Title from "../../../Share/Title/Title";
import FruitBasket from "../../../assets/Home_page/WellImg/FruitBasket.svg";
import comma from "../../../assets/Home_page/WellImg/inverted-commas_svgrepo.com.svg";
import Avocado from "../../../assets/Home_page/WellImg/Avocado.svg";
import Pineapple from "../../../assets/Home_page/WellImg/Pineapple.svg";
import Kiwi from "../../../assets/Home_page/WellImg/kiwi.svg";
import Apple from "../../../assets/Home_page/FreshPick/Apple.svg";
import Cherry from "../../../assets/Home_page/FreshPick/Cherry.svg";
import Lychee from "../../../assets/Home_page/FreshPick/Lychee.svg";
import Orange from "../../../assets/Home_page/FreshPick/oranges.svg";

const fruitData = [
  {
    name: "Avocado",
    img: Avocado,
    desc: "Lorem Ipsum is simply dummy text of the printing.",
  },
  {
    name: "Pineapple",
    img: Pineapple,
    desc: "Lorem Ipsum is simply dummy text of the printing.",
  },
  {
    name: "Kiwi",
    img: Kiwi,
    desc: "Lorem Ipsum is simply dummy text of the printing.",
  },
  {
    name: "Apple",
    img: Apple,
    desc: "Lorem Ipsum is simply dummy text of the printing.",
  },
  {
    name: "Cherry",
    img: Cherry,
    desc: "Lorem Ipsum is simply dummy text of the printing.",
  },

  {
    name: "Lychee",
    img: Lychee,
    desc: "Lorem Ipsum is simply dummy text of the printing.",
  },
  {
    name: "Orange",
    img: Orange,
    desc: "Lorem Ipsum is simply dummy text of the printing.",
  }
];

const Well = () => {
  return (
    <section className="py-24">
      <Title>Eat Well, Live Weel</Title>
      <div className="container pt-10 grid grid-cols-1 lg:grid-cols-3">
        {/* Left side fruitlist */}
        <div data-aos="fade" className="w-full max-w-md mx-auto py-8 ">
          <div className="flex flex-col gap-6 overflow-y-scroll scroll-ml-48 max-h-[380px] scrollbar-thin scrollbar-thumb-primary scrollbar-track-slate-100 pr-5 ">
            {fruitData.map((fruit, index) => (
              <div key={index} className="flex items-start gap-4 p-1">
                <div className="min-w-[95px] min-h-[95px] rounded-full border-2 border-primary flex items-center justify-center shadow-md shadow-primary/50">
                  <img
                    data-aos="zoom-out"
                    src={fruit.img}
                    alt={fruit.name}
                    className="h-20 w-20 object-contain"
                  />
                </div>
                <div className="my-auto">
                  <h1 className="text-3xl sm:text-4xl">{fruit.name}</h1>
                  <p className="text-gray-500 md:text-lg">{fruit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Middle image */}
        <div className="flex justify-center items-center">
          <img
            data-aos="zoom-in"
            src={FruitBasket}
            alt="Fruit Basket"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
          />
        </div>

        {/* Right side quote */}
        <div data-aos="fade" className="text-cente p-4 space-y-4">
          {/* Top comma */}
          <div className="flex justify-start">
            <img src={comma} alt="Opening comma" />
          </div>

          {/* Quote text */}
          <p className="text-xl text-center  lg:px-4 px-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor.
          </p>

          {/* Bottom comma */}
          <div className="flex justify-end">
            <img src={comma} alt="Closing comma" className="rotate-180" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Well;
