import React from 'react'
import "../../styles/partners.css"
import ubalogo from "../../assets/UBA-logo.png";
import unilever from "../../assets/unilever.png";
import nhis from "../../assets/NHIS-logo.png";
import nestle from "../../assets/nestle.png";
import dangote from "../../assets/Dangote.png";

const Partners = () => {
    return (
        <div className='partner-container '>
            <h2 className='text-center'>Partners</h2>

            <div className='partners-pic-div'>
                <img src={unilever} alt="" />
                <img src={nestle} alt="" />
                <img src={ubalogo} alt="" />
                <img src={nhis} alt="" />
                <img src={dangote} alt="" />
            </div>
        </div>
    )
}

export default Partners