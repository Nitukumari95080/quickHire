import { createContext, useEffect, useState } from "react";
import { jobsData } from "../assets/assets";

// Create the context
export const AppContext = createContext();


export const AppContextProvider = (props) => {
 
  const [searchFilter,setSearchFilter]=useState(
    {
        title:'',
        location:''
    }
  );

  const [isSearched,setIsSearched]=useState(false)
  const [jobs,setJobs]=useState([]);
  // function to fetch data
  const fetchJobs=async()=>{
    setJobs(jobsData)
  }
  useEffect(()=>{
    fetchJobs()
  },[])
  const value = {
    setSearchFilter,searchFilter,
    isSearched,setIsSearched,jobs,setJobs,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};