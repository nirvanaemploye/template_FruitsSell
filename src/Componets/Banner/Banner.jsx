import { useEffect } from "react";
import Bannerimg from "../../assets/fruits-splash.png";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="bg-secondary/10">
      <span id="about"></span>
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            viewport={{ once: true }}
            src={Bannerimg}
            alt=""
            className="w-[300px] md:max-w-[400px] h-full object-cover drop-shadow"
          />
        </div>
        {/* Banner Info */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <h1
              data-aos="fade-left"
                data-aos-delay="200"
              className="text-3xl lg:text-6xl font-bold uppercase"
            >
              Brand Info
            </h1>
            <p
             data-aos="fade-left"
                data-aos-delay="400"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dignissimos ea explicabo unde ipsam dolores ad, iusto doloremque
              deserunt omnis distinctio commodi excepturi, quo dolor quis.
              Libero facere tempora tempore labore.
            </p>
            <p
              data-aos="fade-left"
                data-aos-delay="600"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus odit beatae fuga quam rerum nesciunt.
            </p>
            {/* buttom Section */}
            <dev
              data-aos="fade-left"
                data-aos-delay="800"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn">Learn More</button>
            </dev>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
