import React from "react";
import { GoCheckCircleFill } from "react-icons/go";

const Tost = () => {
  return (
    <div className="container bg-gray-100 p-4 rounded-md flex items-center gap-2 border border-green-300 mb-6">
      <GoCheckCircleFill className="text-primary text-3xl" />
      <span className="text-green-600 font-medium">
        Message Sent Successfully
      </span>
    </div>
  );
};

export default Tost;
