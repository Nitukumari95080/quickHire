import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { assets, JobCategories, JobLocations } from "../../assets/assets";
import JobCard from "./JobCard";

const JobListing = () => {
  const { isSearched, searchFilter, setSearchFilter, jobs } = useContext(AppContext);
  const [showFilter, setShowFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  // Handle category selection
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  // Handle location selection
  const handleLocationChange = (location) => {
    setSelectedLocation((prev) =>
      prev.includes(location)
        ? prev.filter((loc) => loc !== location)
        : [...prev, location]
    );
  };

  // Filter jobs based on selected categories and locations
  useEffect(() => {
    const matchCategory = (job) =>
      selectedCategories.length === 0 || selectedCategories.includes(job.category);

    const matchLocation = (job) =>
      selectedLocation.length === 0 || selectedLocation.includes(job.location);

    const matchTitle = (job) =>
      searchFilter.title === "" || job.title.toLowerCase().includes(searchFilter.title.toLowerCase());

    const matchSearchLocation = (job) =>
      searchFilter.location === "" || job.location.toLowerCase().includes(searchFilter.location.toLowerCase());

    const newFilteredJobs = jobs.filter(
      (job) =>
        matchCategory(job) &&
        matchLocation(job) &&
        matchTitle(job) &&
        matchSearchLocation(job)
    );

    setFilteredJobs(newFilteredJobs);
    setCurrentPage(1); // Reset to first page after filtering
  }, [selectedCategories, selectedLocation, searchFilter, jobs]);

  // Pagination logic
  const paginatedJobs = filteredJobs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);

  return (
    <div className="container 2xl:px-20 mx-auto gap-8 flex flex-col lg:flex-row max-lg:space-y-8 py-6 bg-slate-200 p-4 mt-8">
      {/* Sidebar */}
      <div className="lg:w-1/4 bg-slate-100 w-full p-4 rounded-md shadow-md h-auto">
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
          <ul className="space-y-2 text-gray-600">
            {JobCategories.map((category, index) => (
              <li className="flex gap-3 items-center" key={index}>
                <input
                  className="scale-125"
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                />
                <span className="text-sm lg:text-base">{category}</span>
              </li>
            ))}
          </ul>
          <h4 className="font-medium text-lg py-4 pt-14">Search By Location</h4>
          <ul className="space-y-2 text-gray-600">
            {JobLocations.map((location, index) => (
              <li className="flex gap-3 items-center" key={index}>
                <input
                  className="scale-125"
                  type="checkbox"
                  checked={selectedLocation.includes(location)}
                  onChange={() => handleLocationChange(location)}
                />
                <span className="text-sm lg:text-base">{location}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Job Listing */}
      <section className="w-full lg:w-3/4 text-gray-800 max-lg:px-4">
        <h1 className="font-extrabold text-3xl py-2 font-bold" id="job-list">
          Latest Jobs
        </h1>
        <p className="mb-8">Get your desired job from top companies</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {paginatedJobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>

        {/* Pagination */}
        {filteredJobs.length > 0 && (
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
                    ? "bg-slate-800 text-white"
                    : "bg-white text-slate-800 hover:bg-blue-100"
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
