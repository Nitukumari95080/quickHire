import React, { useState } from "react";
import { assets, viewApplicationsPageData } from "../assets/assets";

const ViewApplication = () => {
  const [applications, setApplications] = useState(viewApplicationsPageData);
  const [activeMenuIndex, setActiveMenuIndex] = useState(null); // State to manage which menu is open

  const handleAction = (index, action) => {
    // Update the status of the selected application
    const updatedApplications = applications.map((applicant, i) =>
      i === index ? { ...applicant, status: action } : applicant
    );
    setApplications(updatedApplications);
    setActiveMenuIndex(null); // Close menu after action
  };

  const toggleMenu = (index) => {
    setActiveMenuIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const closeMenu = () => {
    setActiveMenuIndex(null);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="overflow-hidden bg-white rounded-lg shadow-md">
        <table className="w-full border-collapse table-fixed">
          <thead className="bg-slate-500 text-white">
            <tr>
              <th className="py-4 px-4 text-sm font-medium">#</th>
              <th className="py-4 px-4 text-sm font-medium">User Name</th>
              <th className="py-4 px-4 text-sm font-medium">Job Title</th>
              <th className="py-4 px-4 text-sm font-medium">Location</th>
              <th className="py-4 px-4 text-sm font-medium">Resume</th>
              <th className="py-4 px-4 text-sm font-medium">Status</th>
              <th className="py-4 px-4 text-sm font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((applicant, index) => (
              <tr key={index} className="even:bg-gray-50 hover:bg-gray-100">
                <td className="border-t py-3 px-4 text-center text-sm">{index + 1}</td>
                <td className="border-t py-3 px-4 text-sm flex items-center space-x-3">
                  <img
                    src={applicant.imgSrc}
                    alt={applicant.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span className="truncate">{applicant.name}</span>
                </td>
                <td className="border-t py-3 px-4 text-center text-sm truncate">
                  {applicant.jobTitle}
                </td>
                <td className="border-t py-3 px-4 text-center text-sm truncate">
                  {applicant.location}
                </td>
                <td className="border-t py-3 px-4 text-center text-sm">
                  <a
                    href={applicant.resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 flex items-center justify-center space-x-1"
                  >
                    <span>Download</span>
                    <img
                      src={assets.resume_download_icon}
                      alt="Download"
                      className="w-4 h-4"
                    />
                  </a>
                </td>
                <td className="border-t py-3 px-4 text-center text-sm">
                  <span
                    className={`px-2 py-1 rounded-full ${
                      applicant.status === "Accepted"
                        ? "bg-green-100 text-green-600"
                        : applicant.status === "Pending"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {applicant.status || "Pending"}
                  </span>
                </td>
                <td className="border-t py-3 px-4 text-center text-sm relative">
                  <button
                    onClick={() => toggleMenu(index)}
                    className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none"
                  >
                    Action
                  </button>
                  {activeMenuIndex === index && (
                    <div
                      className="absolute right-0 mt-2 w-36 bg-white rounded-md shadow-lg border z-10"
                      onMouseLeave={closeMenu} // Close menu when the mouse leaves the dropdown
                    >
                      <button
                        onClick={() => handleAction(index, "Accepted")}
                        className="block w-full px-4 py-2 text-left text-sm hover:bg-green-100"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleAction(index, "Pending")}
                        className="block w-full px-4 py-2 text-left text-sm hover:bg-yellow-100"
                      >
                        Pending
                      </button>
                      <button
                        onClick={() => handleAction(index, "Rejected")}
                        className="block w-full px-4 py-2 text-left text-sm hover:bg-red-100"
                      >
                        Reject
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplication;
