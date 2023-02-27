import React from 'react';
import { BsBook, BsClock } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const CourseCard = ({ course }) => {
    const { name, img, instructor, lectures, duration ,ratings} = course
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure className="px-5 pt-5">
                <img src={img} alt="Shoes" className="rounded-xl h-52 w-72  " />
            </figure>
            <div className="card-body  ">
                <h2 className="card-title">{name}</h2>
                <div className=' mt-5 flex items-center gap-4'>
                    <div className="avatar ">
                        <div className="w-12 rounded-full ">
                            <img src={instructor?.instImg} alt='' />

                        </div>
                    </div>
                    <p className='text-lg font-semibold '>{instructor?.instname}</p>
                </div>
               
                <div className="card-actions justify-between">
                    <div>
                        <span className='flex items-center gap-1 text-lg '> <BsBook className=' text-red-400 '></BsBook> {lectures}+ lesson </span>
                    </div>
                    <div>
                        <span className='flex items-center gap-1 text-lg '> <BsClock className=' text-blue-400 '></BsClock>{duration}</span>
                    </div>

                </div>
                <div className="rating">
                    {
                        [1,2,3,4,5].map(star=><input key={star} type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked={star===ratings} />)
                    }
                    
                </div>
                  <div className="card-actions justify-end">
                    <Link to={`/course/${course.id}`}  className="btn btn-primary">Enroll</Link>
                </div> 
            </div>
        </div>
    );
};

export default CourseCard;