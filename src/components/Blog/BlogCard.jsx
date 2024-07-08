import React from "react";
import { AiFillLike } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

const BlogCard = ({ date, img, title, comment, like }) => {
  return (
    <div>
      <div className="space-y-4">
        <img
          className="rounded-lg hover:scale-105 transition-transform "
          src={img}
          alt="Post"
        />
        <div className=" font-medium text-sm flex gap-3 items-center text-gray-400/80">
          <div className="flex gap-1 items-center">
            <MdDateRange />
            <p>{date}</p>
          </div>
          <div className="flex gap-1 items-center">
            <FaRegComments />

            <spen>{comment}</spen>
          </div>
          <div className="flex gap-1 itmes-center">
            <AiFillLike />
            <p>{like}</p>
          </div>
        </div>
        <div className="font-bold text-xl">{title}</div>
      </div>
    </div>
  );
};

export default BlogCard;
