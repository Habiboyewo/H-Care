import React from 'react'
import AppointmentComponents from '../components/AppointmentComponents'
import NavbarComponent from '../components/NavbarComponent'
import Footer from '../components/Footer'
import { useEffect } from 'react'

const BookAppointment = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (

    <div>
      <NavbarComponent />
      <AppointmentComponents />
      <Footer />
    </div>
  )
}

export default BookAppointment