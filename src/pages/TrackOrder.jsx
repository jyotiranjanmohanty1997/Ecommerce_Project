import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const TrackOrder = () => {
  const { orders, currency } = useContext(ShopContext);

  if (orders.length === 0)
    return (
      <div className="border-t pt-16 px-4 sm:px-10 lg:px-20">
        <div className="text-2xl mb-8">
          <Title text1={"Track"} text2={"Orders"} />
        </div>
        <p className="text-gray-500 text-center mt-20 text-lg">
          You have no orders to track.
        </p>
      </div>
    );

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
        <Title text1={"Track"} text2={"Orders"} />
      </div>

      {orders.map((order, idx) => (
        <div
          key={idx}
          className="bg-white shadow-md rounded-lg p-6 mb-10 border"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
            <img
              src={order.image[0]}
              alt={order.name}
              className="w-28 h-28 object-cover rounded"
            />
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-lg">{order.name}</p>
              <p>
                Price: {currency}
                {order.price}
              </p>
              <p>Quantity: {order.quantity}</p>
              <p>Size: {order.size}</p>
              <p className="text-gray-400 text-sm">Ordered on: {order.date}</p>
              <p className="text-gray-500 text-sm mt-1">
                Expected Delivery: 3-5 Business Days
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute top-2 left-5 sm:left-7 h-full w-1 bg-gray-300"></div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              {steps.map((step, i) => {
                const completed = i <= 2;
                return (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-2 sm:w-1/5 relative"
                  >
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center z-10
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
                      className={`text-xs sm:text-sm text-center ${
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

          <div className="mt-6 text-gray-600 text-sm">
            <p>Courier: FastExpress</p>
            <p>Tracking ID: FX123456789</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrackOrder;

// Order.jsx page
// import React, { useContext } from "react";
// import { ShopContext } from "../context/ShopContext";
// import Title from "../components/Title";

// const TrackOrder = () => {
//   const { orders, currency } = useContext(ShopContext);

//   if (orders.length === 0)
//     return (
//       <div className="border-t pt-16 px-4 sm:px-10 lg:px-20">
//         <div className="text-2xl mb-8">
//           <Title text1={"Track"} text2={"Orders"} />
//         </div>
//         <p className="text-gray-500 text-center mt-20 text-lg">
//           You have no orders to track.
//         </p>
//       </div>
//     );

//   const steps = [
//     "Order Placed",
//     "Packed",
//     "Shipped",
//     "Out for Delivery",
//     "Delivered",
//   ];

//   return (
//     <div className="border-t pt-16 px-4 sm:px-10 lg:px-20 pb-10">
//       <div className="text-2xl mb-8">
//         <Title text1={"Track"} text2={"Orders"} />
//       </div>

//       {orders.map((order, idx) => (
//         <div
//           key={idx}
//           className="bg-white shadow-md rounded-lg p-6 mb-10 border"
//         >
//           <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
//             <img
//               src={order.image[0]}
//               alt={order.name}
//               className="w-28 h-28 object-cover rounded"
//             />
//             <div className="flex flex-col gap-1">
//               <p className="font-semibold text-lg">{order.name}</p>
//               <p>
//                 Price: {currency}
//                 {order.price}
//               </p>
//               <p>Quantity: {order.quantity}</p>
//               <p>Size: {order.size}</p>
//               <p className="text-gray-400 text-sm">Ordered on: {order.date}</p>
//               <p className="text-gray-500 text-sm mt-1">
//                 Expected Delivery: 3-5 Business Days
//               </p>
//             </div>
//           </div>

//           <div className="flex flex-col sm:flex-row justify-between items-center gap-6 relative mt-6">
//             {steps.map((step, i) => {
//               const completed = i <= 2;
//               return (
//                 <div
//                   key={i}
//                   className="flex flex-col items-center relative sm:w-1/5"
//                 >
//                   <div
//                     className={`w-6 h-6 rounded-full border-2 flex items-center justify-center z-10
//                       ${
//                         completed
//                           ? "bg-green-600 border-green-600"
//                           : "bg-white border-gray-400"
//                       }`}
//                   >
//                     {completed && (
//                       <span className="w-3 h-3 bg-white rounded-full"></span>
//                     )}
//                   </div>

//                   <p
//                     className={`text-xs sm:text-sm text-center mt-2 ${
//                       completed ? "text-green-600" : "text-gray-400"
//                     }`}
//                   >
//                     {step}
//                   </p>

//                   {i !== steps.length - 1 && (
//                     <div className="absolute top-2.5 left-1/2 sm:top-3 sm:left-full w-16 h-1 bg-gray-300 z-0">
//                       {completed && (
//                         <div className="w-full h-1 bg-green-600"></div>
//                       )}
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>

//           <div className="mt-6 text-gray-600 text-sm">
//             <p>Courier: FastExpress</p>
//             <p>Tracking ID: FX123456789</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TrackOrder;
