import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';


const CheckOut = () => {

    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});
    useEffect(() => {
        setLoading(true);
        fetch(`https://pathshala-server-iota.vercel.app/course/${id}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
    }, [id])

    const handleSubmit=(event)=>{
        event.preventDefault()
        toast.success('Purchase successfully!!');
    }

    return (

        <div>
            {
                loading ?
                    <Loading></Loading> :
                    <div className='flex flex-col lg:flex-row justify-center items-center min-h-[90vh] gap-10 my-10'>
                        <div className="card w-96 bg-base-100 shadow-xl image-full">
                            <figure><img src={data?.img} alt="Shoes" /></figure>
                            <div className="card-body text-center my-auto">
                                <h2 className="text-3xl">{data?.name}</h2>
                                <p className='text-xl'>Price: ${data?.price}</p>
                                <p>Level: {data?.level}</p>
                            </div>
                        </div>


                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form className="card-body" onSubmit={handleSubmit}>
                                <h1 className='text-3xl'> Your Information:</h1>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="enter full name" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Contact Number</span>
                                    </label>
                                    <input type="number" placeholder="enter phone number" className="input input-bordered" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="enter email" className="input input-bordered"  required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">School/University</span>
                                    </label>
                                    <input type="text" placeholder="enter institute name" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button  className="btn btn-primary">Submit</button>
                                </div>
                            </form>

                        </div>
                    </div>

            }

        </div>
    );
};

export default CheckOut;