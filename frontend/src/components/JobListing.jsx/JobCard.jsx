import React from 'react';
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const JobCard = ({ job }) => {
  const navigate = useNavigate();

  return (
    <div className="border border-gray-200 p-4 shadow-md rounded-lg bg-slate-100 hover:shadow-lg transition-shadow duration-300">
      {/* Company Icon */}
      <div className="flex justify-between items-center mb-4">
        <img
          src={assets.company_icon}
          alt={`${job.company} Logo`}
          className="w-12 h-12 object-contain"
        />
      </div>

      {/* Job Title */}
      <h4 className="font-semibold text-lg text-gray-800">{job.title}</h4>

      {/* Location and Level */}
      <div className="flex flex-wrap items-center gap-2 mt-2 text-sm">
        <span className="bg-blue-50 text-blue-600 border border-blue-200 px-3 py-1 rounded">
          {job.location}
        </span>
        <span className="bg-red-50 text-red-600 border border-red-200 px-3 py-1 rounded">
          {job.level}
        </span>
      </div>

      {/* Job Description */}
      <p
        className="text-gray-600 text-sm mt-3"
        dangerouslySetInnerHTML={{ __html: job.description.slice(0, 150) }}
      ></p>

      {/* Action Buttons */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => {
            navigate(`/apply-job/${job._id}`);
            window.scrollTo(0, 0);
          }}
          className="bg-[#e49f0c] text-black text-sm px-4 py-2 rounded-lg hover:bg-[#cfaa5b] transition-colors"
        >
          Apply Now
        </button>
        <button
          onClick={() => {
            navigate(`/apply-job/${job._id}`);
            window.scrollTo(0, 0);
          }}
          className="text-black text-sm px-4 py-2 border border-yellow-500 rounded-lg transition-colors"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default JobCard;
