import React from 'react'
import Aboutinfo from "./../../components/About/About";
import TeamCard from '../../components/TeamCard/TeamCard';
import Navbar from "./../../components/Navbar/Navbar"
import Footer from "./../../components/Footer/Footer"
function About() {
  return (
    <div>
      <Navbar/>
      <Aboutinfo/>
     <TeamCard/>
     <Footer/>
    </div>
  )
}

export default About
