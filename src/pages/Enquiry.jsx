import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../components/lyout.jsx/Input";
import Button from "../components/lyout.jsx/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Textarea from "../components/lyout.jsx/Textarea";
import Select from "../components/lyout.jsx/Select";
import { CarOptions, months } from "../util/Utils";

function Enquiry() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log("data===>", data);
    // try {
    //   let formData = new FormData();
    //   formData.append("userName", data.name);
    //   formData.append("fullname", data.fullname);
    //   formData.append("email", data.email);
    //   formData.append("password", data.password);
    //   formData.append("avatar", data.avatar[0]);
    //   formData.append("coverImage", data.coverImage[0]);

    //   axios
    //     .post("/api/v1/users/register", formData, {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //       },
    //     })
    //     .then((res) => {
    //       console.log("res", res);
    //       if (res?.success) {
    //         reset();
    //         navigate("/login");
    //       }
    //     })
    //     .catch((error) => {
    //       console.log("error===>", error);
    //     });
    // } catch (error) {
    //   console.log("catch---error==>", error);
    // }
  };

  return (
    <>
      <div className="w-[90vw] md:flex md:justify-between space-y-4 md:space-y-0">
        <form onSubmit={handleSubmit(onSubmit)} className="md:w-1/3 p-4">
          <div className="space-y-5 w-full space-y-4 p-4 rounded-lg shadow-lg">
            <div className="md:flex inline  md:space-x-5">
              <Input
                label="Full Name"
                placeholder="Enter your first name"
                type="text"
                name="name"
                {...register("name", {
                  required: "please enter your first name",
                })}
                className={`${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                isError={errors.name}
                errorMessage={errors.name?.message}
              />

              <Input
                label="Phone No."
                placeholder="Enter your phone"
                type="tel"
                name="phone"
                {...register("phone", {
                  // required: true,
                  required: "please enter your phone number",
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
            <div className="md:flex inline  md:space-x-5">
              <Select
                options={CarOptions}
                label="Cars model"
                className="mb-2"
                {...register("car", { required: true })}
              />
              <Select
                options={months}
                label="Plan"
                className="mb-2"
                {...register("plan", { required: true })}
              />
            </div>

            <Select
              options={["Job", "Buisness", "Other"]}
              label="Occupation "
              className="mb-2"
              {...register("occupation", { required: true })}
            />

            <Textarea
              label="Address"
              placeholder="Enter your address"
              type="text"
              name="address"
              {...register("address", {
                required: "please enter your address",
              })}
              className={`${
                errors.address ? "border-red-500" : "border-gray-300"
              }`}
              isError={errors.address}
              errorMessage={errors.address?.message}
            />
            <Button
              type="submit"
              className="mt-4 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Submit
            </Button>
          </div>
        </form>

        <section className="md:w-1/2 p-4">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-6">Enquiry</h2>
            <p className="text-center text-md text-gray-600 mb-6">
              Experience the thrill of driving your dream car with a
              personalized test drive. Our team will assist you in selecting the
              perfect vehicle and ensure a smooth, enjoyable experience.
            </p>
            <div className="flex justify-center mb-6">
              <img
                // src={ciaz}
                alt="Car Model 1"
                className="w-full max-w-sm rounded-lg shadow-md"
              />
            </div>

            <div className="text-center text-gray-600">
              <h2 className="text-3xl font-bold text-center mb-2">
                SHOWROOM ADDRESS
              </h2>
              <h2 className="text-md font-bold text-center">
                {" "}
                Maruti Suzuki ARENA (Hilltop Motors, Ranchi, Ashok Nagar Road)
              </h2>

              <p>
                Whether you are on the lookout for a Hatchback, Sedan, SUV/MUV
                or Van the first thing you need to do is find the right car
                dealership in Ranchi. Your search in Ashok Nagar Road for a ‘car
                showroom near me’ has brought you here to Hilltop Motors Ashok
                Nagar Road, Ranchi.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Enquiry;
