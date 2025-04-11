import React from 'react'
import { services } from "../data/services"
import "../styles/consultantsPageComponents.css"


const Consultantspagecomponents = () => {
    return (
        <div className='px-5 py-3 container'>
            <h2 >Consultants</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Odio vulputate non amet urna. Leo egestas velit mauris sem urna dapibus pulvinar. Fermentum dui lacus pretium sed adipiscing non urna amet. Hendrerit vitae lectus et turpis. Integer sodales sit aliquam risus. Proin odio tortor quam quam mattis eleifend tempus. Eget duis cum mauris aliquam adipiscing in nec. Sapien dolor aliquam sed duis egestas.</p>

            <div >
                {services.map(service => (
                    <div key={service.id} >
                        <h3 className=' mb-4'>{service.title}</h3>
                       
                        <div className='consultantwrap '>

                            {service.consultants.map(consultant => (

                                <div className='consultantcard' key={consultant.id}  >
                                    <img className src={consultant.image} alt={consultant.name} />
                                    <div className='consultant-namecard'>
                                        <h6>{consultant.name}</h6>
                                        <p >{consultant.role}</p>
                                    </div>
                                </div>

                            ))}

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Consultantspagecomponents