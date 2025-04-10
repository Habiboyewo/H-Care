import React from 'react'
import { Link } from "react-router-dom";
import errorimg from "../assets/Error404img.webp";

const ErrorPage = () => {
    return (
        <div>
            {/* <div className=''>
                <img className='' style={{width:'70%',height:'auto'}} src={errorimg} alt="Error 404" />
            </div> */}
            <div className="text-center my-5">
                <img
                    src={errorimg}
                    alt="error image"
                    className=" d-block mx-auto "
                    style={{width:'70%',height:'auto'}}
                />
                <Link to="/" className="text-decoration-none">
                    <button className="btn btn-primary d-block mt-3 mx-auto">
                        Go Back To Homepage
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default ErrorPage