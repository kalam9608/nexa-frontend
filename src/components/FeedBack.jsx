import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import avatar from "../assets/avatar.jpg";
const feedbacks = [
  {
    id: 1,
    message: "Great service and excelent delivery by RN-ASIF ",
    customer: "Avinash Suman",
  },
  {
    id: 2,
    message: "I love my new car from Nexa Showroom!",
    customer: "Bishnu Shahu",
  },
  {
    id: 3,
    message: "Highly recommend this place for your next car purchase.",
    customer: "Md Maqshud Alam",
  },
];
const FeedBack = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <Slider {...settings}>
      {feedbacks.map((feedback) => (
        <div
          key={feedback.id}
          className="flex flex-wrap md:flex-nowrap justify-center"
        >
          <div className=" p-4 rounded-lg  text-center m-2 w-full md:w-auto">
            <div className="w-24 h-24 mx-auto mb-4">
              <img
                src={avatar}
                alt="Customer"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <p className="text-black text-lg font-semibold mt-2">
              {feedback.customer}
            </p>
            <p className="text-black mt-2">{feedback.message}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default FeedBack;
