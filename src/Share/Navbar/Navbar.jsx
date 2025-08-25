import React, { useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { MdMenu, MdClose } from "react-icons/md";
import logo from "../../assets/Icon.svg";
import { Link } from "react-router-dom";
import Cart from "../../Share/Cart/Cart";

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
      <div data-aos="fade" className="container mx-auto flex justify-between items-center py-3">
        {/* Logo */}
        <h1 className="flex items-center gap-3 text-5xl">
          Fruit Store
          <img src={logo} alt="Logo" className="w-8 h-8 sm:mt-4" />
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

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsCartOpen(true)}
              className="lg:border border-secondary rounded-full sm:p-2 group lg:hover:bg-secondary duration-300 hover:scale-110"
            >
              <TiShoppingCart className="text-2xl group-hover:text-white" />
            </button>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? (
                  <MdClose className="text-3xl" />
                ) : (
                  <MdMenu className="text-3xl" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center gap-5 py-4 text-2xl font-medium">
            {navItems.map((item) => (
              <li key={item.name} className="hover:text-secondary">
                <Link to={item.link}  onClick={() => setIsMenuOpen(false)}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}

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
