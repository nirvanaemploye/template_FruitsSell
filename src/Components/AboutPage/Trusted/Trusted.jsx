import React from "react";
import TrustedImg from "../../../assets/about_us/TrustedImg/TrustedImg.svg";
import Oregano from "../../../assets/about_us/TrustedImg/oregano.svg";
import Plant from "../../../assets/about_us/TrustedImg/plant.svg";

const Trusted = () => {
  return (
    <section className="py-14 overflow-x-hidden">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* image */}
        <div data-aos="fade-left" className="flex justify-center items-end">
          <img src={TrustedImg} alt="Trusted Img" />
        </div>
        {/* text content */}
        <div data-aos="fade-right" className="px-6 lg:px-0 flex flex-col justify-center items-center lg:items-start gap-8 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl xl:text-6xl 2xl:pr-5">
            Your Trusted <span className="text-primary">100%</span> Organic
            Fruit Provider
          </h1>
          <p className=" sm:leading-8 lg:me-20">
            Savor the finest organic fruits, carefully sourced for quality and
            taste. We promise freshness, nutrition, and unmatched flavor in
            every piece. Enjoy the purest, farm-fresh fruits delivered to your
            doorstep. We guarantee 100% natural, pesticide-free goodness in
            every bite.
          </p>
          {/* icons  */}
          <div  className="flex items-center gap-5 ">
            <div className="flex flex-col items-center justify-center text-center gap-2 h-24 w-28">
              <img src={Oregano} alt="" />
              <h1 className="font-medium text-xl">Always Fresh</h1>
            </div>
            {/* line */}
            <div className=" h-16 w-[1px] border-[1px] border-dashed border-primary"></div>
            {/*  */}
            <div className="flex flex-col items-center justify-center text-center gap-2 h-24 w-28">
              <img src={Plant} alt="" />
              <h1 className="font-medium text-xl">Natural Farming</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trusted;
