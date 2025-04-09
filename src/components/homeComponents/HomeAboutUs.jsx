import React from 'react'
import "../../styles/aboutUs.css"
import aboutus from "../../assets/aboutusimage.png";
import { Link } from 'react-router-dom';

const HomeAboutUs = () => {
    return (
        <div className=' aboutuscontainer d-md-flex d-lg-flex m-4 p-lg-1'>
            <div className='aboutustexts '>
                <h3>About Us</h3>
                <p>Lorem ipsum dolor sit amet consectetur. Placerat aliquam viverra sit duis fermentum elit. Quis sagittis morbi nisl sit. Hendrerit molestie fames tellus adipiscing id risus nunc. Eu quis nulla neque amet at eget etiam condimentum massa. Et sapien cras nullam adipiscing in purus ultricies. Neque nulla magnis at sit enim tellus vehicula in. Euismod est eu elementum tincidunt diam. Scelerisque porta aliquam amet aliquam.</p>
                <div className='text-end text-md-start'>
                    <Link to="/aboutus" className='consultreadmore '>Read more &rarr;</Link>
                </div>
            </div>
            <div className=' aboutusimg'>
                <img src={aboutus} alt="" />
            </div>
        </div>
    )
}

export default HomeAboutUs