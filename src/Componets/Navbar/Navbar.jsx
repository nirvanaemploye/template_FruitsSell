import { useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import Mobilehamburger from "./Mobilehamburger";

const navmenu = [
  {
    id: 1,
    title: "Home",
    link: "#home",
  },
  {
    id: 2,
    title: "Products",
    link: "#menu",
  },
  {
    id: 3,
    title: "About",
    link: "#about",
  },
  {
    id: 4,
    title: "Shop",
    link: "#",
  },
  {
    id: 5,
    title: "Contact",
    link: "#",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav>
        <div
          data-aos="fade-in"
          className="container flex items-center justify-between py-4 md:pt-4"
        >
          {/* Logo Section */}
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
            <p className="text-primary">Fruit</p>
            <p className="text-secondary">Selling</p>
            <FaLeaf className="text-green-600" />
          </div>

          {/* menu Section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-700">
              {navmenu.map((data) => (
                <li key={data.id} className="text-xl">
                  <a
                    href={data.link}
                    className="inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold"
                  >
                    {data.title}
                  </a>
                </li>
              ))}
              <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-300">
                <MdOutlineShoppingCart />
              </button>
            </ul>
          </div>

          {/* Mobile Hamburger Menu Section */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </nav>

      {/* Mobile Menu Section */}
      <Mobilehamburger open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
