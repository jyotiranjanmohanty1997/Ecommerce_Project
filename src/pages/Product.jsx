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
      <div className="h-[60vh] flex items-center justify-center text-lg">
        Loading product...
      </div>
    );

  return (
    <div className="border-t px-4 sm:px-10 py-10">
      {/* ================= MAIN SECTION ================= */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* ---------- LEFT : IMAGES ---------- */}
        <div className="flex-1 flex flex-col lg:flex-row gap-4">
          <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible">
            {productData.image.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={productData.name}
                onClick={() => setSelectedImage(img)}
                className={`w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg cursor-pointer border transition
                  ${
                    selectedImage === img
                      ? "border-indigo-600 ring-2 ring-indigo-300"
                      : "border-gray-300 hover:border-indigo-400"
                  }`}
              />
            ))}
          </div>

          <div className="flex-1 flex items-center justify-center bg-gray-50 rounded-2xl p-4">
            <img
              src={selectedImage}
              alt={productData.name}
              className="w-full max-h-[420px] object-contain rounded-xl transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* ---------- RIGHT : PRODUCT DETAILS ---------- */}
        <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-5 lg:sticky lg:top-24">
          <h1 className="text-3xl font-semibold">{productData.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <img
                key={i}
                src={assets.star_icon}
                alt="star"
                className="w-5 h-5"
              />
            ))}
            <span className="text-gray-500 text-sm">(3,20,345 reviews)</span>
          </div>

          <div>
            <p className="text-3xl font-bold text-indigo-600">
              {currency}
              {productData.price}
            </p>
            <p className="text-sm text-gray-500 line-through">
              {currency}
              {productData.price + 500}
            </p>
            <span className="inline-block mt-1 text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
              20% OFF
            </span>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">
            {productData.description}
          </p>

          <div>
            <p className="font-medium mb-2">Select Size</p>
            <div className="flex flex-wrap gap-2">
              {productData.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-4 py-2 rounded-md border font-semibold transition
                    ${
                      size === s
                        ? "bg-indigo-600 text-white border-indigo-600"
                        : "border-gray-300 hover:border-indigo-500"
                    }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {productData.colors && (
            <div>
              <p className="font-medium mb-2">Select Color</p>
              <div className="flex gap-3">
                {productData.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    style={{ backgroundColor: color }}
                    className={`w-9 h-9 rounded-full border-2 transition
                      ${
                        selectedColor === color
                          ? "border-black scale-110"
                          : "border-gray-300"
                      }`}
                  />
                ))}
              </div>
            </div>
          )}

          <button
            disabled={!size}
            onClick={() => {
              addToCart(productData._id, size);
              navigate("/cart");
            }}
            className="w-full bg-indigo-600 text-white py-3 rounded-xl text-lg font-semibold
              hover:bg-indigo-700 transition cursor-pointer
              disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Add to Cart
          </button>

          <div className="grid grid-cols-2 gap-3 text-sm text-gray-600 mt-4">
            <p>🚚 Free Delivery</p>
            <p>🔄 7 Days Return</p>
            <p>💳 Secure Payment</p>
            <p>⭐ Top Rated Seller</p>
          </div>
        </div>
      </div>

      {/* ================= RELATED PRODUCTS ================= */}
      <div className="mt-16">
        <RelatedProduct />
      </div>
    </div>
  );
};

export default Product;
