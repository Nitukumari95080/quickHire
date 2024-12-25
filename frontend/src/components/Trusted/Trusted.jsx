import React from 'react';
import { assets } from "../../assets/assets";

const Trusted = () => {
  return (
    <div className="container 2xl:px-20 mx-auto my-10">
      <div className="text-black p-8 mx-2 text-center">
        <h1 className="text-4xl font-bold text-center mb-6">Trusted by</h1>
        <marquee behavior="scroll" direction="left" scrollamount="10">
          <div className="flex gap-10 items-center">
            <img className="h-6" src={assets.accenture_logo} alt="Accenture Logo" />
            <img className="h-6" src={assets.microsoft_logo} alt="Microsoft Logo" />
            <img className="h-6" src={assets.walmart_logo} alt="Walmart Logo" />
            <img className="h-6" src={assets.adobe_logo} alt="Adobe Logo" />
            <img className="h-6" src={assets.amazon_logo} alt="Amazon Logo" />
            <img className="h-6" src={assets.samsung_logo} alt="Samsung Logo" />
            {/* Duplicate images for continuous effect */}
            <img className="h-6" src={assets.accenture_logo} alt="Accenture Logo" />
            <img className="h-6" src={assets.microsoft_logo} alt="Microsoft Logo" />
            <img className="h-6" src={assets.walmart_logo} alt="Walmart Logo" />
            <img className="h-6" src={assets.adobe_logo} alt="Adobe Logo" />
            <img className="h-6" src={assets.amazon_logo} alt="Amazon Logo" />
            <img className="h-6" src={assets.samsung_logo} alt="Samsung Logo" />
          </div>
        </marquee>
      </div>
    </div>
  );
};

export default Trusted;
