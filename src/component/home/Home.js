import React from "react";
import { Link } from "react-router-dom";
import pencil from '../../assets/icon/pencil-icon.svg'
import certificate from '../../assets/icon/certificate-icon.svg'
import cources from '../../assets/icon/cources-icon.svg'
import gratuate from '../../assets/icon/gratuate-icon.svg'
import join from '../../assets/icon/join.png'
import share from '../../assets/icon/share.png';
import {AiFillCheckCircle} from 'react-icons/ai'
import Trend from "../Trend/Trend";

const Home = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img alt="learning" src="https://img.freepik.com/premium-vector/nerdy-graphic-designer-character-illustration_167995-1121.jpg?w=740" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <p className="py-6">Learn your favourite subject</p>
      <h1 className="text-5xl font-bold">Top & High Quality Online Courses For All</h1>
      <p className="py-6">Learning is fun & education</p>
      <Link to='/course'><button className="btn btn-primary">All Courses</button></Link>
    </div>
  </div>
</div>

<div className='grid grid-cols-1 lg:grid-cols-4 gap-5 w-11/12 lg:w-10/12 mx-auto my-6'>
            <div className="card card-side bg-base-100 shadow-xl hover:bg-gray-400
             ">
                <img className='ml-5' src={pencil} alt="Movie" />
                <div className="card-body">
                    <h2 className="card-title">10K!</h2>
                    <p>Online Courses</p>
                    
                </div>
            </div>
            
            <div className="card card-side bg-base-100 shadow-xl hover:bg-gray-400">
                <img className='ml-5'  src={cources} alt="Movie" />
                <div className="card-body">
                    <h2 className="card-title">200+</h2>
                    <p>Expert Tutors</p>
                    
                </div>
            </div>
            <div className="card card-side bg-base-100 shadow-xl hover:bg-gray-400">
                <img className='ml-5' src={certificate} alt="Movie" />
                <div className="card-body">
                    <h2 className="card-title">6K +</h2>
                    <p>Ceritified Courses</p>
                    
                </div>
            </div>
            <div className="card card-side bg-base-100 shadow-xl hover:bg-gray-400">
                <img className='ml-5' src={gratuate} alt="Movie" />
                <div className="card-body">
                    <h2 className="card-title">60K +</h2>
                    <p>Online Students</p>
                    
                </div>
            </div>
        </div>

        <div className='grid grid-cols-5 my-8'>
            <div className='col-span-5 lg:col-span-3 w-10/12 mx-auto my-auto '>
                <h3 className='text-xl text-primary font-medium mb-3'>What’s New</h3>
                <h1 className='text-4xl font-semibold mb-5'>Master the skills to drive your career</h1>
                <p>Get certified, master modern tech skills, and level up your career — whether you’re starting out or a seasoned pro. 95% of eLearning learners report our hands-on content directly helped their careers.</p>
            </div>
            <div className='col-span-3 lg:col-span-2'>
                <img src={join} alt="" />
            </div>
        </div>

        <Trend></Trend>

        <div className='w-11/12 mx-auto  grid grid-cols-5 my-32'>
            <div className='col-span-3 lg:col-span-2'>
                <img src={share} alt="" />
            </div>
            <div className='col-span-5 lg:col-span-3 w-10/12 mx-auto my-auto '>
            <h1 className='text-4xl font-semibold mb-5'>Want to share your knowledge? Join us a Mentor</h1>
            <p>High-definition video is video of higher resolution and quality than standard-definition. While there is no standardized meaning for high-definition, generally any video.</p>
           <div className='mt-5'>
           <span className='flex items-center gap-2 text-xl'><AiFillCheckCircle className='text-primary'></AiFillCheckCircle>Best Courses</span>
           <span className='flex items-center gap-2 text-xl'><AiFillCheckCircle className='text-primary'></AiFillCheckCircle>Top rated Instructors</span>
           </div>
            </div>
        </div>

    </div>
  );
};

export default Home;
