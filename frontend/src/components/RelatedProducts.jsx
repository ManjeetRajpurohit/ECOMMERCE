import React, { useContext, useMemo } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import Title from "./Title.jsx";
import ProductItem from "./ProductItem.jsx";

export default function RelatedProducts({ category, subCategory, currentId }) {
  const { products } = useContext(ShopContext);

  const related = useMemo(() => {
    return products
      .filter(
        (item) =>
          item.category === category &&
          item.subCategory === subCategory &&
          item._id !== currentId
      )
      .slice(0, 5);
  }, [products, category, subCategory, currentId]);

  if (related.length === 0) return null;

  return (
    <section className="py-20">
      <div className="mb-10">
        <Title text1="Related" text2="Products" />
      </div>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {related.map((item) => (
          <ProductItem
            key={item._id}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
}