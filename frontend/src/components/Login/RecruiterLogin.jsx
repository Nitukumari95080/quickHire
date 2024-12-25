import React, { useState, useContext, useEffect } from "react";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";

function RecruiterLogin() {
  const { showRecruiterLogin, setShowRecruiterLogin } = useContext(AppContext);
  const [state, setState] = useState("Login");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [logo, setLogo] = useState(null); // Store uploaded logo file
  const [step, setStep] = useState(1); // Step for Sign-Up Process

  // Handle file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setLogo(file);
  };

  // Handle form submission (Login or Sign Up)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (state === "Sign Up" && step === 1) {
      // Move to the next step
      setStep(2);
    } else {
      console.log(`${state} form submitted with:`, { email, name, password, logo });
      // Reset form or perform further actions
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Close the modal
  const closeLoginModal = () => {
    setShowRecruiterLogin(false);
    setStep(1); // Reset to the first step
    setState("Login"); // Reset to default state
    setEmail(""); // Clear all fields
    setName("");
    setPassword("");
    setLogo(null);
  };

  return (
    <>
      {showRecruiterLogin && (
        <div className="absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-md mx-auto max-w-md w-full relative">
            <button
              onClick={closeLoginModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              X
            </button>
            <h2 className="text-2xl font-bold mb-4">Recruiter {state}</h2>
            <p className="text-gray-600 mb-6">
              {state === "Login"
                ? "Welcome back! Please sign in to continue."
                : step === 1
                ? "Enter your details to proceed."
                : "Create your account by setting a password."}
            </p>

            <form onSubmit={handleSubmit} className="max-h-[80vh] overflow-auto">
              {state === "Sign Up" && step === 1 && (
                <>
                  <div className=" text-center flex items-center gap-4 my-4">
                    <label htmlFor="logo" className="cursor-pointer">
                      <img
                        src={logo ? URL.createObjectURL(logo) : assets.upload_area}
                        alt="Upload Logo"
                        className="w-24 h-24 object-cover rounded-full mx-auto"
                      />
                    </label>
                    <input
                      type="file"
                      id="logo"
                      accept="image/*"
                      hidden
                      onChange={handleFileUpload}
                    />
                    <p className="text-sm text-gray-600 mt-2">Upload Company Logo</p>
                  </div>

                  <div className="flex items-center mb-4">
                    <img src={assets.person_icon} alt="icon" className="mr-2" />
                    <input
                      type="text"
                      id="name"
                      placeholder="Company Name"
                      className="p-2 w-full border rounded-full focus:ring-blue-500 focus:border-blue-500"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="flex items-center mb-4">
                    <img src={assets.email_icon} alt="icon" className="mr-2" />
                    <input
                      type="email"
                      id="email"
                      placeholder="Company Email"
                      className="p-2 w-full border rounded-full focus:ring-blue-500 focus:border-blue-500"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex items-center mb-4">
                    <img src={assets.person_icon} alt="icon" className="mr-2" />
                    <input
                      type="password"
                      id="password"
                      placeholder="password"
                      className="p-2 w-full border rounded-full focus:ring-blue-500 focus:border-blue-500"
                      value={name}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </>
              )}

              {state === "Sign Up" && step === 2 && (
                <div className="flex items-center mb-4">
                  <img src={assets.lock_icon} alt="icon" className="mr-2" />
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    className="p-2 w-full border rounded-full focus:ring-blue-500 focus:border-blue-500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              )}

              {state === "Login" && (
                <>
                  <div className="flex items-center mb-4">
                    <img src={assets.email_icon} alt="icon" className="mr-2" />
                    <input
                      type="email"
                      id="email"
                      placeholder="Company Email"
                      className="p-2 w-full border rounded-full focus:ring-blue-500 focus:border-blue-500"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="flex items-center mb-4">
                    <img src={assets.lock_icon} alt="icon" className="mr-2" />
                    <input
                      type="password"
                      id="password"
                      placeholder="Password"
                      className="p-2 w-full border rounded-full focus:ring-blue-500 focus:border-blue-500"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <a href="#" className="text-blue-500 hover:underline mb-4 block">
                    Forgot password?
                  </a>
                </>
              )}

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-full"
              >
                {state === "Login"
                  ? "Login"
                  : step === 1
                  ? "Next"
                  : "Create Account"}
              </button>

              <div className="text-center mt-4">
                {state === "Login" ? (
                  <p className="text-sm text-gray-600">
                    Don&apos;t have an account?{" "}
                    <span
                      className="text-blue-500 font-medium cursor-pointer hover:underline"
                      onClick={() => setState("Sign Up")}
                    >
                      Sign Up
                    </span>
                  </p>
                ) : (
                  <p className="text-sm text-gray-600">
                    Already have an account?{" "}
                    <span
                      className="text-blue-500 font-medium cursor-pointer hover:underline"
                      onClick={() => {
                        setState("Login");
                        setStep(1); // Reset step to 1
                      }}
                    >
                      Login
                    </span>
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default RecruiterLogin;
