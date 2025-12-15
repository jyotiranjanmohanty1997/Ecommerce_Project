import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductsItems from "../components/ProductsItems";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();
    const query = String(search ?? "").toLowerCase();

    if (showSearch && query) {
      productsCopy = productsCopy.filter((item) =>
        item?.name?.toLowerCase().includes(query)
      );
    }
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setFilterProducts(productsCopy);
    setCurrentPage(1);
  };

  const sortProduct = () => {
    let filterCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(filterCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(filterCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filterProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filterProducts.length / productsPerPage);

  return (
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 pt-10 px-4 sm:px-10 border-t">
      <div className="min-w-[200px]">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center justify-between cursor-pointer font-semibold sm:hidden"
        >
          Filters
          <img
            className={`h-4 transition-transform ${
              showFilter ? "rotate-90" : ""
            }`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>

        <div
          className={`bg-white shadow-md rounded-lg p-5 mt-5 sm:block ${
            showFilter ? "" : "hidden"
          }`}
        >
          <p className="mb-3 text-lg font-semibold border-b pb-2">Category</p>
          <div className="flex flex-col gap-3 mt-2 text-gray-700">
            {["Men", "Women", "Kids"].map((cat) => (
              <label
                key={cat}
                className="flex items-center gap-2 cursor-pointer hover:text-indigo-500 transition"
              >
                <input
                  type="checkbox"
                  value={cat}
                  onChange={toggleCategory}
                  className="w-4 h-4 accent-indigo-500"
                />
                {cat}
              </label>
            ))}
          </div>
        </div>

        <div
          className={`bg-white shadow-md rounded-lg p-5 mt-5 sm:block ${
            showFilter ? "" : "hidden"
          }`}
        >
          <p className="mb-3 text-lg font-semibold border-b pb-2">
            Sub-Category
          </p>
          <div className="flex flex-col gap-3 mt-2 text-gray-700">
            {["Topwear", "Bottomwear", "Winterwear"].map((sub) => (
              <label
                key={sub}
                className="flex items-center gap-2 cursor-pointer hover:text-indigo-500 transition"
              >
                <input
                  type="checkbox"
                  value={sub}
                  onChange={toggleSubCategory}
                  className="w-4 h-4 accent-indigo-500"
                />
                {sub}
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <Title text1={"All"} text2={" Collection"} />
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm shadow-sm hover:shadow-md transition"
          >
            <option value="Relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {currentProducts.map((items, index) => (
            <div
              key={index}
              className="bg-white shadow-sm rounded-lg overflow-hidden hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <ProductsItems
                name={items.name}
                id={items._id}
                price={items.price}
                image={items.image}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded-md border ${
                currentPage === i + 1
                  ? "bg-indigo-500 text-white"
                  : "bg-white text-gray-700 hover:bg-indigo-100"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
