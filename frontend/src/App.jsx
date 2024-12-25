import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ApplyJob from './pages/ApplyJob';
import Application from './pages/Application';
import RecruiterLogin from './components/Login/RecruiterLogin';
import { AppContext } from './context/AppContext';
import DashBoard from './pages/DashBoard';
import AddJobs from './pages/AddJobs';
import ManageJob from './pages/ManageJob';
import ViewApplicatiion from './pages/ViewApplicatiion';
import "quill/dist/quill.snow.css";


const App = () => {
  // Fix the variable name to match context value
  const { showRecruiterLogin } = useContext(AppContext); 

  return (
    <div>
      {/* Conditionally render the RecruiterLogin component based on the context state */}
      {showRecruiterLogin && <RecruiterLogin />} 

      {/* Define routes for your app */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apply-job/:id' element={<ApplyJob />} />
        <Route path='/applications' element={<Application />} />
        <Route path='/dashboard' element={<DashBoard/>}>
            <Route path='add-job' element={<AddJobs/>}/>
            <Route path='manage-job' element={<ManageJob/>}/>
            <Route path='view-applications' element={<ViewApplicatiion/>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
