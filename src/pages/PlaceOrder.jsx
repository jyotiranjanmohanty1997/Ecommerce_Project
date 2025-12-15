import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const [method, setMethod] = useState("COD");
  const { placeOrder } = useContext(ShopContext);
  const [loading, setLoading] = useState(false);

  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const validate = () => {
    for (let key in address) {
      if (!address[key]) {
        toast.error("Please fill all delivery details");
        return false;
      }
    }
    if (address.phone.length < 10) {
      toast.error("Enter valid phone number");
      return false;
    }
    return true;
  };

  const handlePlaceOrder = () => {
    if (!validate()) return;

    setLoading(true);
    placeOrder(address, method);
    setLoading(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen px-4 sm:px-10 lg:px-20 py-12 mt-5">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* ================= LEFT ================= */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6 sm:p-8">
          <Title text1="Delivery" text2="Details" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <input
              name="firstName"
              onChange={handleChange}
              placeholder="First Name"
              className="checkout-input"
            />
            <input
              name="lastName"
              onChange={handleChange}
              placeholder="Last Name"
              className="checkout-input"
            />

            <input
              name="email"
              onChange={handleChange}
              placeholder="Email Address"
              className="checkout-input sm:col-span-2"
            />

            <input
              name="street"
              onChange={handleChange}
              placeholder="Street Address"
              className="checkout-input sm:col-span-2"
            />

            <input
              name="city"
              onChange={handleChange}
              placeholder="City"
              className="checkout-input"
            />
            <input
              name="state"
              onChange={handleChange}
              placeholder="State"
              className="checkout-input"
            />

            <input
              name="zipcode"
              onChange={handleChange}
              placeholder="Zip Code"
              className="checkout-input"
            />
            <input
              name="country"
              onChange={handleChange}
              placeholder="Country"
              className="checkout-input"
            />

            <input
              name="phone"
              onChange={handleChange}
              placeholder="Phone Number"
              className="checkout-input sm:col-span-2"
            />
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="space-y-8">
          <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
            <CartTotal />
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6">
            <Title text1="Payment" text2="Method" />

            <div className="flex flex-col gap-4 mt-6">
              {["Stripe", "Razorpay", "COD"].map((type) => (
                <button
                  key={type}
                  onClick={() => setMethod(type)}
                  className={`flex items-center justify-between border rounded-xl px-5 py-4 transition
                  ${
                    method === type
                      ? "border-indigo-600 bg-indigo-50"
                      : "border-gray-200 hover:border-indigo-400"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-4 h-4 rounded-full border flex items-center justify-center
                      ${
                        method === type
                          ? "border-indigo-600"
                          : "border-gray-400"
                      }`}
                    >
                      {method === type && (
                        <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                      )}
                    </span>
                    <span className="font-medium">{type}</span>
                  </div>

                  {type === "COD" && (
                    <span className="text-xs text-green-600 font-medium cursor-pointer">
                      Pay on Delivery
                    </span>
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={handlePlaceOrder}
              disabled={loading}
              className={`w-full mt-6 py-3 rounded-xl text-white text-lg font-semibold transition
              ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700"
              }`}
            >
              {loading ? "Placing Order..." : "Place Order"}
            </button>

            <p className="text-xs text-gray-500 text-center mt-3">
              🔒 Secure payment & encrypted checkout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
