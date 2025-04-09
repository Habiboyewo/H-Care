import React from 'react'
import "../../styles/locations.css"

const Locations = () => {
  return (

    <div className='p-4'>
      <h4 className='text-center fs-1 '>Locations</h4>
      <div className='lcard-div'>
        <Location locationName="AGEGE" />
        <Location locationName="VICTORIA ISLAND" />
        <Location locationName="AJAH" />
      </div>
    </div>
  )
}

function Location(props) {

  return <div className='locationcard'>
    <h5 className='text-center'>{props.locationName}</h5>
    <p className='text-center px-' >Lorem ipsum dolor sit amet consectetur.</p>
    <button className='locationBtn '>GET DIRECTIONS</button>
  </div>
}

export default Locations