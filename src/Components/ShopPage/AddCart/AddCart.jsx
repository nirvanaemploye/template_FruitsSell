import React, { useState } from "react";
import Pineapple from "../../../assets/ShopImg/Pineapple.svg";
import PrimaryBtn from "../../../Share/PrimaryBtn/PrimaryBtn";
import Apple from "../../../assets/ShopImg/Apple.svg";
import rate from "../../../assets/ShopImg/Rate.svg";
import Pagination from "./Pagination";

const products = [
  {
    id: 1,
    name: "Apple",
    price: 35,
    originalPrice: 65,
    image: Apple,
    rating: 4,
  },
  {
    id: 2,
    name: "Orange",
    price: 35,
    originalPrice: 65,
    image: Apple,
    rating: 4,
  },
  {
    id: 3,
    name: "Apple",
    price: 35,
    originalPrice: 65,
    image: Apple,
    rating: 4,
  },
  {
    id: 4,
    name: "Apple",
    price: 35,
    originalPrice: 65,
    image: Apple,
    rating: 4,
  },
  {
    id: 5,
    name: "Apple",
    price: 35,
    originalPrice: 65,
    image: Apple,
    rating: 4,
  },
  {
    id: 6,
    name: "Apple",
    price: 35,
    originalPrice: 65,
    image: Apple,
    rating: 4,
  },
];

const AddCart = () => {
  // Filter
  const [priceRange, setPriceRange] = useState(250);

  const handleRangeChange = (e) => {
    setPriceRange(e.target.value);
  };

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Optional: scroll to top or fetch data
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-12 md:py-24 relative">
      <img
        src={Pineapple}
        alt=""
        className="absolute bottom-16 left-16 hidden lg:block"
      />
      <div className="container lg:flex ">
        {/* Filter Sidebar */}
        <div className="w-full sm:w-1/2 lg:w-1/4 ">
          <div className="p-6 space-y-4">
            <a className="font-semibold text-lg ">Filter by price</a>
            <input
              type="range"
              min={100}
              max={550}
              value={priceRange}
              onChange={handleRangeChange}
              step="1"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-auto cursor-pointer"
            />
            <p className="text-xs">
              Price : ${priceRange} - $550
            </p>
            <PrimaryBtn className="rounded-lg px-7">Filter</PrimaryBtn>
          </div>
        </div>
        {/* Product Grid & Pagination */}
        <div className="w-full lg:w-3/4 flex flex-col gap-y-8">
          {/* Product Grid */}
          <div className=" grid grid-cols-2 lg:grid-cols-3 gap-5 ">
            {products.map((item) => (
              <div
              data-aos="zoom-in"
                key={item.id}
                className="group p-3 flex flex-col items-center shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 hover:border-primary"
              >
                {/* Floating image */}
                <div className="group-hover:bg-gray-200 bg-white w-full h-44 2xl:h-56 flex items-center justify-center duration-500 transition-all">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-contain group-hover:scale-105 duration-500 transition-all"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col items-center gap-2 py-2">
                  <h1 className="text-3xl sm:text-4xl text-center">
                    {item.name}
                  </h1>
                  {/* Price */}
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 line-through text-sm">
                      ${item.originalPrice}
                    </span>
                    <span className="text-green-600 font-bold text-lg">
                      ${item.price}
                    </span>
                  </div>
                  {/* Rating */}
                  <div className="lg:flex items-center hidden ">
                    {[...Array(item.rating)].map((_, index) => (
                      <img
                        key={index}
                        src={rate}
                        alt="Star"
                        className="w-5 h-5"
                      />
                    ))}
                    {[...Array(5 - item.rating)].map((_, index) => (
                      <img
                        key={index}
                        src={rate}
                        alt="Star"
                        className="w-5 h-5"
                      />
                    ))}
                  </div>
                  <div className="flex items-center w-full gap-3 px-2">
                    <PrimaryBtn className="rounded-3xl text-xs py-1 px-5">
                      Add to Cart
                    </PrimaryBtn>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Pagination */}
          <Pagination
            currentPage={1}
            totalPages={10}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </section>
  );
};

export default AddCart;
