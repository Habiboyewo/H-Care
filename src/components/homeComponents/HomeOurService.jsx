import React from 'react'
import { services } from "../../data/services"
import "../../styles/homeOurService.css"
import { Link } from 'react-router-dom';


const HomeOurService = () => {
  const homeourserv = services.slice(0, 3)
  return (
    <section className=' homeservicecontainer p-5'>
      <div >
        <h2 id='homeserviceh2' className='homeservh2 '>Why Choose Us</h2>
        <p id='homeservicepara ' className='text-center'>Lorem ipsum dolor sit amet consectetur. Rutrum quam lorem integer sit faucibus. Tristique duis dictum faucibus faucibus pulvinar. Sem netus tellus elit dignissim eget amet mollis sed nibh. Quam adipiscing sit nibh arcu vel diam ut lacus. At bibendum ante vulputate ut arcu. Placerat quisque turpis tellus netus.</p>
      </div>
      <div className='ourservicewrap  '>
        <div>
          <h2 id='homeserviceh3 ' className='homeservh2'>Our Services</h2>
          <p id='homeservicepara ' className='text-center'>
            Lorem ipsum dolor sit amet consectetur. Quisque et et vitae dolor. Vitae nunc feugiat mattis euismod aliquam tempor purus. Duis praesent vel duis in sagittis commodo sed amet. Risus pretium odio tortor sapien erat aliquam nunc netus.
          </p>
        </div>

        <div className='ourservicediv ' >
          {
            homeourserv.map((s) => {
              return <div className='ourservcard' key={s.id}>
                <img className='ourserviceimage' src={s.image} alt="" />
                <div className="ourservicetextdiv">
                  <h1 id='homeserviceh3'>{s.title}</h1>
                  <p id='homeservicepara '>{s.description.substring(0, 40)}</p>
                </div>
              </div>
            }
            )}
        </div>
        <div className='text-end'>
        <Link to="/ourservice" className='readmore'>Read more &rarr;</Link>  
        </div>
      </div>
    </section>)
}

export default HomeOurService