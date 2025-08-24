import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Img1 from "../../assets/ShopImg/Apple.svg";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";

// Single Cart Item Component
const CartItem = ({ item, onRemove, onQuantityChange }) => {
  const increment = () => onQuantityChange(item.id, item.quantity + 1);
  const decrement = () => {
    if (item.quantity > 1) {
      onQuantityChange(item.id, item.quantity - 1);
    }
  };

  return (
    <div className="flex items-center justify-between border-b py-4">
      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt={item.title}
          className="h-28 w-28 object-cover p-2 bg-gray-100 rounded-md"
        />
        <div>
          <p className="text-md font-semibold mb-2">{item.title}</p>
          <div className="flex items-center justify-center border rounded-md overflow-hidden max-w-[90px]">
            <button
              onClick={decrement}
              className="text-2xl px-3  hover:bg-gray-100 transition"
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className="text-lg font-medium px-2">{item.quantity}</span>
            <button
              onClick={increment}
              className="text-2xl px-3  hover:bg-gray-100 transition"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
          <p className="text-gray-800 font-medium text-lg mt-2">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
        </div>
      </div>
      <div className="text-right">
        
        <button
          onClick={() => onRemove(item.id)}
          className="text-red-500 hover:text-red-700 mt-2 text-xl"
          aria-label="Remove item"
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

// Cart Component
const Cart = ({ onClose }) => {
  const [cartItems, setCartItems] = useState([
    { id: 1, title: "Sed ut Perspiciatis Unde Omnis ", image: Img1, price: 130, quantity: 1 },
    { id: 2, title: "Sed ut Perspiciatis Unde Omnis ", image: Img1, price: 130, quantity: 1 },
    { id: 3, title: "Sed ut Perspiciatis Unde Omnis ", image: Img1, price: 130, quantity: 1 },
  ]);

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="w-full overflow-y-auto md:w-[550px] shadow-lg fixed top-0 right-0 bg-white h-full p-6 z-50">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl ">Shopping Cart</h2>
        <button
          onClick={onClose}
          className="hover:text-red-500 text-2xl p-2 focus:outline-none focus:ring-2 focus:ring-red-400 rounded-full"
          aria-label="Close cart"
        >
          <FaTimes />
        </button>
      </div>

      <hr className="mb-4" />

      {/* Items */}
      <div className="space-y-4">
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={removeItem}
                onQuantityChange={updateQuantity}
              />
            ))}

            {/* Subtotal */}
            <div className="border-t pt-4 mt-6 flex justify-between text-3xl ">
              <span>Subtotal:</span>
              <span className="text-green-600">${subtotal.toFixed(2)}</span>
            </div>

            {/* Checkout Button */}
            <PrimaryBtn className="w-full mt-6 text-sm rounded-md">
              Order Now
            </PrimaryBtn>
          </>
        ) : (
          <div className="flex flex-col items-center gap-4 mt-10">
            <TiShoppingCart className="text-6xl text-gray-400" />

            <p className="text-center text-xl text-gray-500">
              Your cart is empty.
            </p>

            <Link to="/shop" aria-label="Go to shop" onClick={onClose}>
              <PrimaryBtn data-aos="fade" data-aos-duration="100" className="text-sm rounded-md px-4 py-2">
                Shop Now
              </PrimaryBtn>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
