import Bannerimg from "../../assets/fruit-plate2.png";
import { motion } from "framer-motion";

const Banner2 = () => {
  return (
    <section className="">
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 md:pt-24">
        {/* Banner Info */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <h1
              data-aos="fade-right"
              data-aos-delay="200"
              className="text-3xl lg:text-6xl font-bold uppercase"
            >
              {" "}
              Online fruit store
            </h1>
            <p data-aos="fade-right" data-aos-delay="400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dignissimos ea explicabo unde ipsam dolores ad, iusto doloremque
              deserunt omnis distinctio commodi excepturi, quo dolor quis.
              Libero facere tempora tempore labore.
            </p>
            <p data-aos="fade-right" data-aos-delay="600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus odit beatae fuga quam rerum nesciunt.
            </p>
            {/* buttom Section */}
            <dev
              data-aos="fade-right"
              data-aos-delay="800"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn">Download The App</button>
            </dev>
          </div>
        </div>
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 200, rotate: 75 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            src={Bannerimg}
            alt=""
            className="w-full md:max-w-[400px] h-full object-cover drop-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner2;
