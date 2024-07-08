import React from "react";
import ProductCard from "./ProductCard";

const ProductArea = ({ ProductList }) => {
  return (
    <div>
      <div className="container pt-16">
        <div className="lg:flex justify-between items-center">
          <div>
            <h3 className="font-medium text-2xl"> Top Electronic </h3>
            <p className="text-gray-600 mt-2">
              Buy now only limited sell offter are there
            </p>
          </div>
          <div className="space-x-4 mt-8 lg:mt-0">
            <button className="feature_btn">Choose now </button>
            <button className="text-gray-600 hover:text-accent">
              Man dress
            </button>
            <button className="text-gray-600 hover:text-accent">
              Women dress
            </button>
            <button className="text-gray-600 hover:text-accent">TV</button>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {ProductList.map((items) => (
            <ProductCard
              img={items.img}
              name={items.name}
              price={items.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductArea;
