import React from 'react';
import { Link } from 'react-router-dom';
import mistake from '../../assets/icon/wrong.png'
const NotFound = () => {
    return (
        <div >
            <div className='flex flex-col justify-center items-center'>
            <img style={{width:'60%'}} src={mistake} alt="" />
            <Link to='/' className=' text-decoration-none fs-3' >Go back to Home page</Link>
            </div>
           
           
        </div>
    );
};

export default NotFound;