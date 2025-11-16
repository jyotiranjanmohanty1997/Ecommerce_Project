import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProduct from "../components/RelatedProduct";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart, navigate } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [size, setSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const quantity = 1;

  useEffect(() => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      setSelectedImage(product.image[0]);
      setSelectedColor(product.colors ? product.colors[0] : "");
    }
  }, [productId, products]);

  if (!productData)
    return (
      <div className="h-96 flex items-center justify-center">Loading...</div>
    );

  return (
    <div className="px-4 sm:px-10 py-10 border-t-2 transition-opacity duration-500">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1 flex flex-col lg:flex-row gap-4">
          <div className="flex lg:flex-col gap-4 overflow-x-auto">
            {productData.image.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={productData.name}
                onClick={() => setSelectedImage(img)}
                className={`cursor-pointer rounded-lg border-2 hover:border-indigo-500 transition 
                  ${
                    selectedImage === img
                      ? "border-indigo-500"
                      : "border-gray-200"
                  } 
                  w-28 h-28 object-cover`}
              />
            ))}
          </div>

          <div className="flex-1 flex justify-center items-center">
            <img
              src={selectedImage}
              alt={productData.name}
              className="rounded-xl shadow-lg w-full max-w-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-5 relative lg:sticky lg:top-20">
          <h1 className="text-3xl font-semibold">{productData.name}</h1>

          <div className="flex items-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <img
                key={i}
                src={assets.star_icon}
                alt="star"
                className="w-5 h-5"
              />
            ))}
            <span className="text-gray-500">(3,20,345 reviews)</span>
          </div>

          <p className="text-3xl font-bold text-indigo-600">
            {currency}
            {productData.price}
          </p>

          <p className="text-gray-600 text-sm md:text-base">
            {productData.description}
          </p>

          <div className="flex flex-col gap-2">
            <span className="font-medium">Select Size:</span>
            <div className="flex flex-wrap gap-3">
              {productData.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s === size ? "" : s)}
                  className={`px-4 py-2 rounded-md transition font-medium cursor-pointer
                    ${
                      size === s
                        ? "bg-indigo-500 text-white"
                        : "bg-white border border-gray-300 hover:border-indigo-500"
                    }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {productData.colors && (
            <div className="flex flex-col gap-2">
              <span className="font-medium">Select Color:</span>
              <div className="flex gap-3">
                {productData.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    style={{ backgroundColor: color }}
                    className={`w-8 h-8 rounded-full border-2 transition 
                      ${
                        selectedColor === color
                          ? "border-black"
                          : "border-gray-300"
                      }`}
                  ></button>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={() => {
              addToCart(productData._id, size, quantity, selectedColor);
              navigate("/cart");
            }}
            className="bg-indigo-600 hover:bg-indigo-700 text-white 
                       font-semibold py-2.5 px-5 rounded-lg 
                       shadow-sm hover:shadow-md transition cursor-pointer"
          >
            Add to Cart
          </button>

          <div className="text-gray-500 text-sm mt-5 space-y-1">
            <p>✅ 100% Original Products</p>
            <p>✅ Cash On Delivery Available</p>
            <p>✅ Easy Return Policy Within 7 Days</p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <RelatedProduct />
      </div>
    </div>
  );
};

export default Product;
