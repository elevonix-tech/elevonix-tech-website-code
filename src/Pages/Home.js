import React from 'react'
import NavbarTop from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import ProvenProcess from '../Components/ProvenProcess/ProvenProcess'
import Ourskills from '../Components/Ourskills/Ourskills'
import Wegrowth from '../Components/Ourservices/OurServices'

const Home = () => {
  return (
    <div>
      <NavbarTop />
      <Hero/>
      <ProvenProcess/>
      <Ourskills/>
      <Wegrowth/>
    </div>
  )
}

export default Home
