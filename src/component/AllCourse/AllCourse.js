import React, { useEffect, useState } from 'react';
import CourseCard from '../CourseCard/CourseCard';
import Loading from '../Loading/Loading';

const AllCourse = () => {
    const [loading,setLoading]=useState(false);
    const [data,setData]=useState([]);

    useEffect(()=>{
        setLoading(true);
        fetch(`https://pathshala-server-iota.vercel.app/courses`)
        .then(res=>res.json())
        .then(data=>{

            return setData(data);
           
        })
        .catch(error=>{
            console.log(error.message);
        })
        .finally(()=>{
            setLoading(false);
        })
    },[])
    return (
        <div>
            {loading?
                <Loading></Loading>:
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-10 w-11/12 mx-auto'>
                    {
                        data.map(course=>
                        <CourseCard
                        key={course.id}
                        course={course}
                        ></CourseCard>)
                    }
                </div>
            }
            
        </div>
    );
};

export default AllCourse;