import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { assets, JobCategories, JobLocations } from "../../assets/assets";
import JobCard from "./JobCard";

const JobListing = () => {
  const { isSearched, searchFilter, setSearchFilter, jobs } = useContext(AppContext);
  const [showFilter, setShowFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Pagination logic
  const paginatedJobs = jobs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const totalPages = Math.ceil(jobs.length / itemsPerPage);

  return (
    <div className="container 2xl:px-20 mx-auto gap-8 flex flex-col lg:flex-row max-lg:space-y-8 py-8 bg-[#F7F7F7] p-4">
      {/* Sidebar */}
      <div className="lg:w-1/4 bg-gray-100 w-full p-4 rounded-md shadow-md h-auto">
        {/* Filters Section */}
        {isSearched && (searchFilter.title || searchFilter.location) && (
          <>
            <h2 className="text-xl font-semibold mb-4">Current Search</h2>
            <div className="mb-4 text-gray-600">
              {searchFilter.title && (
                <span className="inline-flex items-center gap-2.5 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded">
                  {searchFilter.title}
                  <img
                    onClick={() =>
                      setSearchFilter((prev) => ({ ...prev, title: "" }))
                    }
                    className="cursor-pointer"
                    src={assets.cross_icon}
                    alt="Clear title filter"
                  />
                </span>
              )}
              {searchFilter.location && (
                <span className="ml-2 inline-flex items-center gap-2.5 bg-red-50 border border-red-200 px-4 py-1.5 rounded">
                  {searchFilter.location}
                  <img
                    onClick={() =>
                      setSearchFilter((prev) => ({ ...prev, location: "" }))
                    }
                    className="cursor-pointer"
                    src={assets.cross_icon}
                    alt="Clear location filter"
                  />
                </span>
              )}
            </div>
          </>
        )}

        <button
          onClick={() => setShowFilter((prev) => !prev)}
          className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          {showFilter ? "Close Filters" : "Show Filters"}
        </button>

        {/* Filters */}
        <div className={showFilter ? "" : "max-lg:hidden"}>
          <h4 className="font-medium text-lg py-4">Search By Categories</h4>
          <ul className="space-y-4 text-gray-600">
            {JobCategories.map((category, index) => (
              <li className="flex gap-3 items-center" key={index}>
                <input className="scale-125" type="checkbox" />
                <span className="text-sm lg:text-base">{category}</span>
              </li>
            ))}
          </ul>
          <h4 className="font-medium text-lg py-4 pt-14">Search By Location</h4>
          <ul className="space-y-4 text-gray-600">
            {JobLocations.map((location, index) => (
              <li className="flex gap-3 items-center" key={index}>
                <input className="scale-125" type="checkbox" />
                <span className="text-sm lg:text-base">{location}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Job Listing */}
      <section className="w-full lg:w-3/4 text-gray-800 max-lg:px-4">
        <h3 className="font-medium text-3xl py-2" id="job-list">
          Latest Jobs
        </h3>
        <p className="mb-8">Get your desired job from top companies</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {paginatedJobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>

        {/* Pagination */}
        {jobs.length > 0 && (
          <div className="flex items-center justify-center space-x-2 mt-6">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 border border-gray-300 rounded disabled:opacity-50"
            >
              <img src={assets.left_arrow_icon} alt="Previous" />
            </button>
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 border rounded ${
                  currentPage === index + 1
                    ? "bg-yellow-900 text-white"
                    : "bg-white text-gray-600 hover:bg-blue-100"
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="p-2 border border-gray-300 rounded disabled:opacity-50"
            >
              <img src={assets.right_arrow_icon} alt="Next" />
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default JobListing;
