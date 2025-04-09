import React from 'react'
import { testimonials } from '../../data/testimonials'
import "../../styles/testimonials.css"
import { RiDoubleQuotesL } from "react-icons/ri";
import { FaStar } from 'react-icons/fa';
const Testimonials = () => {
    return <div className='testimonials-container px-5 '>
        <h2 className='text-center'>Testimonials</h2>
        <div className='d-md-flex align-items-center flex-wrap justify-content-between'>
        {testimonials.map((t) => {
            return <div className='testimonial-wrap' key={t.id}>
                <div className='testimonial-card ' >

                    <div className='card-content'>
                        <span className=' '><RiDoubleQuotesL /></span>
                        <div className="my-2 text-center ">
                            <FaStar className='stars' color="gold" />
                            <FaStar className='stars' color="gold" />
                            <FaStar className='stars' color="gold" />
                            <FaStar className='stars' color="gold" />
                            <FaStar className='stars' color="gold" />
                        </div>

                        <p className='text-center'>{t.testimony}</p>

                    </div>

                    <div className='card-profilefooter'>
                        <img src={t.image} alt="" />
                        <div className='card-profileinfo'>
                            <h6 className='text-white text-center'>{t.name}</h6>
                            <p className='profile-job text-white text-center'>{t.job}</p>
                        </div>
                    </div>

                </div>

            </div>
        })}

        </div>
   
    </div>
}

export default Testimonials



