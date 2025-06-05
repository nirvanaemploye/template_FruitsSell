import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// assets
import Title from "../../../Share/Title/Title";
import Img1 from "../../../assets/Home_page/FeatureImg/vegetables.svg";
import Img2 from "../../../assets/Home_page/FeatureImg/Watermelon_Juice.svg";
import Img3 from "../../../assets/Home_page/FeatureImg/orange_juice.svg";
import Star from "../../../assets/Home_page/FeatureImg/material-symbols_star.svg";
import Tick from "../../../assets/Home_page/FeatureImg/charm_square-tick.svg";

const products = [
  {
    id: 1,
    title: "Vegetable Gift Set",
    subtitle: "Vegetables",
    description:
      "Supplying almost fruits & veggies for a day absolutely fresh and beautiful.",
    price: "$30.00",
    oldPrice: "$37.00",
    image: Img1,
    features: [
      "Absolutely Fresh",
      "Beautiful Look",
      "100% Natural",
      "Delicious Taste",
      "Good for Health",
    ],
  },
  {
    id: 2,
    title: "Fresh Juices",
    subtitle: "Watermelon Juices",
    description:
      "You can get all for already mixed or make them yourself at Organisk.",
    price: "$27.00",
    oldPrice: "$37.00",
    image: Img2,
    features: [
      "Absolutely Fresh",
      "Beautiful Look",
      "100% Natural",
      "Delicious Taste",
      "Good for Health",
    ],
  },
  {
    id: 3,
    title: "Fresh Shots",
    subtitle: "Orange Shots",
    description: "Farm to your table — pure, fresh, and full of color.",
    price: "$20.00",
    oldPrice: "$37.00",
    image: Img3,
    features: [
      "Absolutely Fresh",
      "Beautiful Look",
      "100% Natural",
      "Delicious Taste",
      "Good for Health",
    ],
  },
];

const Feature = () => {
  const [centerIndex, setCenterIndex] = useState(0);

  const settings = {
    className: "center slider",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    afterChange: (current) => setCenterIndex(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  const centerProductId = products[(centerIndex % products.length) + 1]?.id;

  return (
    <section className="container mx-auto px-4 overflow-hidden">
      <div className="py-12 md:py-24">
        <Title>Feature Product</Title>
        <div className="mt-10">
          <Slider {...settings}>
            {products.map((item) => {
              const isCenter = item.id === centerProductId;

              return (
                <div data-aos="zoom-in" key={item.id} className="px-4">
                  <div
                    className={`bg-white rounded-lg shadow-lg p-6 pt-16 space-y-10 transition-all duration-300 transform-gpu ${
                      isCenter
                        ? "scale-105 z-10 shadow-2xl"
                        : "scale-100 opacity-80 hover:opacity-100 hover:scale-102"
                    }`}
                  >
                    <div className="space-y-4 text-center">
                      <h1 className="text-3xl md:text-4xl text-primary font-bold">
                        {item.title}
                      </h1>
                      <div className="flex justify-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <img
                            key={i}
                            src={Star}
                            alt="star"
                            className="w-5 h-5"
                          />
                        ))}
                      </div>
                      <p className="text-lg font-semibold text-black">
                        {item.subtitle}
                      </p>
                      <p className="text-gray-600">{item.description}</p>
                      <div className="text-orange-500 font-bold text-2xl">
                        {item.price}
                        <span className="text-gray-400 text-base font-medium line-through ml-2">
                          {item.oldPrice}
                        </span>
                      </div>
                    </div>

                    <div className="relative flex flex-col items-center">
                      <img
                        src={item.image}
                        alt={item.subtitle}
                        className={`w-60 h-60 object-contain transition-opacity duration-300 ${
                          isCenter ? "opacity-30" : "opacity-100"
                        }`}
                      />
                      <ul
                        className={`absolute py-12 space-y-2 text-left text-sm text-gray-700 transition-opacity duration-300 ${
                          isCenter ? "block" : "hidden"
                        }`}
                      >
                        {item.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-black"
                          >
                            <img src={Tick} alt="tick" className="w-4 h-4" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Feature;
