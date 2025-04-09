import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import contactusimg from "../assets/contactus.png";
import "../styles/contactuscomponent.css";

const ContactUsComponent = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { firstName, lastName, email, phone, message } = formData;

    if (!firstName || !lastName || !email || !phone || !message) {
      toast.error('All fields are required.');
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error('Please enter a valid email.');
      return false;
    }

    if (phone.length < 7 || phone.length > 15) {
      toast.error('Enter a valid phone number.');
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {

      toast.success('Message sent successfully!');

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
    }
  };

  return (
    <div className='contactus-div px- py-'>
      <div className='d-md-flex'>
        <div className='contactwrap text-center'>
          <h1 className='py-3 text-center'>Contact Us</h1>

          <form className='contact-form container' onSubmit={handleSubmit}>
            <div className='d-md-flex'>
              <input
                type="text"
                name="firstName"
                placeholder='First Name'
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder='Last Name'
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className='d-md-flex'>
              <input
                type="email"
                name="email"
                placeholder='Email'
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder='Phone Number'
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <textarea
              name="message"
              rows="4"
              placeholder='Short Message'
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <div className='contact-button-div text-center pb-3'>
              <button className='contact-button' type='submit'>Send Message</button>
            </div>
          </form>
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            closeOnClick
            pauseOnHover
            draggable
            pauseOnFocusLoss
          />

          <div className='mb-5'>
            <h3 className='text-center'>OR</h3>
            <div className='contactmedia d-flex'>
              <div>
                <FaFacebookF className='media-icon' />
                <a href="http://*">Facebook</a>
              </div>
              <div>
                <CiMail className='media-icon' />
                <a href="http://*">Gmail</a>
              </div>
              <div>
                <FaTwitter className='media-icon' />
                <a href="http://*">Twitter</a>
              </div>
              <div>
                <FaInstagram className='media-icon' />
                <a href="http://*">Instagram</a>
              </div>
            </div>
          </div>

        </div>

        <div className='m- text-center contactimg-div'>
          <img className='contactimg' src={contactusimg} alt="Contact Us" />
        </div>
      </div>


    </div>
  );
};

export default ContactUsComponent;