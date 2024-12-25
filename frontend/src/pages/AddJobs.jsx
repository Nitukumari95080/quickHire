import React, { useState, useRef, useEffect } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css"; // Ensure you import the Quill CSS for styling
import { JobCategories } from "../assets/assets";

const AddJobs = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("Bangalore");
  const [category, setCategory] = useState("Programming");
  const [level, setLevel] = useState("Beginner level");
  const [salary, setSalary] = useState(0);
  const [jobDescription, setJobDescription] = useState(""); // Store the editor content
  const editorRef = useRef(null); // Reference to the editor container
  const quillRef = useRef(null); // Reference to the Quill instance

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      // Initialize Quill once
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow", // Set the theme
        placeholder: "Write the job description here...",
        modules: {
          toolbar: [
            ["bold", "italic", "underline"], // Formatting options
            [{ list: "ordered" }, { list: "bullet" }], // Lists
            [{ header: [1, 2, 3, false] }], // Headers
            ["link", "image"], // Links and images
          ],
        },
      });

      // Update state when Quill content changes
      quillRef.current.on("text-change", () => {
        setJobDescription(quillRef.current.root.innerHTML);
      });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Job Title:", title);
    console.log("Job Description:", jobDescription);
    console.log("Category:", category);
    console.log("Location:", location);
    console.log("Level:", level);
    console.log("Salary:", salary);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-slate-200 rounded-md shadow-md w-full max-w-4xl mx-auto">
      <div>
        <label htmlFor="job-title" className="block font-semibold mb-2 text-gray-700">
          Job Title
        </label>
        <input
          id="job-title"
          type="text"
          placeholder="Type the job title here"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="job-description" className="block font-semibold mb-2 text-gray-700">
          Job Description
        </label>
        <div
          id="job-description"
          ref={editorRef}
          className="min-h-[200px] border rounded-md p-2 bg-gray-50"
        ></div>
      </div>

      {/* Category, Location, and Level in a 3:1 Layout */}
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <label htmlFor="job-category" className="block font-semibold mb-2 text-gray-700">
            Job Category
          </label>
          <select
            id="job-category"
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {JobCategories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="job-location" className="block font-semibold mb-2 text-gray-700">
            Job Location
          </label>
          <select
            id="job-location"
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {JobCategories.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <label htmlFor="job-level" className="block font-semibold mb-2 text-gray-700">
            Job Level
          </label>
          <select
            id="job-level"
            onChange={(e) => setLevel(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Beginner level">Beginner Level</option>
            <option value="Intermediate level">Intermediate Level</option>
            <option value="Senior level">Senior Level</option>
          </select>
        </div>

        <div>
          <label htmlFor="job-salary" className="block font-semibold mb-2 text-gray-700">
            Job Salary
          </label>
          <input
            id="job-salary"
            type="number"
            min={0}
            placeholder="Enter salary (e.g., 2.4)"
            onChange={(e) => setSalary(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-slate-500 text-white py-2 rounded-md hover:bg-slate-600 transition duration-300"
      >
        Add Job
      </button>
    </form>
  );
};

export default AddJobs;
