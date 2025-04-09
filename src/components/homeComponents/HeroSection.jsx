import React from 'react'
import "../../styles/heroSection.css"
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <main className='herocontainer '>
            <section className='hero-section py-3 px-4'>
                <div className='herocontent'>
                    <h1 className=" ">Your Health Is Our Priority</h1>
                    <p className=''>Lorem ipsum dolor sit amet consectetur. Dignissim pulvinar netus velit cursus erat nulla amet in. Consequat tincidunt sit elit amet mattis tincidunt libero vestibulum sit. Tempor sagittis habitant vitae rhoncus neque commodo sociis mollis quam.</p>
                    <Link to="/bookappointment"><button className='herobutton'>Book Appointment</button></Link>
                </div>
            </section>
        </main>
    )
}

export default HeroSection