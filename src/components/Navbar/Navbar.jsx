import React, { useState } from "react";
import { FaWallet } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { TbWalletOff } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className="container  hidden lg:block">
      <div className="flex justify-between items-center pt-8">
        <h1 className="font-bold text-3xl">
          <spen className="text-5xl text-red-500 ">D.</spen>shopMart
        </h1>
        <div className="relative w-full max-w-[500px]">
          <input
            className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full"
            text="text"
            placeholder="search Product .."
          />
          <IoIosSearch
            className="absolute top-0 right-0 mt-4 mr-5 text-gray-500 cursor-pointer "
            size={20}
          />
        </div>
        <div className=" flex items-center justify-between bg-slate-300 hover:bg-slate-400 py-2 rounded-full px-5 gap-2 cursor-pointer">
          <FaWallet className="cursor-pointer" />
          <button className="">Connect your wallet</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
