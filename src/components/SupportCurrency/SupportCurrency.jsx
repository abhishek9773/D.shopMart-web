import React from "react";
import CurrencyData from "../../data/CurrentcyData";
import CurrencyCard from "./CurrencyCard";

const SupportCurrency = () => {
  return (
    <div className="container pt-16 pb-16 ">
      <hr />
      <p className="font-bold text-3xl pb-5">
        <spen className="text-red-500">Payment </spen>Our Website
        <spen className="text-green-500"> Support </spen>
      </p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1">
        {CurrencyData.map((items) => (
          <CurrencyCard
            title={items.title}
            icon={items.icon}
            description={items.description}
          />
        ))}
      </div>
    </div>
  );
};

export default SupportCurrency;
