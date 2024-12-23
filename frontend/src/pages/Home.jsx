import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Hero from '../components/Hero/Hero'
import Trusted from '../components/Trusted/Trusted'
import JobListing from '../components/JobListing.jsx/JobListing'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Trusted/>
      <JobListing/>
      <Footer/>
    </div>
  )
}

export default Home
