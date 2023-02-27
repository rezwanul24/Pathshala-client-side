import React from 'react';
import { Link, useLocation, useNavigate  } from 'react-router-dom';
import {FaGoogle, FaGithub} from 'react-icons/fa'
import { GithubAuthProvider, GoogleAuthProvider} from 'firebase/auth'
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-hot-toast';



const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();



const Login = () => {

    let location = useLocation();
    let from = location.state?.from?.pathname || '/';
    let navigate=useNavigate();
    
    const {loginWithEmailAndPassword, loginWithPopUp} = useContext(AuthContext);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginWithEmailAndPassword(email, password)
        .then(result => {
            const user = result.user;
            toast.success('login successfully');
            console.log(user);
            navigate(from,{replace: true});
        })
        .catch(error => {
            // console.log(error)
            toast.error(error.message);
        })
    }

    const handleGoogleSignIn = () => {
        loginWithPopUp(googleProvider)
        .then(result => {
            const user = result.user;
            toast.success('login successfully');
            // console.log(user);
            navigate(from,{replace: true});
        })
        .catch(error => {
            // console.log(error)
        })
    }

    const handleGithubSignIn = () => {
        loginWithPopUp(githubProvider)
        .then(result => {
            const user = result.user;
            toast.success('login successfully');
            // console.log(user);
            navigate(from,{replace: true});
        })
        .catch(error => {
            // console.log(error)
        })
    }


    return (
        <div className=" flex gap-5  min-h-screen bg-base-200  flex-col justify-center items-center">
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="card w-11/12 lg:w-4/12  mx-auto  shadow-2xl bg-base-100">
                <div className="card-body">
                    <form onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="enter email" className="input input-bordered" name='email' required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="enter password" className="input input-bordered" name='password' required />
                            <label className="label">
                                <Link to='' className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                            <label className="label">
                                <Link to='/register' className="label-text-alt link link-hover">Create an account</Link>
                            </label>

                        </div>
                        
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="divider">OR</div>
                    <div className="flex justify-evenly mt-6">
                        <button onClick={handleGoogleSignIn} className=""><FaGoogle className=' text-2xl hover:text-primary '></FaGoogle></button>
                        <button onClick={handleGithubSignIn} className=""><FaGithub className=' text-2xl hover:text-primary'></FaGithub></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;