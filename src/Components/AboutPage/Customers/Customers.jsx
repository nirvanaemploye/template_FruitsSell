import React from "react";
import Bg from "../../../assets/about_us/CustomersBg.svg";
import Title from "../../../Share/Title/Title";
import MesgBox from "../../../assets/about_us/MesgBox.svg";

const bgStyle = {
  backgroundImage: `url(${Bg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const data = [
  {
    id: 1,
    img: MesgBox,
    CustomersName: "Merry Gery",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incit dolore magna aliqua.",
  },
  {
    id: 2,
    img: MesgBox,
    CustomersName: "Merry Gery",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incit dolore magna aliqua.",
  },
  {
    id: 3,
    img: MesgBox,
    CustomersName: "Merry Gery",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incit dolore magna aliqua.",
  },
];

const Customers = () => {
  return (
    <section style={bgStyle} className="py-24">
      <div className="container space-y-12">
        <Title>Why Customers Love Us ?</Title>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {data.map((item) => {
            return (
              <div
              data-aos="zoom-in"
                key={item.id}
                className="flex flex-col items-center gap-5 relative text-center"
              >
                <img src={item.img} alt="" className="h-full" />
                <div className=" absolute top-[70px] sm:top-16 2xl:top-20 h-44 px-14 sm:px-0 sm:w-1/3 lg:w-4/5 2xl:px-6 overflow-hidden">
                  <p className=" text-gray-500 mb-2 leading-7">{item.desc}</p>
                  <h2 className="text-2xl font-semibold">{item.CustomersName}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Customers;
