import React, { useState } from "react";
import Title from "../../../Share/Title/Title";
import PrimaryBtn from "../../../Share/PrimaryBtn/PrimaryBtn";
import Tost from "../../../Share/Tost/Tost";

const Contactbox = () => {
  const [showTost, setShowTost] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowTost(true);
    setTimeout(() => {
      setShowTost(false);
    }, 30000);
    e.target.reset();
    return;
  };

  return (
    <section className="py-24">
      <div className="container space-y-12">
        <Title>Feel Free To Contact Us</Title>

        <form onSubmit={handleSubmit} className="2xl:container space-y-8">
          {/* Show Toast if form submitted */}
          {showTost && <Tost />}

          <div data-aos="fade-up" className=" grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label htmlFor="fullName" className="text-lg font-medium">
                Full Name :
              </label>
              <input
                type="text"
                id="fullName"
                required
                className="w-full p-3 my-2 h-14 bg-gray-100 "
              />
            </div>
            <div>
              <label htmlFor="email" className="text-lg font-medium">
                Email ID :
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full p-3 my-2 h-14 bg-gray-100"
              />
            </div>
          </div>
          <div data-aos="fade-up">
            <label htmlFor="message" className="text-lg font-medium">
              Type your Message :
            </label>
            <textarea
              id="message"
              required
              className="w-full p-4 my-2 h-60 bg-gray-100"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <PrimaryBtn type="submit" className="rounded-lg">
              Send Your Message
            </PrimaryBtn>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contactbox;
