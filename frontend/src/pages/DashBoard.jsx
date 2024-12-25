import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { assets } from "../assets/assets";

const DashBoard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      {/* NavBar for Recruiter Panel */}
      <header className="bg-slate-800 shadow-md p-4 flex items-center justify-between">
        <Link to="/">
          <h1 className="text-3xl font-bold tracking-wider relative">
            <span className="text-white">job</span>
            <span className="text-[#e49f0c] italic underline">Catalyst</span>
          </h1>
        </Link>
        <div className="flex items-center gap-3 text-white">
          <p className="text-white font-medium max-sm:hidden">
            Welcome, jobCatalyst
          </p>
          <div className="relative group">
            <img
              src={assets.company_icon}
              alt="Company Icon"
              className="w-8 h-8 rounded-full border border-gray-300 cursor-pointer"
            />
            <div className="absolute right-0 hidden group-hover:block pt-5">
              <ul className="list-none m-0 p-0 text-black rounded-md border text-sm bg-slate-300">
                <li className="px-2 py-1 pr-10 cursor-pointer">Logout</li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <div className="flex items-start">
        {/* Sidebar with navigation links */}
        <div className="inline-block min-h-screen border-r-2 bg-white">
          <ul className="flex flex-col items-start pt-5 text-slate-800 font-semibold">
            <NavLink
              className={({ isActive }) =>
                `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-gray-100 ${
                  isActive && "bg-slate-200 border-r-4 border-slate-400"
                }`
              }
              to={"/dashboard/add-job"}
            >
              <img src={assets.add_icon} alt="Add job" className="w-6 h-6" />
              <p className="max-sm:hidden">Add job</p>
            </NavLink>
            <NavLink
              to={"/dashboard/manage-job"}
              className={({ isActive }) =>
                `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-slate-200 ${
                  isActive && "bg-slate-100 border-r-4 border-slate-400"
                }`
              }
            >
              <img src={assets.home_icon} alt="Manage job" className="w-6 h-6" />
              <p className="max-sm:hidden">Manage job</p>
            </NavLink>
            <NavLink
              to={"/dashboard/view-applications"}
              className={({ isActive }) =>
                `flex items-center p-3 sm:px-6 gap-2 w-full hover:bg-slate-200 ${
                  isActive && "bg-slate-100 border-r-4 border-slate-400"
                }`
              }
            >
              <img
                src={assets.person_icon}
                alt="View Applications"
                className="w-6 h-6"
              />
              <p className="max-sm:hidden">View Applications</p>
            </NavLink>
          </ul>
        </div>
        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
