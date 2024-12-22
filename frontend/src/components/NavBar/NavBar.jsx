import React from "react";
import { assets } from "../../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <div className="shadow py-4 bg-[#00274d] text-white">
      <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
        <Link to={"/"}>
          <h1 className="text-3xl font-bold tracking-wider relative">
            <span className="text-white">job</span>
            <span className="text-[#e49f0c] italic underline">Catalyst</span>
          </h1>
        </Link>
        {user ? (
          <div className="flex items-center gap-3">
            <Link to={"/applications"} className="hover:underline">
              Applied Jobs
            </Link>
            <p>|</p>
            <p className="max-sm:hidden">Hi, {user.firstName + " " + user.lastName}</p>
            <UserButton />
          </div>
        ) : (
          <div className="flex gap-4 max-sm:text-xs">
            <button className="text-white hover:underline">
              Recruiter Login
            </button>
            <button
              onClick={(e) => openSignIn()}
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
