import React from 'react';
import { useForm } from 'react-hook-form';
import './SignUp.css';
import Navbar from '../Navbar/Navbar';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <section>
      <div>
        <Navbar />
      <div className="register-container">
        <div className="col-1">
          <h2 className='logintitle'>Login Form</h2>

          <form className="form-container flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <input type="email" {...register("email")} placeholder="Email" />
            <input type="text" {...register("username")} placeholder="Username" />
            <input type="password" {...register("password")} placeholder="Password" />
            {errors.email?.type === "required" && "Email is required"}
            {errors.email?.type === "pattern" && "Invalid email format"}
            <button className="btn">Login</button>
          </form>

          <p className="login-text">Din't Have An Account? <a href="/signup">SignUp</a></p>
        </div>
        <div className="col-2">
          <img src="https://e0.pxfuel.com/wallpapers/712/601/desktop-wallpaper-premium-of-woman-with-shopping-bags-and-a-credit-card-against-a-pink-background-by-teddy-about-shopping-shopping-bag-credit-card-money-and-ho-pink-background-credit-card.jpg" alt="" />
        </div>
      </div>
      </div>
    </section>
  );
};

export default Login;
