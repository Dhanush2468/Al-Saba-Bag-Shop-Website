import React from 'react';
import { useForm } from 'react-hook-form';
import './SignUp.css';
import Navbar from '../Navbar/Navbar';

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <section>
      <div>
        <Navbar />
      <div className="register-container">
        <div className="col-1">
          <h2 className='logintitle' >Registration Form</h2>
          <span>Register and enjoy the service</span>

          <form className="form-container flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <input type="email" {...register("email")} placeholder="Email" />
            <input type="text" {...register("username")} placeholder="Username" />
            <input type="password" {...register("password")} placeholder="Password" />
            <input type="password" {...register("confirmpwd")} placeholder="Confirm Password" />
            {errors.email?.type === "required" && "Email is required"}
            {errors.email?.type === "pattern" && "Invalid email format"}
            <button className="btn">Sign Up</button>
          </form>

          <p className="login-text">Already registered? <a href="/login">Login</a></p>
        </div>
        <div className="col-2">
          <img src="https://img.freepik.com/premium-psd/arrangement-with-school-bag-supplies_23-2148278198.jpg" alt="" />
        </div>
      </div>
      </div>
    </section>

  );
};

export default SignUp;
