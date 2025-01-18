import { IoBagHandleOutline } from "react-icons/io5";
import Heroimg from "../../assets/fruit-plate.png";
import leaf from "../../assets/leaf.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <section>
        <span id="home"></span>
        <div
          className="container grid
        grid-cols-1 md:grid-cols-2 min-h-[650px] relative"
        >
          {/* Brand Info */}
          <div className="flex flex-col justify-center py-14 md:py-0 relative z-10">
            <div className="text-center md:text-left space-y-5 lg:max-w-[400px]">
              <h1
                data-aos="fade-right"
                data-aos-delay="200"
                className="text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-loose font-averia"
              >
                Healthy
                <br />
                fresh <span className="text-secondary">fruits</span>
              </h1>
              <p
                data-aos="fade-right"
                data-aos-delay="400"
                className="text-2xl tracking-wide"
              >
                Order Now For Fresh Healthy Life
              </p>
              <p
                data-aos="fade-right"
                data-aos-delay="600"
                className="text-gray-500"
              >
                healthy and yummy foof for fresh moring breakfast. Eat Daily for
                Good health and mind order now and get 20% on your frist order.
              </p>
              {/* button secation */}
              <div
                data-aos="fade-right"
                data-aos-delay="800"

                className="flex justify-center md:justify-start"
              >
                <button className="primary-btn flex items-center gap-3">
                  <span>
                    <IoBagHandleOutline />
                  </span>
                  Order Now
                </button>
              </div>
            </div>
          </div>
          {/* Hero Image */}
          <div className="flex justify-center items-center">
            <motion.img
              initial={{ opacity: 0, x: 200, rotate: 75 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              src={Heroimg}
              alt=""
              className="w-[350px] md:w-[550px] drop-shadow"
            />
          </div>
          {/* leaf Image */}
          <div className="absolute top-14 md:top-0 right-1/2 blur-sm opacity-70 rotate-45">
            <motion.img
              initial={{ opacity: 0, x: -200, rotate: 75 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              src={leaf}
              alt=""
              className="w-full md:max-w-[300px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
