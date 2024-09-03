import React from "react";
import baleno from "../assets/baleno.webp";
import Ignis from "../assets/ignis.webp";
import fronx from "../assets/FRONX.webp";
import ciaz from "../assets/ciaz.webp";
import jimny from "../assets/jimny.webp";
import grandVitara from "../assets/vitara.webp";

const cars = [
  {
    name: "Ignis",
    price: "₹5.35 - ₹7.72 Lakh",
    mileage: "20.89 kmpl",
    features: ["Petrol", "Manual", "1197cc", "5 Seater"],
    offers: ["5% cashback on booking", "2 years free service"],
    image: Ignis,
  },
  {
    name: "Baleno",
    price: "₹6.35 - ₹9.49 Lakh",
    mileage: "21.01 kmpl",
    features: ["Petrol", "Manual/Automatic", "1197cc", "5 Seater"],
    offers: ["Free insurance for 1 year", "5% cashback on booking"],
    image: baleno,
  },
  {
    name: "Fronx",
    price: "₹7.35 - ₹11.49 Lakh",
    mileage: "18.55 kmpl",
    features: ["Petrol", "Manual/Automatic", "1498cc", "5 Seater"],
    offers: ["Free insurance for 2 years", "10% cashback on booking"],
    image: fronx,
  },
  {
    name: "Grand Vitara",
    price: "₹9.99 - ₹19.49 Lakh",
    mileage: "21.80 kmpl",
    features: ["Petrol", "Manual/Automatic", "1462cc", "5 Seater"],
    offers: ["Free insurance for 1 year", "5% cashback on booking"],
    image: grandVitara,
  },
  {
    name: "Jimny",
    price: "₹12.50 - ₹15.00 Lakh",
    mileage: "16.00 kmpl",
    features: ["Petrol", "Manual", "1462cc", "4 Seater"],
    offers: ["5% cashback on booking", "3 years free service"],
    image: jimny,
  },
  {
    name: "Ciaz",
    price: "₹8.72 - ₹11.85 Lakh",
    mileage: "20.65 kmpl",
    features: ["Petrol/Diesel", "Manual/Automatic", "1373cc", "5 Seater"],
    offers: ["Free insurance for 1 year", "10% cashback on booking"],
    image: ciaz,
  },
  {
    name: "Invicto",
    price: "₹16.00 - ₹25.00 Lakh",
    mileage: "18.55 kmpl",
    features: ["Petrol", "Automatic", "1998cc", "7 Seater"],
    offers: ["5% cashback on booking", "2 years free service"],
    image: ciaz,
  },
];
const Cars = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Welcome to Nexa Showroom
      </h1>
      {cars.map((car, index) => (
        <>
          <h2 className="text-2xl font-semibold mb-4 md:text-3xl lg:text-4xl text-center text-blue-900 uppercase underline">
            {car.name}
          </h2>
          <CarSection key={index} car={car} />
        </>
      ))}
    </div>
  );
};

export default Cars;

function CarSection({ car }) {
  return (
    <div className=" md:flex space-x-2 inline justify-center md:shadow-md rounded-lg p-6 mb-8 md:p-8 lg:p-10">
      <div className="flex justify-center mb-4">
        <img
          src={car.image}
          alt={car.name}
          className=" w-full h-40 object-cover rounded-lg"
        />
      </div>
      <div className=" md:shadow-none shadow-md shadow-lg justify-center p-4">
        {/* <h2 className="text-2xl font-semibold mb-4 md:text-3xl lg:text-4xl">
          {car.name}
        </h2> */}
        <p className="text-gray-600 mb-2 text-sm md:text-base lg:text-lg">
          <strong>Price:</strong> {car.price}
        </p>
        <p className="text-gray-600 mb-2 text-sm md:text-base lg:text-lg">
          <strong>Mileage:</strong> {car.mileage}
        </p>
        <p className="text-gray-600 mb-2 text-sm md:text-base lg:text-lg">
          <strong>Features:</strong> {car.features.join(", ")}
        </p>
        <p className="text-gray-600 mb-2 text-sm md:text-base lg:text-lg">
          <strong>Offers:</strong> {car.offers.join(", ")}
        </p>
      </div>
    </div>
  );
}
