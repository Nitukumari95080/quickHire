import React, { useContext } from "react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const NavBar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const { setShowRecruiterLogin } = useContext(AppContext);

  const handleRecruiterLoginClick = () => {
    console.log("Recruiter Login clicked");
    setShowRecruiterLogin(true);
  };

  return (
    <div className="shadow py-6 bg-slate-900 text-white">
      <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-3xl font-bold tracking-wider relative">
            <span className="text-white">job</span>
            <span className="text-[#e49f0c] italic underline">Catalyst</span>
          </h1>
        </Link>

        {/* User-specific content */}
        {user ? (
          <div className="flex items-center gap-3">
            <Link to="/applications" className="hover:underline">
              Applied Jobs
            </Link>
            <p>|</p>
            <p className="max-sm:hidden">Hi, {user.firstName + " " + user.lastName}</p>
            <UserButton />
          </div>
        ) : (
          <div className="flex gap-4 max-sm:text-xs">
            <button
              onClick={handleRecruiterLoginClick}
              className="text-white hover:underline"
            >
              Recruiter Login
            </button>
            <button
              onClick={() => openSignIn()}
              className="bg-[#f7f3f0] text-black px-6 sm:px-9 py-2 rounded-full hover:bg-[#e0e0e0] transition duration-300 ease-in-out"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
