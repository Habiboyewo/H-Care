import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import Footer from '../components/Footer'
import AboutUsPageComponents from '../components/AboutUsPageComponents'
import { useEffect } from 'react'


const AboutUsPage = () => {
    useEffect(() => {
        window.scroll({
          top: 0,
          behavior: "smooth",
        });
      }, []);
    return (
        <div>
            <NavbarComponent />
            <AboutUsPageComponents/>
            <Footer />
        </div>
    )
}


export default AboutUsPage