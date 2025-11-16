import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

const Hero = () => {
    const { navigate } = useContext(ShopContext);
  
  return (
    <div className="flex flex-col-reverse sm:flex-row items-center bg-gray-50 overflow-hidden">
      {/* Text Section */}
      <div className="w-full sm:w-1/2 flex flex-col justify-center px-6 sm:px-12 py-10 sm:py-20">
        <div className="text-gray-800 space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-12 h-1 bg-gray-800"></div>
            <p className="font-medium text-sm sm:text-base uppercase tracking-wider">
              Our BestSellers
            </p>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Latest Arrivals{" "}
            <span className="bg-cyan-300 px-3 py-1 rounded-md text-gray-900">
              50% Off
            </span>
          </h1>
          <p className="text-gray-600 sm:text-lg mt-3">
            Shop our top-rated products and enjoy limited-time offers!
          </p>
          <div className="flex items-center gap-4 mt-6">
            <button onClick={()=>navigate("/collection")} className="bg-black text-white cursor-pointer px-6 py-3 rounded-md text-sm sm:text-base hover:bg-gray-800 transition">
              Shop Now
            </button>
            <span className="bg-red-200 px-2 py-1 rounded text-xs sm:text-sm">
              Limited Offer
            </span>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full sm:w-1/2">
        <img
          src={assets.hero1_img}
          alt="banner_img"
          className="w-full h-full object-cover rounded-t-lg sm:rounded-none"
        />
      </div>
    </div>
  );
};

export default Hero;
