import Bg from "../../assets/FooterImgs/FooterBg.svg";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { MdCall, MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Shop", link: "/shop" },
  { name: "Contact Us", link: "/contact" },
];

const bgStyle = {
  backgroundImage: `url(${Bg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Footer = () => {
  return (
    <footer style={bgStyle} >
      <div data-aos="fade" className=" container py-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-14">
        {/* Contact Info */}
        <div className="flex flex-col gap-10">
          <h1 className="text-secondary text-[40px] flex flex-col">
            Contact Info{" "}
            <span className="bg-white h-1 w-1/5 rounded-full"></span>
          </h1>
          <div className="flex flex-col gap-6 text-white text-xl font-medium">
            <p className="flex gap-2 text-white">
              <span className="text-secondary text-2xl">
                <FaLocationDot />
              </span>
              JL Raya, Glanyar, Bali - 80571
            </p>
            <p className="flex gap-2 text-white">
              <span className="text-secondary text-3xl">
                <MdCall />
              </span>
              +651 432 89044
            </p>
            <p className="flex gap-2 text-white">
              <span className="text-secondary text-3xl">
                <MdEmail />
              </span>
              fruitstore@domain.com
            </p>
          </div>
        </div>
        {/* Quick Links */}
        <div className="flex flex-col gap-10 lg:ms-9">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="text-secondary text-[40px] flex flex-col">
              Quick Links
              <span className="bg-white h-1 w-1/5 rounded-full"></span>
            </h1>
            <div>
              <ul className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <li
                    key={item.name}
                    className="text-white text-xl "
                  >
                    <Link to={item.link} className="hover:text-secondary duration-300 transform">{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Connect With Us */}
        <div className="flex flex-col gap-10">
          <h1 className="text-secondary text-[40px] flex flex-col">
            Connect With Us{" "}
            <span className="bg-white h-1 w-1/5 rounded-full"></span>
          </h1>
          <p className="text-white ">
            Lorem ipsum dolor sit amet, consectetur adipisc pulvinar ligula
            hendrerit, blandit arcu vitae,rutrum Vestibulum a sem in sapien
            malesuada consequat.
          </p>
          <div className="text-white flex gap-5">
            <FaFacebookF className="bg-primary rounded-full p-2 text-4xl hover:bg-secondary duration-300 " />
            <FaTwitter className="bg-primary rounded-full p-2 text-4xl hover:bg-secondary duration-300" />
            <FaGoogle className="bg-primary rounded-full p-2 text-4xl hover:bg-secondary duration-300" />
            <FaWhatsapp className="bg-primary rounded-full p-2 text-4xl hover:bg-secondary duration-300" />
          </div>
        </div>
      </div>
      <hr className="borde border-gray-600" />
      <p className="py-5 text-center text-base text-gray-400">Copyright © 2023 Fruit Store</p>
    </footer>
  );
};

export default Footer;
