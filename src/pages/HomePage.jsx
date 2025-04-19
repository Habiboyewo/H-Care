import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import HeroSection from '../components/homeComponents/HeroSection'
import HomeOurService from '../components/homeComponents/HomeOurService'
import HomeOurConsultants from '../components/homeComponents/HomeOurConsultants'
// import HomeOurFacilities from '../components/HomeOurFacilities'
import HomeAboutUs from '../components/homeComponents/HomeAboutUs'
import Testimonials from '../components/homeComponents/Testimonials'
import Locations from '../components/homeComponents/Locations'
import Partners from '../components/homeComponents/Partners'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import WhyChooseUs from '../components/homeComponents/WhyChooseUs'

const HomePage = () => {
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  return (
    <div >
      <NavbarComponent />
      <HeroSection />
      <WhyChooseUs/>
      <HomeOurService />
      <HomeOurConsultants />
      {/* <HomeOurFacilities/> */}
      <HomeAboutUs />
      <Testimonials />
      <Locations />
      <Partners />
      <Footer />
    </div>
  )
}

export default HomePage