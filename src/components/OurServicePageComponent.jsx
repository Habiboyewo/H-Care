import React from 'react'
import { services } from "../data/services"
import "../styles/ourservicepage.css"
import { Link } from 'react-router-dom';


const OurServicePageComponent = () => {
    return (
        <div className='px-5 pt-3'>
            <h2>Our Service</h2>
            {
                services.map((service) => {
                    return <div key={service.id} className='servicepageinfo d-md-flex  py-3 py-lg-4 '>

                        <img className='  col-12 col-md-4  col-lg-4 ' src={service.image} alt="" />

                        <div className='servicepageinfodiv pt-3 ' >
                            <h3>{service.title}</h3>
                            <p>{service.description.substring(0,276)}</p>
                            <Link className='d-block text-end ' to={`/ourservice/${service.id}`}>more&rarr;</Link>
                           
                        </div>
                    </div>
                }
                )
            }

        </div>
    )
}

export default OurServicePageComponent