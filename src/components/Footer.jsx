import React from "react";
import Logo from "../assets/logo11.jpg";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-900 pt-14 pb-6 px-6 md:px-14 mt-10">
      {/* Top Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-10">
        {/* Logo + Description */}
        <div className="col-span-1 sm:col-span-3 md:col-span-2">
          <img src={Logo} alt="logo" className="mb-5 w-36 rounded" />
          <p className="w-full md:w-2/3 leading-6 text-gray-400">
            Discover premium fashion, accessories, and lifestyle products. Your
            trusted online shopping platform delivering quality with a seamless
            experience.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center bg-gray-400 rounded-full
                         hover:bg-blue-800 transition duration-300"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center bg-gray-400 rounded-full
                         hover:bg-pink-600 transition duration-300"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center bg-gray-400 rounded-full
                         hover:bg-blue-500 transition duration-300"
            >
              <FaTwitter size={16} />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center bg-gray-400 rounded-full
                         hover:bg-red-700 transition duration-300"
            >
              <FaYoutube size={16} />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-lg font-semibold text-gray-600 mb-4">Company</p>
          <ul className="space-y-2">
            <li className="hover:text-black transition cursor-pointer">Home</li>
            <li className="hover:text-black transition cursor-pointer">
              About Us
            </li>
            <li className="hover:text-black transition cursor-pointer">
              Delivery
            </li>
            <li className="hover:text-black transition cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-lg font-semibold text-gray-600 mb-4">Get in Touch</p>
          <ul className="space-y-2">
            <li className="hover:text-black transition cursor-pointer">
              +91-7008976876
            </li>
            <li className="hover:text-black transition cursor-pointer">
              contactenquiry@gmail.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} — All Rights Reserved | Designed with ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
