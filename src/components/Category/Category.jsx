import React from "react";
import CategoryCard from "../CategoryCard";
import data from "./CategoryItem";

const Category = () => {
  return (
    <div className="container pt-16">
      <div className="grid sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4 gap-4">
        {data.map((item) => (
          <CategoryCard name={item.name} img={item.img} count={item.count} />
        ))}
      </div>
    </div>
  );
};

export default Category;
