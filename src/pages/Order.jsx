import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import boxIcon from "../assets/box.png";
import { Link } from "react-router-dom";

const Order = () => {
  const { orders } = useContext(ShopContext);

  if (orders.length === 0)
    return (
      <div className="p-10 text-center text-gray-600 text-xl">
        No orders found.
      </div>
    );

  return (
    <div className="md:p-10 p-4 space-y-4">
      <h2 className="text-lg font-medium">Orders List</h2>

      {orders.map((order, index) => (
        <div
          key={index}
          className="flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr_1fr] md:items-center gap-5 p-5 max-w-4xl rounded-md border border-gray-300 text-gray-800"
        >
          {/* PRODUCTS LIST */}
          <div className="flex gap-5">
            <img
              className="w-12 h-12 object-cover opacity-60"
              src={boxIcon}
              alt="boxIcon"
            />

            <div>
              {order.items.map((item, i) => (
                <p key={i} className="font-medium">
                  {item.product.name}
                  {item.quantity > 1 && (
                    <span className="text-indigo-500"> × {item.quantity}</span>
                  )}
                </p>
              ))}
            </div>
          </div>

          {/* ADDRESS */}
          <div className="text-sm">
            <p className="font-medium mb-1">
              {order.address.firstName} {order.address.lastName}
            </p>
            <p>
              {order.address.street}, {order.address.city},{" "}
              {order.address.state}, {order.address.zipcode},{" "}
              {order.address.country}
            </p>
          </div>

          {/* AMOUNT */}
          <p className="font-medium text-base my-auto text-black/70">
            ${order.amount}
          </p>

          {/* DETAILS */}
          <div className="flex flex-col text-sm">
            <p>Method: {order.paymentType}</p>
            <p>Date: {order.orderDate}</p>
            <p>Payment: {order.isPaid ? "Paid" : "Pending"}</p>
          </div>
          <Link
            to="/trackorder"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md text-center"
          >
            Track Order
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Order;
