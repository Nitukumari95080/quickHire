import React, { useState } from "react";
import moment from "moment"; // Ensure moment is correctly imported
import NavBar from "../components/NavBar/NavBar";
import { MdAddToDrive } from "react-icons/md";
import { assets, jobsApplied } from "../assets/assets";
import Footer from "../components/Footer/Footer";

const Application = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [resume, setResume] = useState(null);

  return (
    <>
      <NavBar />
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">Your Resume</h1>
          {isEdit ? (
            <div className="flex items-center space-x-2">
              <label className="flex items-center" htmlFor="resumeUpload">
                <p className="bg-slate-300 text-slate-700 px-4 py-2 rounded-md mr-2 flex items-center space-x-2">
                  Select Resume
                  <MdAddToDrive className="text-blue-500 ml-2" />
                </p>
                <input
                  type="file"
                  onChange={(e) => setResume(e.target.files[0])}
                  id="resumeUpload"
                  accept="application/pdf"
                  className="hidden"
                />
              </label>
              <button
                onClick={() => setIsEdit(false)}
                className="bg-green-500 text-white border border-green-800 rounded-md px-4 py-2"
              >
                Save
              </button>
            </div>
          ) : (
            <div className="flex space-x-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Resume
              </button>
              <button
                onClick={() => setIsEdit(true)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
              >
                Edit
              </button>
            </div>
          )}
        </div>

        <h2 className="text-lg font-bold mb-2">Jobs Applied</h2>

        <table className="w-full border border-gray-200">
          <thead>
            <tr>
              <th className="border border-gray-200 p-2">Company</th>
              <th className="border border-gray-200 p-2">Job Title</th>
              <th className="border border-gray-200 p-2">Location</th>
              <th className="border border-gray-200 p-2">Date</th>
              <th className="border border-gray-200 p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {jobsApplied.map((job, index) => true? (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
              >
                <td className="border border-gray-200 p-4 flex gap-2 items-center space-x-2">
                  <img
                    src={job.logo}
                    alt={`${job.company} Logo`}
                    className="w-6 h-6"
                  />
                  <span>{job.company}</span>
                </td>
                <td className="border border-gray-200 p-2">{job.title}</td>
                <td className="border border-gray-200 p-2">{job.location}</td>
                <td className="border border-gray-200 p-2">
                  {moment(job.date).format("DD-MM-YYYY")}{" "}
                  {/* Fixed typo here */}
                </td>
                <td className="border border-gray-200 p-2">
                  <span
                    className={`px-2 py-1 rounded-md ${
                      job.action === "Pending"
                        ? "bg-yellow-200 text-yellow-700"
                        : job.action === "Rejected"
                        ? "bg-red-200 text-red-700"
                        : "bg-green-200 text-green-700"
                    }`}
                  >
                    {job.status || "Unknown"}
                  </span>
                </td>
              </tr>
            ):(null))}
          </tbody>
        </table>
      </div>
      <Footer/>
    </>
  );
};

export default Application;
