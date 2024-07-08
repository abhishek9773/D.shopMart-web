import React from "react";
import data from "../Category/CategoryItem";
import BlogCard from "./BlogCard";
import BlogData from "../../data/BlogData";

const Blog = () => {
  return (
    <div>
      <div className="container pt-16">
        <div className="font-bold text-2xl">
          <hr></hr>
          Know about Services <spen className="text-red-500 text-3xl"> & </spen>
          Upcoming Product
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
          {BlogData.map((items) => (
            <BlogCard
              img={items.img}
              title={items.title}
              date={items.date}
              comment={items.comment}
              like={items.like}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
