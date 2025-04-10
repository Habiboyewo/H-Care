
import "../../styles/homeourconsultant.css"
import { services } from "../../data/services"
import { Link } from 'react-router-dom';


// export default ServicesList;

const HomeOurConsultants = () => {
    const homeOurconsult = services.slice(0, 3)

    return (
        <section className=' homeconsltcontainer px-4 px-md-5 pb-3 px-lg-5' >
            <div className='mainwrap'>
                <div className='homeconsltheadin'>
                    <h2 className='text-center mb-2'>Our Consultants</h2>
                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur. Quisque et et vitae dolor. Vitae nunc feugiat mattis euismod aliquam tempor purus. Duis praesent vel duis in sagittis commodo sed amet. Risus pretium odio tortor sapien erat aliquam nunc netus.</p>
                </div>

                <>
                    <div className='d-flex flex-column flex-md-row align-items-center justify-content-between gap-5 gap-md-0 '>
                        {services.slice(0, 3).map((service) => (
                            <div className='homeconsltwrap px-3 text-center shadow-md  bg-white rounded-2' key={service.id} >
                                {service.consultants.slice(0, 1).map((consultant) => (
                                    <div className='homeconsltcard ' key={consultant.id} >
                                        <img className='' src={consultant.image} alt={consultant.name} />
                                        <div className='namecard mt-3'>
                                            <h6 className='fs-6 fw-bold' >{consultant.name}</h6>
                                            <p >{consultant.role}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className='py-md-2 pt-1 text-end'>
                        <Link to="/consultants" className='consultreadmore'>Read more &rarr;</Link>
                    </div>
                </>
            </div>

        </section>
    )
}

export default HomeOurConsultants