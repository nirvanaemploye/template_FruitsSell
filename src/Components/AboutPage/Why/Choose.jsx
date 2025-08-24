import React from "react";
import Bg from "../../../assets/about_us/Choose/ChooseBg.svg";
import Title from "../../../Share/Title/Title";
import Food from "../../../assets/about_us/Choose/Food.svg";
import Quality from "../../../assets/about_us/Choose/Quality.svg";
import Delivery from "../../../assets/about_us/Choose/Delivery.svg";

const bgStyle = {
  backgroundImage: `url(${Bg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const data = [
  {
    id: 1,
    img: Food,
    title: "Healthy Food",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    id: 2,
    img: Quality,
    title: "Best Quality",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
  {
    id: 3,
    img: Delivery,
    title: "Fast Delivery",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
];

const Choose = () => {
  return (
    <section style={bgStyle} className="py-24">
      <div className="container space-y-12">
        <Title>Why Choose Us</Title>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {data.map((item) => {
            return (
              <div
                key={item.id}
                data-aos="zoom-out"
                className="flex flex-col items-center gap-5 px-14 py-10 shadow-xl text-center bg-white"
              >
                <img src={item.img} alt="" />
                <h1 className="text-3xl lg:text-4xl 2xl:text-5xl">{item.title}</h1>
                <p className="2xl:text-lg sm:leading-8">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Choose;
