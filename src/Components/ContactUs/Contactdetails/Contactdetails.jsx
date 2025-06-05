import React from "react";
import ContactdetailsImg from "../../../assets/ContactImg/ContactdetailsImg.svg";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall, MdEmail } from "react-icons/md";

const ContactdetailsData = [
  {
    id: 1,
    img: ContactdetailsImg,
    icon: <FaLocationDot />,
    title: "Address",
    text: "Hill Station , Brogary Villas, New York. NY 10013",
  },
  {
    id: 2,
    img: ContactdetailsImg,
    icon: <MdCall />,
    title: "Phone",
    text: [
      {
        id: 1,
        text: "1600-345-5432",
      },
      {
        id: 2,
        text: "1550-340-1032",
      },
    ],
  },
  {
    id: 3,
    img: ContactdetailsImg,
    icon: <MdEmail />,
    title: "Email",
    text: [
      {
        id: 1,
        text: "store@example.com",
      },
      {
        id: 2,
        text: "info@example.com",
      },
    ],
  },
];

const Contactdetails = () => {
  return (
    <section className="py-24 ">
      <div className="container grid grid-cols-1 lg:grid-cols-3 p-9 md:p-4 ">
        {ContactdetailsData.map((item) => (
          <div
          data-aos="zoom-in"
            key={item.id}
            className="flex flex-col items-center text-center relative"
          >
            <div className="">
              <img src={item.img} alt="" />
            </div>
            <div className="absolute mx-16 md:mx-60 lg:mx-10 xl:mx-20 2xl:mx-28 flex flex-col items-center gap-2 top-20 2xl:top-24 text-black">

            <div className="text-3xl text-secondary bg-white p-3 rounded-full">
              {item.icon}
            </div>
            <h2 className="text-3xl font-semibold">{item.title}</h2>
            {typeof item.text === "string" ? (
                <p className="font-medium text-black">{item.text}</p>
            ) : (
                <div className="font-medium  space-y-1">
                {item.text.map((entry) => (
                    <p className="text-black" key={entry.id}>{entry.text}</p>
                ))}
              </div>
            )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contactdetails;
