import React from 'react';
import { services } from "../data/services";
import { useParams } from 'react-router-dom';
import "../styles/consultantsPageComponents.css"
import NavbarComponent from '../components/NavbarComponent';
import Footer from '../components/Footer';

const OurServicedetails = () => {
    const { id } = useParams();
    const service = services?.find(service => service?.id === parseInt(id));


    if (!service) {
        return <div>Service not found!</div>;
    }

    return (
        <div>
            <NavbarComponent/>
            <div className='m-5'>
                <div>
                    <h1>{service.title}</h1>
                    <img className='col-12 py-3 img-fluid' src={service.image} alt={service.title} />
                    <p>{service.description}</p>
                </div>

                <div className='consultantwrap mt-5'>
                    {service.consultants && service.consultants.length > 0 ? (
                        service.consultants.map(consultant => (

                            <div key={consultant.id} className="consultantcard">
                                <img className="" src={consultant.image} alt={consultant.name} />

                                <div className='consultant-namecard'>
                                    <h6>{consultant.name}</h6>
                                    <p>{consultant.role}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No consultants available for this service.</p>
                    )}
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default OurServicedetails;
