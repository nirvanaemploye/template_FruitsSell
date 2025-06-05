import React, { useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { MdMenu, MdClose } from "react-icons/md";
import logo from "../../assets/Icon.svg";
import { Link } from "react-router-dom";
import Cart from "../../Share/Cart/Cart";
import { AnimatePresence, motion } from "motion/react";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Shop", link: "/shop" },
  { name: "Contact Us", link: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <nav className="w-full font-AppFont bg-white z-50 overflow-x-hidden">
      <div
        data-aos="fade"
        className="container mx-auto flex justify-between items-center py-3 my-auto"
      >
        {/* Logo */}
        <h1 className="flex flex-row items-center gap-x-3 text-4xl sm:text-5xl mt-1">
          Fruit Store
          <img
            src={logo}
            alt="Logo"
            className="w-5 h-5 sm:w-8 sm:h-8 -mt-4  sm:mt-2"
          />
        </h1>

        {/* Navigation & Icons */}
        <div className="flex items-center gap-6">
          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-10 text-2xl font-medium">
            {navItems.map((item) => (
              <li key={item.name} className="hover:text-secondary">
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>

          {/* Icons & Mobile Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsCartOpen(true)}
              className="lg:border border-secondary rounded-full my-auto sm:p-2 group lg:hover:bg-secondary duration-300 hover:scale-110"
            >
              <TiShoppingCart className="text-xl sm:text-2xl lg:group-hover:text-white" />
            </button>

            {/* Mobile menu toggle */}
            <div className="lg:hidden">
              <button
                className="flex items-center"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <MdClose className="text-2xl sm:text-3xl" />
                ) : (
                  <MdMenu className="text-2xl sm:text-3xl" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0.5, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            aria-label="Mobile menu"
            className="lg:hidden "
          >
            <ul className="flex flex-col items-center gap-5 py-4 text-2xl font-medium">
              {navItems.map((item) => (
                <li key={item.name} className="hover:text-secondary">
                  <Link to={item.link} onClick={() => setIsMenuOpen(false)}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cart Overlay */}
      {isCartOpen && (
        <>
          <div
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-70 z-40"
          ></div>
          <Cart onClose={() => setIsCartOpen(false)} />
        </>
      )}
    </nav>
  );
};

export default Navbar;
