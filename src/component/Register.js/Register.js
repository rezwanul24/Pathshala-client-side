import React from 'react';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Register = () => {

    const {creatUser, updateUserProfile} = useContext(AuthContext)

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        creatUser(email,password)
        .then(result => {
            const user = result.user;
            console.log(user)
            toast.success('Create account success');
            updateUserProfile(name, photo)
            .then(()=> {})
            .catch(error => {})
        })
        .catch(error => {toast.error(error.massage)})
    }
    
    return (
        <div className=" flex gap-5  min-h-screen bg-base-200  flex-col justify-center items-center">
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Register now!</h1>
            </div>
            <div  className="card w-11/12 lg:w-4/12  mx-auto  shadow-2xl bg-base-100">
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="enter name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="enter photo url"
                            name='photo'
                            className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="enter email" className="input input-bordered" name='email' required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="enter password"
                            className="input input-bordered" 
                            name='password'
                            required
                            />

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="confirm password"
                            className="input input-bordered" 
                            name='confirm'
                            required
                            />
                        <label className="label">
                            <Link to='/login' className="label-text-alt link link-hover">Already have an account</Link>
                        </label>

                    </div>
                    
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>


                </form>
            </div>
        </div>
    );
};

export default Register;