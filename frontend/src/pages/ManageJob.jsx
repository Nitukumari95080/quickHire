import React, { useState } from "react";
import { manageJobsData } from "../assets/assets";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const ManageJob = () => {
  const [checkedItems, setCheckedItems] = useState({});
  const navigate = useNavigate();

  return (
    <div>
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="overflow-hidden bg-white rounded-lg shadow-md">
          <table className="w-full border-collapse table-fixed">
            <thead className="bg-slate-500 text-white">
              <tr>
                <th className="py-4 px-4 text-sm font-medium">#</th>
                <th className="py-4 px-4 text-sm font-medium">Job Title</th>
                <th className="py-4 px-4 text-sm font-medium">Date</th>
                <th className="py-4 px-4 text-sm font-medium">Location</th>
                <th className="py-4 px-4 text-sm font-medium">Applicant</th>
                <th className="py-4 px-4 text-sm font-medium">Visible</th>
              </tr>
            </thead>
            <tbody>
              {manageJobsData.map((manage, index) => (
                <tr key={index} className="even:bg-gray-50 hover:bg-gray-100">
                  <td className="border-t py-3 px-4 text-center text-sm">
                    {index + 1}
                  </td>
                  <td className="border-t py-3 px-4 text-center text-sm truncate">
                    {manage.title}
                  </td>
                  <td className="border-t py-3 px-4 text-center text-sm truncate">
                    {moment(manage.date).format('LL')}
                  </td>
                  <td className="border-t py-3 px-4 text-center text-sm truncate">
                    {manage.location}
                  </td>
                  <td className="border-t py-3 px-4 text-center text-sm truncate">
                    {manage.applicants}
                  </td>
                  <td className="border-t py-3 px-4 text-center">
                    <input
                      type="checkbox"
                      className="scale-125"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
         
        </div>
        <div className="mt-4 flex justify-end">
        <button
          onClick={() => navigate('/dashboard/add-job')}
          className="bg-slate-800 text-white py-2 px-4 rounded-md"
        >
          Add new job
        </button>
      </div>
      </div>
      
    </div>
  );
};

export default ManageJob;
