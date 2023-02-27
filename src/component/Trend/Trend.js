import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';
import Loading from '../Loading/Loading';

const Trend = () => {
    const [loading,setLoading]=useState(false);
    const [data,setData]=useState([]);

    useEffect(()=>{
        setLoading(true);
        fetch(`https://pathshala-server-iota.vercel.app/courses`)
        .then(res=>res.json())
        .then(data=>{
            setData(data)
            setLoading(false)
        })
    },[])
    return (
        <div className='w-10/12 mx-auto my-5 pt-12'>
            <div className='flex justify-between items-center'>
            <h1 className='text-4xl text-primary font-semibold mb-5'>Trending Courses</h1>
            <Link to='/course' className='btn btn-primary'>All Courses</Link>
            </div>
            <div>
            {loading?
                <Loading></Loading>:
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-10 w-11/12 mx-auto'>
                    {
                        data?.slice(0,3)?.map(course=>
                        <CourseCard
                        key={course.id}
                        course={course}
                        ></CourseCard>)
                    }
                </div>
            }
            </div>
        </div>
    );
};

export default Trend;