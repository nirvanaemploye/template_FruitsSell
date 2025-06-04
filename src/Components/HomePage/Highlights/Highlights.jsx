import Fresh from "../../../assets/Home_page/HighlightImg/Fresh.svg";
import Farming from "../../../assets/Home_page/HighlightImg/Farming.svg";
import Quality from "../../../assets/Home_page/HighlightImg/Quality.svg";
import Banna from "../../../assets/Home_page/HighlightImg/Banna.svg";
import { motion } from "motion/react";

let data = [
  {
    img: Quality,
    title: "Premium Quality",
    desc: "The quality and safety of our products is our top priority. We contribute to guest for even greater product quality.",
  },
  {
    img: Farming,
    title: "Organic Farming",
    desc: "The quality and safety of our products is our top priority. We contribute to guest for even greater product quality.",
  },
  {
    img: Fresh,
    title: "Always Fresh",
    desc: "The quality and safety of our products is our top priority. We contribute to guest for even greater product quality.",
  },
];

const Highlights = () => {
  return (
    <section className="py-32">
      <div className="container relative">
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          src={Banna}
          alt=""
          className="absolute -bottom-32 lg:-left-2 h-auto 2xl:h-40 w-24 sm:w-32 lg:w-auto"
        />
        <div className="relative flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="hidden lg:block mx-[120px] absolute top-24 left-0 right-0 border-t-[3px] border-dashed border-primary z-0" />
          {data.map((item) => (
            <div key={item.title}  className="flex flex-col items-center gap-10">
              <div className="bg-white flex items-center justify-center rounded-full shadow-lg h-40 w-40 lg:h-48 lg:w-48 border-[3px] border-spacing-16 border-dashed border-primary z-10">
                <img
                data-aos="zoom-in"
                  src={item.img}
                  alt=""
                  className="sm:w-20 sm:h-20 object-contain"
                />
              </div>
              <div data-aos="fade-down" className="flex flex-col gap-2 items-center">
                <h1 className="text-3xl xl:text-4xl ">{item.title}</h1>
                <p className="text-center  sm:w-3/4 px-12 sm:px-0 2xl:px-4">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
