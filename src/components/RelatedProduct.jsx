import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductsItems from "./ProductsItems";
import Title from "./Title";

const RelatedProduct = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();
      if (category) {
        productsCopy = productsCopy.filter(
          (item) => item.category === category
        );
      }

      if (subCategory) {
        productsCopy = productsCopy.filter(
          (item) => item.subCategory === subCategory
        );
      }

      setRelated(productsCopy.slice(0, 5));
    }
  }, [products, category, subCategory]);
  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1={"Related"} text2={" Products"} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.map((items, index) => (
          <ProductsItems
            key={index}
            id={items._id}
            name={items.name}
            price={items.price}
            image={items.image}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProduct;
