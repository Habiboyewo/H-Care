import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import Consultantspagecomponents from '../components/Consultantspagecomponents'
import Footer from '../components/Footer'
 import { useEffect } from 'react'

const Consultantspage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
            <NavbarComponent />
            <Consultantspagecomponents />
            <Footer />

        </div>
    )
}


export default Consultantspage