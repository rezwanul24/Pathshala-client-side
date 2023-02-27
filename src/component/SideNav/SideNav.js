import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
    const [courses,setCourses]=useState([])
    useEffect(()=>{
        fetch('https://pathshala-server-iota.vercel.app/courses')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
    return (
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-200 text-base-content">
                    <li><Link to=''>All Courses</Link></li>
                    {
                        courses.map(course=>
                        <li key={course.id}><Link to={`/course/${course.id}`}>{course.tag}</Link></li>)
                    }
         </ul>
    );
};

export default SideNav;