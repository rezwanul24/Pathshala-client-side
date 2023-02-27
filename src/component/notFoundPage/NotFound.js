import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../assets/icon/wrong.png'

const NotFound = () => {
    return (
        <div>
            <div >
            <div className='flex flex-col justify-center items-center'>
            <img style={{width:'60%'}} src={notfound} alt="" />
            <Link to='/' className=' text-decoration-none fs-3' >Go to Home page</Link>
            </div>
           
           
        </div>
        </div>
    );
};

export default NotFound;