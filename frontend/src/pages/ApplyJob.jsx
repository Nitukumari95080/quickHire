import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import LodingJobs from "../components/JobListing.jsx/LodingJobs";
import NavBar from "../components/NavBar/NavBar";
import kConvert from "k-convert";
import JobCard from "../components/JobListing.jsx/JobCard";

const ApplyJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [jobData, setJobData] = useState(null);
  const { jobs } = useContext(AppContext);

  const fetchJob = async () => {
    const data = jobs.filter((job) => job._id === id);
    if (data.length !== 0) {
      setJobData(data[0]);
    }
  };

  // Filter jobs related to the current company or criteria
  const getRelatedJobs = () => {
    if (!jobData) return [];
    return jobs.filter(
      (job) =>
        job.companyId._id === jobData.companyId._id && job._id !== jobData._id
    );
  };

  useEffect(() => {
    if (jobs.length > 0) {
      fetchJob();
    }
  }, [id, jobs]);

  const relatedJobs = getRelatedJobs();

  const handleViewDetails = (jobId) => {
    navigate(`/apply/${jobId}`);
  };

  return jobData ? (
    <>
      <NavBar />
      <div className="container mx-auto p-4 bg-white rounded-lg shadow-md">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6 p-20 bg-slate-200 border border-slate-600 rounded-lg">
          {/* Job Details */}
          <div className="flex items-center space-x-4">
            <img
              src={jobData.companyId.image}
              alt={`${jobData.companyId.name} Logo`}
              className="w-20 h-20 "
            />
            <div>
              <h2 className="text-3xl font-bold">{jobData.title}</h2>
              <div className="flex gap-2 flex-wrap items-center mt-2 text-gray-600 font-medium text-lg">
                <div className="flex items-center mr-4">
                  <img
                    src={assets.suitcase_icon}
                    alt=""
                    className="w-4 h-4 mr-2"
                  />
                  <span>{jobData.companyId.name}</span>
                </div>
                <div className="flex items-center mr-4">
                  <img
                    src={assets.location_icon}
                    alt=""
                    className="w-4 h-4 mr-2"
                  />
                  <span>{jobData.location}</span>
                </div>
                <div className="flex items-center mr-4">
                  <img
                    src={assets.person_icon}
                    alt=""
                    className="w-4 h-4 mr-2"
                  />
                  <span>{jobData.level}</span>
                </div>
                <div className="flex items-center">
                  <img
                    src={assets.money_icon}
                    alt=""
                    className="w-4 h-4 mr-2"
                  />
                  <span>CTC: {kConvert.convertTo(jobData.salary)}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-right">
            <button className="bg-slate-600 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded mb-2">
              Apply Now
            </button>
            <p className="text-xs text-gray-400">Posted 25 mins ago</p>
          </div>
        </div>

        {/* Two-Column Layout */}
        <div className="flex flex-wrap lg:flex-nowrap gap-8">
          {/* Job Description Section */}
          <div className="lg:w-2/3 w-full px-6 py-6 border border-gray-300 rounded-lg shadow-sm bg-gray-50">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Job Description
            </h3>
            <div
              className="text-gray-700 leading-relaxed rich-text"
              dangerouslySetInnerHTML={{ __html: jobData.description }}
            ></div>
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded mt-6">
              Apply Now
            </button>
          </div>

          {/* More Jobs Section */}
          <div className="lg:w-1/3 w-full">
            <h3 className="text-2xl font-bold mb-2">More releted Jobs</h3>
            {relatedJobs.length > 0 ? (
              <div className="space-y-4">
                {relatedJobs.map((job) => (
                  <JobCard
                    key={job._id}
                    job={job}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-sm">No related jobs available.</p>
            )}
          </div>
        </div>
      </div>
    </>
  ) : (
    <LodingJobs />
  );
};

export default ApplyJob;
