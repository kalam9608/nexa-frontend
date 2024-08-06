import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../components/lyout.jsx/Input";
import Button from "../components/lyout.jsx/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("data===>",data)
    try {
      let formData = new FormData();
      formData.append("userName", data.name);
      formData.append("fullname", data.fullname);
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("avatar", data.avatar[0]);
      formData.append("coverImage", data.coverImage[0]);

      axios
        .post("/api/v1/users/register", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log("res", res);
          if (res?.success) {
            reset();
            navigate("/login");
          }
        })
        .catch((error) => {
          console.log("error===>", error);
        });
    } catch (error) {
      console.log("catch---error==>", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="sign-up">
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        <Input
          label="user name"
          placeholder="please enter your name"
          type="text"
          // name="name"
          {...register("name", {
            required: "please enter your name",
          })}
        />

        {errors.fullname && (
          <p style={{ color: "red" }}>{errors.fullname.message}</p>
        )}
        <Input
          label="full name"
          placeholder="please enter your full name"
          type="text"
          // name="fullname"
          {...register("fullname", {
            required: "please enter your full name",
          })}
        />
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

        {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}
        <Input
          label="password"
          placeholder="please enter your password"
          type="password"
          name="password"
          {...register("password", {
            required: "please enter your password",
          })}
        />

        {errors.avatar && (
          <p style={{ color: "red" }}>{errors.avatar.message}</p>
        )}
        <Input
          label="Featured Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("avatar", { required: "please choose files" })}
        />

        {errors.coverImage && (
          <p style={{ color: "red" }}>{errors.coverImage.message}</p>
        )}
        <Input
          label="coverImage Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("coverImage", { required: "please choose files" })}
        />

        <Button type="submit">Save</Button>
      </div>
    </form>
  );
}

export default Signup;
