import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const TrackOrder = () => {
  const { orders, currency } = useContext(ShopContext);

  if (orders.length === 0) {
    return (
      <div className="border-t pt-16 px-4">
        <Title text1="Track" text2=" Orders" />
        <p className="text-gray-500 text-center mt-20 text-lg">
          You have no orders to track.
        </p>
      </div>
    );
  }

  const steps = [
    "Order Placed",
    "Packed",
    "Shipped",
    "Out for Delivery",
    "Delivered",
  ];

  return (
    <div className="border-t pt-16 px-4 sm:px-10 lg:px-20 pb-10">
      <div className="text-2xl mb-8">
        <Title text1="Track" text2=" Orders" />
      </div>

      {orders.map((order, orderIndex) => (
        <div
          key={orderIndex}
          className="bg-white shadow-sm rounded-lg border mb-10 p-4 sm:p-6"
        >
          {/* ================= PRODUCTS ================= */}
          {order.items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 pb-4 mb-4 border-b last:border-none"
            >
              <img
                src={item.product.image[0]}
                alt={item.product.name}
                loading="lazy"
                className="w-full max-h-64 object-contain rounded-md bg-gray-100 p-2 sm:w-28 sm:h-28 sm:object-cover sm:p-0"
              />

              <div className="flex flex-col gap-1 text-sm sm:text-base">
                <p className="font-semibold text-base sm:text-lg">
                  {item.product.name}
                </p>

                <p className="text-gray-600">
                  Price: {currency}
                  {item.product.price}
                </p>

                <p className="text-gray-600">Quantity: {item.quantity}</p>

                <p className="text-gray-600">Size: {item.size}</p>

                <p className="text-gray-400 text-xs sm:text-sm">
                  Ordered on: {order.orderDate}
                </p>

                <p className="text-gray-500 text-xs sm:text-sm">
                  Expected Delivery: 3–5 Business Days
                </p>
              </div>
            </div>
          ))}

          <div className="mt-6">
            <div className="flex flex-col gap-4 sm:hidden">
              {steps.map((step, i) => {
                const completed = i <= 2;
                return (
                  <div key={i} className="flex items-center gap-4">
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                      ${
                        completed
                          ? "bg-green-600 border-green-600"
                          : "border-gray-400"
                      }`}
                    >
                      {completed && (
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                      )}
                    </div>
                    <p
                      className={`text-sm ${
                        completed
                          ? "text-green-600 font-medium"
                          : "text-gray-400"
                      }`}
                    >
                      {step}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* DESKTOP : Horizontal */}
            <div className="hidden sm:flex justify-between items-center relative mt-8">
              <div className="absolute top-3 left-0 w-full h-1 bg-gray-300"></div>

              {steps.map((step, i) => {
                const completed = i <= 2;
                return (
                  <div key={i} className="flex flex-col items-center z-10">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center
                      ${
                        completed
                          ? "bg-green-600 border-green-600"
                          : "bg-white border-gray-400"
                      }`}
                    >
                      {completed && (
                        <span className="w-3 h-3 bg-white rounded-full"></span>
                      )}
                    </div>

                    <p
                      className={`text-sm mt-2 ${
                        completed ? "text-green-600" : "text-gray-400"
                      }`}
                    >
                      {step}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-6 text-xs sm:text-sm text-gray-600">
            <p>Courier: FastExpress</p>
            <p>Tracking ID: FX{orderIndex + 10023456}</p>
            <p>
              Payment:{" "}
              <span className="font-medium">
                {order.isPaid ? "Paid" : "Pending"}
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrackOrder;
