import React, { useState } from 'react'
import hcarelogo from "../assets/hcarelogo.png"
import "../styles/footer.css"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Footer = () => {
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")

    const validateEmail = (email) => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email) {
            setError("Email is required");
        } else if (!validateEmail(email)) {
            setError("Please enter a valid email address");
        } else {
            console.log(email);
            
            setError('')
            toast.success('Subscribed successfully!')
            setEmail('')
        }
       
    }

    return (
        <footer className='footer bg-black text-white p-5 p-md-' >

            <div>
                <img src={hcarelogo} alt="" />
                <h6 className='footer-logotext text-white'>Hunter Care</h6>
                <p className='footer-p text-white'>Lorem ipsum dolor sit amet consectetur. Ut in in quam posuere.</p>
                <form className='footer-form' onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <button type='submit'>subscribe<span>&rarr;</span></button>
                </form >
                {error && <p style={{color:'red'}}>{error}</p> }
                <ToastContainer position='top-center'/>
            </div>
            <div className='useful-links' >
                <h6>Useful Links</h6>
                <Link to="/">Home</Link>
                <Link to="/aboutus">About</Link>
                <Link to="/ourservice">Services</Link>
                <Link to="/consultants">Consultants</Link>
                <Link to="/contactus">Contact</Link>
                <Link to="/bookappointment">Book Appointment</Link>
            </div>

            <div className='opening-hours'>
                <h6>Opening Hours</h6>
                <p>Monday-Sunday 24hrs</p>
                <p>Emergency services 24hrs</p>
            </div>



            <div className='footer-contact'>
                <h6>Contacts</h6>
                <a href="http://"><FaFacebookF />Facebook</a>
                <a href="http://"><FaInstagram />Instagram</a>
                <a href="http://"><FaTwitter /> Twitter </a>
                <a href="http://"><CiMail /> Gmail </a>
            </div>

        </footer>
    )
}

export default Footer