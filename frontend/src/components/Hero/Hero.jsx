import React, { useContext, useRef } from "react";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";

const Hero = () => {
  const { setSearchFilter, setIsSearched } = useContext(AppContext);

  const titleRef = useRef(null);
  const locationRef = useRef(null);

  const onSearch = () => {
    setSearchFilter({
      title: titleRef.current.value,
      location: locationRef.current.value,
    });
    setIsSearched(true);
    console.log({
      title: titleRef.current.value,
      location: locationRef.current.value,
    });
  };

  return (
    <div className="container 2xl:px-20 mx-auto my-8">
      {/* Hero Section */}
      <div
        className="text-white p-16 mx-2 rounded-xl text-center"
        style={{
          background: "linear-gradient(to right, #0f172a, #1e293b)",
          color: "#ffffff",
        }}
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
          Over 10,000+ jobs to apply
        </h2>
        <p className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
          Your Next Big Career Move Starts Right Here - Explore the Best Job
          Opportunities and Take the First Step Toward Your Future!
        </p>

        {/* Search Section */}
        <div className="mt-4 flex flex-col sm:flex-row justify-center items-center gap-4 p-4 rounded-md shadow-lg">
          {/* Job Search */}
          <div className="flex items-center w-full sm:w-auto bg-gray-100 rounded-md p-3">
            <img src={assets.search_icon} alt="Search Icon" className="w-5 h-5 mr-2" />
            <input
              type="text"
              placeholder="Search for jobs"
              className="text-sm p-2 rounded outline-none w-full text-black focus:text-blue-600"
              ref={titleRef}
            />
          </div>

          {/* Location Search */}
          <div className="flex items-center w-full sm:w-auto bg-gray-100 rounded-md p-3">
            <img src={assets.location_icon} alt="Location Icon" className="w-5 h-5 mr-2" />
            <input
              type="text"
              placeholder="Location"
              className="text-sm p-2 rounded outline-none w-full text-black focus:text-blue-600"
              ref={locationRef}
            />
          </div>

          {/* Search Button */}
          <button
            onClick={onSearch}
            className="bg-[#e49f0c] text-black text-sm py-2 px-6 rounded-md hover:bg-[#e0b863] w-full sm:w-auto"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
