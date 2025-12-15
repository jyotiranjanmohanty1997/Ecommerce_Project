import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const { orders, currency } = useContext(ShopContext);
  const navigate = useNavigate();

  if (!orders || orders.length === 0) {
    return (
      <div className="p-10 text-center text-gray-600 text-xl">
        No Orders Found
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-8 mt-5">
      <h2 className="text-2xl font-semibold mb-6">My Orders</h2>

      <div className="space-y-6">
        {orders.map((order, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-5 border">
            {/* ORDER HEADER */}
            <div className="flex flex-col sm:flex-row justify-between gap-3">
              <div>
                <p className="text-sm text-gray-500">Order Date</p>
                <p className="font-medium">{order.orderDate}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Payment</p>
                <p
                  className={`font-medium ${
                    order.isPaid ? "text-green-600" : "text-orange-500"
                  }`}
                >
                  {order.paymentType} ({order.isPaid ? "Paid" : "Pending"})
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Order Total</p>
                <p className="font-semibold">
                  {currency} {order.amount}
                </p>
              </div>
            </div>

            <hr className="my-4" />

            <div className="space-y-4">
              {order.items.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 items-center border rounded-lg p-3"
                >
                  <img
                    src={item.product.image[0]}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-md border"
                  />

                  <div className="flex-1">
                    <p className="font-medium text-lg">{item.product.name}</p>

                    <p className="text-sm text-gray-500">
                      Size: {item.size} • Qty: {item.quantity}
                    </p>

                    <p className="mt-1 font-semibold">
                      {currency} {item.product.price} × {item.quantity}
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      navigate("/trackorder", { state: { order } })
                    }
                    className="text-sm bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 cursor-pointer"
                  >
                    Track-Order
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-5 text-sm text-gray-600">
              <p className="font-medium text-gray-800 mb-1">Delivery Address</p>
              <p>
                {order.address.firstName} {order.address.lastName}
              </p>
              <p>
                {order.address.street}, {order.address.city},{" "}
                {order.address.state}
              </p>
              <p>
                {order.address.zipcode}, {order.address.country}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
