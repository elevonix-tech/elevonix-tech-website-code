import React from 'react'
import NavbarTop from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import ProvenProcess from '../Components/ProvenProcess/ProvenProcess'
import Ourskills from '../Components/Ourskills/Ourskills'
import Wegrowth from '../Components/Ourservices/OurServices'
import Testimonials from '../Components/Testimonials/Testimonials'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <ProvenProcess/>
      <Ourskills/>
      <Wegrowth/>
      <Testimonials/>
    </div>
  )
}

export default Home
