import React from 'react'
import Input from '../components/lyout.jsx/Input';
import Button from '../components/lyout.jsx/Button';
import { useForm } from 'react-hook-form';
import { login as authLogin } from "../store/authSlice"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();

  const dispatch = useDispatch();
  const navigate=useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      dispatch(authLogin(result?.data));

      localStorage.setItem("token", result?.data?.accessToken);

      // Reset the form fields
      reset();

      if(result.success){
        navigate("/home")
      }

    } catch (error) {
      throw error;
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='sign-up'>
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}


        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
        <Input
          label="email"
          placeholder="please enter your email"
          type="email"
          name="email"
          {...register("email", {
            required: true,
            validate: {
              matchPatern: (value) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                "Email address must be a valid address",
            },
          })}
        />

        {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
        <Input
          label="password"
          placeholder="please enter your password"
          type="password"
          name="password"
          {...register("password", {
            required: "please enter your password"
          })}
        />

        <Button type='submit'>
          Save
        </Button>
      </div>
    </form>
  )
}

export default Login