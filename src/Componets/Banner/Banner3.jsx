import Bannerimg from "../../assets/banner-bg.jpg";

const bgStyle = {
  backgroundImage: `url(${Bannerimg})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const Banner3 = () => {
  return (
    <section className="container mb-12">
      <div
        style={bgStyle}
        className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-3xl"
      >
        {/* blank div */}
        <div></div>
        {/* Banner Info */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <h1
             data-aos="fade-left"
                data-aos-delay="200"
              className="text-3xl lg:text-6xl font-bold uppercase"
            >
              {" "}
              Get Fresh Fruits Today
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
            {/* buttom Section */}
            <dev
              data-aos="fade-left"
                data-aos-delay="600"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn">Order Now</button>
            </dev>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner3;
