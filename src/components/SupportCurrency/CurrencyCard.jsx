import React from "react";

const CurrencyCard = ({ title, icon, description }) => {
  return (
    <div>
      <div className="flex justify-between items-center hover:scale-105  transition-transform cursor-pointer">
        <div className="bg-gray-300 w-[500px] text-accentDark text-[24px] grid place-items-center rounded">
          <div className="flex gap-3 items-center px-2 py-3">
            <img
              className="w-[46px] h-[46px] rounded-full object-cover "
              src={icon}
              alt=""
            />
            <div>
              <h3 className="text-accent font-medium text-xl">{title}</h3>
              <p className="text-gray-500 text-[14px]">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyCard;
