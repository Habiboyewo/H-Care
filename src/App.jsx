import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUsPage';
import OurService from './pages/OurServicePage';
import OurServicedetails from './pages/OurServicedetails';
import Consultantspage from './pages/Consultantspage';
import BookAppointment from './pages/BookAppointment';
import ContactUs from './pages/ContactUs';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/ourservice" element={<OurService />} />
          <Route path="/ourservice/:id" element={<OurServicedetails/>} />
          <Route path="/consultants" element={<Consultantspage/>} />
          <Route path="/bookappointment" element={<BookAppointment/>} />
          <Route path="/contactus" element={<ContactUs/>} />
          <Route path="/*" element={<ErrorPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
