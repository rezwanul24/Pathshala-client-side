import React from 'react';
import { BsBook, BsClock } from 'react-icons/bs';
import { GiLevelEndFlag } from 'react-icons/gi';
import { HiOutlineUserGroup } from 'react-icons/hi'
import { Link } from 'react-router-dom';
// import Pdf from "react-to-pdf";
const ref = React.createRef();
const Details = ({ data }) => {
    const options = {
        orientation: 'landscape',
        unit: 'in',
        format: [14, 8]
    };
    const { name, img, instructor, lectures, duration, ratings, level, enrolled, description, curriculum, price, id } = data;
    // console.log(data);
    return (
        <>{data?.id?
            <div>
                <div className='grid grid-cols-12 items-center bg-neutral text-white '>
                    <div className='col-span-12 lg:col-span-10 '>
                        <h1 className='text-4xl text-center my-3'>{name}</h1>

                        <div className="flex justify-evenly my-5">
                            <div>
                                <span className='flex items-center gap-1 text-lg '> <BsBook className=' text-red-400 '></BsBook> {lectures}+ lesson </span>
                            </div>
                            <div>
                                <span className='flex items-center gap-1 text-lg '> <BsClock className=' text-blue-400 '></BsClock>{duration}</span>
                            </div>

                            <div>
                                <span className='flex items-center gap-1 text-lg '> <GiLevelEndFlag className=' text-orange-400 '></GiLevelEndFlag>{level}</span>
                            </div>

                            <div>
                                <span className='flex items-center gap-1 text-lg '> <HiOutlineUserGroup className=' text-green-400 '></HiOutlineUserGroup>{enrolled}+ Enrolled</span>
                            </div>

                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-2 flex justify-center pb-4 lg:pb-0'>
                        {/* <Pdf targetRef={ref} filename="Course-details.pdf" options={options}
                        // x={5} y={.5} scale={0.8}
                        >
                            {({ toPdf }) => <button className='btn btn-primary' onClick={toPdf}> Download PDF</button>}
                        </Pdf> */}
                    </div>

                </div>


                <div className='grid grid-cols-7' ref={ref}  >
                    <div className=' col-span-7 lg:col-span-5 p-4 bg-base-200 rounded-xl m-4'>
                        <h1 className='text-xl font-semibold my-4'>Course Overview:</h1>
                        <p className='text-lg'>{description}</p>
                        <div className='divider '> </div>
                        <h1 className='text-xl font-semibold my-4'>What you'll learn:</h1>
                        <ul className='list-disc ml-4'>
                            {
                                curriculum?.map((text, index) => <li key={index}>{text}</li>)
                            }
                        </ul>

                    </div>
                    <div className='col-span-7 lg:col-span-2 p-4 bg-base-200 rounded-xl m-4'>
                        <img src={img} alt="" />
                        <h1 className='text-3xl my-4 font-semibold text-primary'>Price: {price}$</h1>
                        <div className=' mt-5 flex items-center gap-4'>
                            <div className="avatar ">
                                <div className="w-12 rounded-full ">
                                    <img src={instructor?.instImg} alt='' />

                                </div>
                            </div>
                            <p className='text-lg font-semibold '>{instructor?.instname}</p>
                        </div>
                        <div className="rating my-5">
                            {
                                [1, 2, 3, 4, 5].map(star => <input key={star} type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked={star === ratings} />)
                            }

                        </div>
                        <div className="flex justify-center my-5">
                            <Link to={`/checkout/${id}`} className="btn btn-primary">Purchase</Link>
                        </div>
                    </div>

                </div>
            </div>:
            <div className='flex justify-center items-center min-h-[60vh]'>
                <h1 className='text-4xl text-red-500'>(404) Data not found</h1>
            </div>
                    }</>
    );
};

export default Details;