import React from 'react';
import { assets } from "../../assets/assets";

const Trusted = () => {
  return (
    <div className="container 2xl:px-20 mx-auto my-10 bg-slate-300">
      <div className=" text-black p-8 mx-2 rounded-xl text-center border border-gray-300">
        <h1 className="text-2xl font-bold text-center mb-6">Trusted by</h1>
        <div className="flex flex-wrap justify-center items-center gap-10">
          <img className="h-6" src={assets.accenture_logo} alt="Accenture Logo" />
          <img className="h-6" src={assets.microsoft_logo} alt="Microsoft Logo" />
          <img className="h-6" src={assets.walmart_logo} alt="Walmart Logo" />
          <img className="h-6" src={assets.adobe_logo} alt="Adobe Logo" />
          <img className="h-6" src={assets.amazon_logo} alt="Amazon Logo" />
          <img className="h-6" src={assets.samsung_logo} alt="Samsung Logo" />
        </div>
      </div>
    </div>
  );
};

export default Trusted;
