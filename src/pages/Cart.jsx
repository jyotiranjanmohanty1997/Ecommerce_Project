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
        if (cartItems[pid][size] > 0)
          temp.push({ _id: pid, size, quantity: cartItems[pid][size] });
      }
    }
    setCartData(temp);
  }, [cartItems]);

  return (
    <div className="border-t pt-14 px-4 sm:px-10 lg:px-20">
      <div className="text-2xl mb-6">
        <Title text1={"Your"} text2={"Cart"} />
      </div>

      {cartData.length === 0 ? (
        <p className="text-gray-500 text-center mt-20 text-lg">
          Your cart is empty.
        </p>
      ) : (
        <div className="flex flex-col gap-6">
          {cartData.map((item, idx) => {
            const product = products.find((p) => p._id === item._id);
            return (
              <div
                key={idx}
                className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={product.image[0]}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <p className="font-semibold">{product.name}</p>
                    <p>
                      Price: {currency}
                      {product.price}
                    </p>
                    <p>Size: {item.size}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(
                        item._id,
                        item.size,
                        Number(e.target.value)
                      )
                    }
                    className="border w-16 text-center rounded"
                  />
                  <img
                    src={assets.bin_icon}
                    alt="delete"
                    className="w-5 h-5 cursor-pointer"
                    onClick={() => updateQuantity(item._id, item.size, 0)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}

      {cartData.length > 0 && (
        <div className="flex justify-end mt-10">
          <div className="w-full sm:w-[400px] flex flex-col gap-4">
            <CartTotal />
            <button
              onClick={() => navigate("/placeorder")}
              className="bg-black text-white px-6 py-3 rounded mt-4 cursor-pointer"
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
