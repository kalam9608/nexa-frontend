import React, { useState } from "react";
import Container from "../components/lyout.jsx/Container";
import car from "../assets/car2.jpg";
import FeedBack from "../components/FeedBack";
const About = () => {
  return (
    <Container>
      <div className="bg-gray-100 min-h-screen pb-2">
        <div className="mx-auto  rounded-lg shadow-sm overflow-hidden">
          <div className="p-8 flex flex-col	justify-center	items-center	">
            <h1 className="mb-6 text-3xl font-semibold text-blue-800 underline">
              About Us
            </h1>
            <div className="w-full max-w-5xl md:flex inline md:space-x-8 justify-between  ">
              <img
                src={car}
                alt="Car"
                className="md:w-1-6 w-full md:h-60 h-30 object-cover rounded-md"
              />
              <div className="m-2 md:px-8 px-2">
                <p className="text-md text-gray-700 my-4 ">
                  Welcome to Nexa Showroom! Our dedicated salesman is here to
                  help you find the perfect car. We offer a wide range of Nexa
                  vehicles and personalized service to ensure you have a great
                  experience.
                </p>

                <p className="text-md text-gray-700 ">
                  We have a trained and skilled workforce to offer our customers
                  a delightful car buying experience. We, at Hilltop Motors, are
                  motivated to cater to all the automotive demands of our
                  customers.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-8 flex flex-col	justify-center	items-center	">
          <h1 className="mb-6 text-3xl font-semibold text-blue-800 underline">
            Photo Gallery
          </h1>
          <div className="w-full max-w-5xl md:flex inline md:space-x-8 justify-between  ">
            <div className="flex md:flex-nowrap flex-wrap  justify-center space-x-1  mb-8">
              {[1, 2, 3, 4, 5].map((v) => (
                <img
                  src={car}
                  alt="Car"
                  className=" md:w-1/2 w-full h-40 object-cover rounded-lg m-2"
                />
              ))}
            </div>
          </div>
        </div>
        <div className=" overflow-hidden">
          <h1 className="my-2 text-center text-3xl font-semibold text-blue-800 underline">
            Customer Feedback
          </h1>
          <div className="container mx-auto max-w-3xl">
            <FeedBack />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
