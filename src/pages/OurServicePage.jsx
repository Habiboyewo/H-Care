import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import Footer from '../components/Footer'
import OurServicePageComponent from '../components/OurServicePageComponent'
import { useEffect } from 'react'

const OurServicePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <NavbarComponent />
            <OurServicePageComponent />
            <Footer />
        </div>
    )
}



export default OurServicePage