import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import Footer from '../components/Footer'
import ContactUsComponent from '../components/ContactUsComponent'
 import { useEffect } from 'react'

const ContactUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
            <NavbarComponent />
            <ContactUsComponent/>
            <Footer />
        </div>
    )
}

export default ContactUs