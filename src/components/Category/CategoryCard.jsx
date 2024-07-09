import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const CategoryCard = ({ img, name, count, discount }) => {
  return (
    <div>
      <div className="border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg">
        <div className="flex justify-between items-center p-6 py-3">
          <div className="space-y-4">
            <h3 className="font-medium text-xl">{name}</h3>
            <div>
              <div className="text-yellow-400 flex gap-1 text-[22px]">
                {[1, 1, 1, 1].map(() => (
                  <AiFillStar />
                ))}
                <AiOutlineStar />
              </div>
              <div className="flex gap-2">
                <p className="font-bold text-gray-400/50 text-sm">4.5 starts</p>
                <p className="underline text-sm cursor-pointer">816 reviews</p>
              </div>
              <div className="font-bold text-green-600">{discount}</div>
            </div>
            <p className="text-gray-500">{count}</p>
          </div>
          <img className="w-[100px] rounded-lg" src={img} alt={name} />
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
