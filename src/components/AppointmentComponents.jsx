import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import appointmentimg from "../assets/bookappointment.png";
import "../styles/appointment.css";

const AppointmentComponents = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    time: '',
    date: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { firstName, lastName, email, phone, time, date, message } = formData;

    if (!firstName || !lastName || !email || !phone || !time || !date || !message) {
      toast.error('All fields are required.');
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Please enter a valid email address.');
      return false;
    }

    if (phone.length < 7 || phone.length > 15) {
      toast.error('Please enter a valid phone number.');
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      toast.success('Appointment booked successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        time: '',
        date: '',
        message: ''
      });
    }
  };

  return (
    <div className='appointment-div'>
      <div className='d-md-flex'>
        <div className='formdiv text-center'>
          <h1 className='py-3 text-center'>Book Appointment</h1>

          <form className='appointment-form container' onSubmit={handleSubmit}>
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

            <div className='d-md-flex'>
              <input
                className='appointment-time'
                type="time"
                placeholder='Time'
                value={formData.time}
                onChange={handleChange}
              />
              <input
                className='appointment-date'
                type="date"
                placeholder='Date'
                value={formData.date}
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

            <div className='appointment-button-div text-center pb-3'>
              <button className='appointment-button' type='submit'>Book Appointment</button>
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
        </div>

        <div className='m- text-center appointmentimg-div'>
          <img className='appointmentimg' src={appointmentimg} alt="appointment" />
        </div>
      </div>


    </div>
  );
};

export default AppointmentComponents;