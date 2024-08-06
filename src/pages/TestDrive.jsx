import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../components/lyout.jsx/Input";
import Button from "../components/lyout.jsx/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Textarea from "../components/lyout.jsx/Textarea";
import Select from "../components/lyout.jsx/Select";
import { CarOptions, months } from "../util/Utils";
import ciaz from "../assets/ciaz.webp";
function TestDrive() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log("data===>", data);
    try {
      let formData = new FormData();
      formData.append("userName", data.name);
      formData.append("fullname", data.fullname);
      formData.append("email", data.email);
      formData.append("password", data.password);
      // formData.append("avatar", data.avatar[0]);
      // formData.append("coverImage", data.coverImage[0]);

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
    <>
      <div className="md:flex md:justify-between space-y-4 md:space-y-0">
        <section className="md:w-1/2 p-4">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-6">
              Book Your Test Drive
            </h2>
            <p className="text-center text-md text-gray-600 mb-6">
              Experience the thrill of driving your dream car with a
              personalized test drive. Our team will assist you in selecting the
              perfect vehicle and ensure a smooth, enjoyable experience.
            </p>
            <div className="flex justify-center mb-6">
              <img
                src={ciaz}
                alt="Car Model 1"
                className="w-full max-w-sm rounded-lg shadow-md"
              />
            </div>
            <div className="text-center text-gray-600">
              <p>
                Explore various models and choose the one that fits your needs.
                Our experts are here to guide you every step of the way.
              </p>
            </div>
          </div>
        </section>

        <form onSubmit={handleSubmit(onSubmit)} className="md:w-1/3 p-4">
          <div className="w-full space-y-4 p-4 rounded-lg shadow-lg bg-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Schedule Your Test Drive
            </h2>
            <div className="md:flex md:space-x-5">
              <Input
                label="First Name"
                placeholder="Enter your first name"
                type="text"
                name="name"
                {...register("name", {
                  required: "Please enter your first name",
                })}
                className={`${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                isError={errors.name}
                errorMessage={errors.name?.message}
              />
              <Input
                label="Last Name"
                placeholder="Enter your last name"
                type="text"
                name="fullname"
                {...register("fullname", {
                  required: "Please enter your last name",
                })}
                className={`${
                  errors.fullname ? "border-red-500" : "border-gray-300"
                }`}
                isError={errors.fullname}
                errorMessage={errors.fullname?.message}
              />
            </div>
            <div className="md:flex md:space-x-5">
              <Input
                label="Email"
                placeholder="Enter your email"
                type="email"
                name="email"
                {...register("email", {
                  required: "Please enter your email",
                  validate: {
                    matchPattern: (value) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                        value
                      ) || "Email address must be a valid address",
                  },
                })}
                className={`${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                isError={errors.email}
                errorMessage={errors.email?.message}
              />
              <Input
                label="Phone No."
                placeholder="Enter your phone number"
                type="tel"
                name="phone"
                {...register("phone", {
                  required: "Please enter your phone number",
                  validate: {
                    matchPattern: (value) =>
                      /^\d{10}$/.test(value) ||
                      "Phone number must be a valid 10-digit number",
                  },
                })}
                className={`${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
                isError={errors.phone}
                errorMessage={errors.phone?.message}
              />
            </div>
            <Textarea
              label="Address"
              placeholder="Enter your address"
              name="address"
              {...register("address", {
                required: "Please enter your address",
              })}
              className={`${
                errors.address ? "border-red-500" : "border-gray-300"
              }`}
              isError={errors.address}
              errorMessage={errors.address?.message}
            />
            <Select
              options={CarOptions}
              label="Cars"
              {...register("car", { required: true })}
              className="mb-4"
            />
            <Select
              options={months}
              label="Plan"
              {...register("plan", { required: true })}
              className="mb-4"
            />
            <div className="md:flex md:space-x-5">
              <Input
                label="Select Date"
                placeholder="Select date for test drive"
                type="date"
                name="date"
                {...register("date", { required: "Please select date" })}
                className={`${
                  errors.date ? "border-red-500" : "border-gray-300"
                }`}
                isError={errors.date}
                errorMessage={errors.date?.message}
              />
              <Input
                label="Select Time"
                placeholder="Select time for test drive"
                type="time"
                name="time"
                {...register("time", { required: "Please select time" })}
                className={`${
                  errors.time ? "border-red-500" : "border-gray-300"
                }`}
                isError={errors.time}
                errorMessage={errors.time?.message}
              />
            </div>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default TestDrive;
