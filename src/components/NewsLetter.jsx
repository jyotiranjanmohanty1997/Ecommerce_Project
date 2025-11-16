import React, { useState } from "react";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setMessage(`Thank you for subscribing, ${email}!`);
    setEmail("");
  };

  return (
    <div className="bg-gradient-to-r from-cyan-100 to-blue-100 py-20 px-4 sm:px-10 lg:px-20 rounded-lg my-20">
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Subscribe & Get 20% Off
        </h2>
        <p className="text-gray-600 text-base sm:text-lg">
          Join our newsletter to receive the latest updates, products, and
          special offers!
        </p>

        <form
          onSubmit={onSubmitHandler}
          className="flex items-center gap-0 mt-6 bg-white rounded-full shadow-md overflow-hidden max-w-xl w-full mx-auto border"
        >
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 outline-none text-gray-700 text-sm min-w-0"
            required
          />

          <button
            type="submit"
            className="bg-black text-white cursor-pointer px-5 py-3 text-sm font-medium hover:bg-gray-800 transition duration-300 whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>

        {message && (
          <p className="text-green-600 mt-4 font-medium text-sm sm:text-base">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default NewsLetter;
