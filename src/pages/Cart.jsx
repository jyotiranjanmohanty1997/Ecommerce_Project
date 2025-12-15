import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const temp = [];
    for (const pid in cartItems) {
      for (const size in cartItems[pid]) {
        if (cartItems[pid][size] > 0) {
          temp.push({
            _id: pid,
            size,
            quantity: cartItems[pid][size],
          });
        }
      }
    }
    setCartData(temp);
  }, [cartItems]);

  return (
    <div className="border-t bg-gray-50 min-h-screen px-4 sm:px-10 lg:px-20 py-12">
      <div className="mb-10">
        <Title text1={"Your"} text2={"Cart"} />
      </div>

      {cartData.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[50vh] gap-4">
          <img
            src={assets.cart_icon}
            alt="empty cart"
            className="w-24 opacity-50"
          />
          <p className="text-gray-500 text-lg">Your cart is currently empty</p>
          <button
            onClick={() => navigate("/")}
            className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 flex flex-col gap-6">
            {cartData.map((item, idx) => {
              const product = products.find((p) => p._id === item._id);
              if (!product) return null;

              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition flex flex-col sm:flex-row gap-5"
                >
                  <img
                    src={product.image[0]}
                    alt={product.name}
                    className="w-full sm:w-28 h-28 object-contain bg-gray-100 rounded-xl"
                  />

                  <div className="flex-1 flex flex-col gap-1">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-gray-500 text-sm">
                      Size: <span className="font-medium">{item.size}</span>
                    </p>

                    <p className="text-indigo-600 font-bold mt-1">
                      {currency}
                      {product.price}
                    </p>

                    <p className="text-xs text-green-600 mt-1">✔ In Stock</p>
                  </div>

                  <div className="flex sm:flex-col items-center gap-4 justify-between">
                    <div className="flex items-center border rounded-lg overflow-hidden">
                      <button
                        onClick={() =>
                          updateQuantity(item._id, item.size, item.quantity - 1)
                        }
                        className="px-3 py-1 text-lg hover:bg-gray-100 cursor-pointer"
                      >
                        −
                      </button>

                      <span className="px-4 font-semibold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          updateQuantity(item._id, item.size, item.quantity + 1)
                        }
                        className="px-3 py-1 text-lg hover:bg-gray-100 cursor-pointer"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => updateQuantity(item._id, item.size, 0)}
                      className="text-red-500 hover:text-red-700 transition cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6 h-fit sticky top-28">
            <CartTotal />

            <button
              onClick={() => navigate("/placeorder")}
              className="w-full mt-6 bg-indigo-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition cursor-pointer"
            >
              Proceed to Checkout
            </button>
            <p className="text-xs text-gray-500 text-center mt-3">
              Secure checkout • Free delivery available
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
