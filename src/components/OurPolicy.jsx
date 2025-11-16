import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  const policies = [
    {
      icon: assets.exchange_icon,
      title: "Easy Exchange Policy",
      desc: "Hassle-free exchange within 30 days",
    },
    {
      icon: assets.quality_icon,
      title: "7 Days Return Policy",
      desc: "We provide a simple return process",
    },
    {
      icon: assets.support_img,
      title: "Best Customer Support",
      desc: "24/7 customer support for all queries",
    },
  ];

  return (
    <div className="bg-gray-50 py-20 px-4 sm:px-10 lg:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
        {policies.map((policy, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
          >
            <img src={policy.icon} alt="" className="w-14 h-14 m-auto mb-4" />
            <h3 className="font-semibold text-gray-800 text-lg mb-2">
              {policy.title}
            </h3>
            <p className="text-gray-500 text-sm">{policy.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPolicy;
