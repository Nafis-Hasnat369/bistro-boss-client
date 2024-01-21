import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log('User profile updated');
                        reset();
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Updated profile successfully!",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    })
                    .catch(error => console.log(error))
            })
    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" {...register("name")} name="name" placeholder="name" className="input input-bordered" required />
                                {errors.name && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photoURL")} name="photoURL" placeholder="photoURL" className="input input-bordered" required />
                                {errors.photoURL && <span>Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email")} name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20 })} name="password" placeholder="password" className="input input-bordered" required />
                                {errors.password?.type === 'required' && <span className="text-red-600">Password is required </span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be 6 characters</span>}
                                {errors.password?.type === 'maxLength' && <span className="text-red-600">Password cannot be more than 20 characters</span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Sign Up" />
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <p className='text-center mb-3'><small>Already have an account? <Link className='hover:color-red-600 link-hover' to="/login">Login Now</Link></small></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;