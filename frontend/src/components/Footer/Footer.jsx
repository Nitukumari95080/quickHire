import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaDribbble,
  FaGoogle,
  FaPaperPlane,
} from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    // Add logic to handle email submission (e.g., API call)
  };

  return (
    <footer className="bg-gray-800 text-white mt-40 pt-10">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 text-center lg:text-left items-center justify-center">
        {/* Logo and Contact Info */}
        <div>
          <Link to="/">
            <h1 className="text-4xl font-bold tracking-wide mb-10">
              <span className="text-white">job</span>
              <span className="text-[#e49f0c] italic underline">Catalyst</span>
            </h1>
          </Link>
          <p>Dheradun,Tulas Institute</p>
          <p>+91-246-345-0695</p>
          <p>info@jobCatalyst.com</p>
        </div>

        {/* About Us Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">About Us</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400">
                Product
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Terms & Policies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                FAQ's
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Job Packages
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                CV Packages
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <ul className="space-y-2 text-left">
            <li className="flex items-center justify-center lg:justify-start space-x-2">
              <FaFacebookF size={20} className="text-blue-500" />
              <span>Facebook</span>
            </li>
            <li className="flex items-center justify-center lg:justify-start space-x-2">
              <FaTwitter size={20} className="text-blue-400" />
              <span>Twitter</span>
            </li>
            <li className="flex items-center justify-center lg:justify-start space-x-2">
              <FaInstagram size={20} className="text-pink-500" />
              <span>Instagram</span>
            </li>
            <li className="flex items-center justify-center lg:justify-start space-x-2">
              <FaPinterest size={20} className="text-red-500" />
              <span>Pinterest</span>
            </li>
            <li className="flex items-center justify-center lg:justify-start space-x-2">
              <FaDribbble size={20} className="text-blue-500" />
              <span>Dribbble</span>
            </li>
            <li className="flex items-center justify-center lg:justify-start space-x-2">
              <FaGoogle size={20} className="text-red-500" />
              <span>Google</span>
            </li>
          </ul>
        </div>

        {/* Subscription Form */}
        {/* add job koi sms kare to mere email pe jayge job koi sms kar tb */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Still Need Help?</h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center lg:items-start justify-center"
            action="https://formspree.io/f/mjkkvbnq" // Ensure this is your correct endpoint
            method="POST"
          >
            <input
              type="email"
              placeholder="Enter Valid Email Address"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-700 bg-gray-900 rounded-md px-4 py-2 text-white mb-4 focus:outline-none w-full"
              required // Ensure required attribute is present
            />
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              rows="4"
              required
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
            ></textarea>
            <button
              type="submit"
              className="bg-red-500 mt-3 hover:bg-red-600 text-white px-4 py-2 rounded-md flex items-center justify-center"
            >
              <FaPaperPlane className="mr-2" />
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center bg-slate-900 py-8 mt-8">
        <p>&copy; 2018 Jobhunt. All rights reserved Design by Topper Girl</p>
      </div>
    </footer>
  );
};

export default Footer;
