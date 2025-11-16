import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FiPhone, FiMail, FiClock, FiMapPin } from "react-icons/fi";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-3xl pt-10 border-t font-semibold tracking-wide">
        <Title text1={"Contact "} text2={"Us"} />
      </div>

      <div className=" my-14 flex flex-col md:flex-row items-center gap-14 mb-28 px-6">
        <div className="w-full md:max-w-[480px] mx-auto ">
          <img
            src={assets.contact_img}
            alt="Contact"
            className="rounded-xl shadow-lg w-full"
          />
        </div>

        <div className="mx-auto flex flex-col justify-center items-start gap-6 bg-white p-8 rounded-xl shadow-md w-full md:w-[420px]">
          <h2 className="text-2xl font-bold text-gray-800">Our Store</h2>

          <div className="flex items-start gap-3">
            <FiMapPin className="text-red-500 mt-1 text-lg" />
            <p className="text-gray-700 leading-relaxed">
              Plot No. 24, Shopping Mart Complex, Main Road,
              <br /> Bhubaneswar, Odisha – 751001, India
            </p>
          </div>

          <div className="flex items-center gap-3">
            <FiPhone className="text-green-600 text-lg" />
            <p className="text-gray-700">+91-7008976876</p>
          </div>

          <div className="flex items-center gap-3">
            <FiMail className="text-blue-600 text-lg" />
            <p className="text-gray-700">ShoppingMart@info.com</p>
          </div>

          <div className="flex items-center gap-3">
            <FiClock className="text-orange-500 text-lg" />
            <p className="text-gray-700">Mon - Sat: 9:00 AM - 8:00 PM</p>
          </div>

          <div>
            <p className="font-semibold text-gray-800 mb-2">Follow Us</p>
            <div className="flex gap-4 text-lg">
              <FaInstagram className="text-pink-600 cursor-pointer hover:scale-110 transition" />
              <FaFacebookF className="text-blue-600 cursor-pointer hover:scale-110 transition" />
              <FaTwitter className="text-sky-500 cursor-pointer hover:scale-110 transition" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
