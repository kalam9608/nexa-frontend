import React, { useState } from "react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Container from "../components/lyout.jsx/Container";
import ImageViewer from "../components/ImageViewer";
import car from "../assets/car2.jpg";
import Button from "../components/lyout.jsx/Button";
import { NavLink } from "react-router-dom";
import FeedBack from "../components/FeedBack";
import ciaz from "../assets/ciaz.webp";
import home from "../assets/car1.webp";
import jimny from "../assets/jimny.webp";
import Ignis from "../assets/ignis.webp";
import fronx from "../assets/FRONX.webp";
const Home = () => {
  // const [images, setImages] = useState([
  //   { image: "src/assets/car1.webp" },
  //   { image: "src/assets/car2.jpg" },
  //   { image: "src/assets/inova.jpg" },
  // ]);
  const images = [
    {
      imageUrl: ciaz,
    },
    {
      imageUrl: home,
    },
    {
      imageUrl: jimny,
    },
    {
      imageUrl: fronx,
    },
    {
      imageUrl: Ignis,
    },
  ];
  const [activeImageIndex, setActiveImageIndex] = useState("");
  const [imageModal, setImageModal] = useState(false);
  const [openImage, setOpenImage] = useState(null);
  const CloseImageViewer = () => {
    setImageModal(false);
    setOpenImage(null);
  };

  return (
    <>
      {images.length > 0 ? (
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation, A11y]}
          className="w-full h-full"
        >
          {images.map((item, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <button
                className="m-1"
                // onClick={() => {
                //   setImageModal(true);
                //   setOpenImage(item.image);
                //   setActiveImageIndex(index);
                // }}
              >
                <img
                  src={item.imageUrl}
                  className="object-fill h-[40%] w-[100%] sm:h-[60%] md:h-[60%] lg:h-[60%] xl:h-[80%]"
                  alt={`Slide ${index}`}
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <img
          src={"src/assets/unsplash.jpg"}
          className="h-[300px] object-contain rounded-t m-auto"
          alt="Default"
        />
      )}

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
                Welcome to Nexa Showroom! Our dedicated salesman is here to help
                you find the perfect car. We offer a wide range of Nexa vehicles
                and personalized service to ensure you have a great experience.
              </p>

              <p className="text-md text-gray-700 ">
                We have a trained and skilled workforce to offer our customers a
                delightful car buying experience. We, at Hilltop Motors, are
                motivated to cater to all the automotive demands of our
                customers.
              </p>
              <Button type="submit" className=" text-center">
                <NavLink to="about" className=" md:text-md text-xs">
                  Read More
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className=" overflow-hidden">
        <h1 className="my-6 text-center text-3xl font-semibold text-blue-800 ">
          Customer Feedback
        </h1>
        <div className="container mx-auto max-w-3xl">
          <FeedBack />
        </div>
      </div>

      <ImageViewer
        ImageModal={imageModal}
        closeModal={CloseImageViewer}
        Images={images.slice(activeImageIndex)}
        slideIndex={activeImageIndex}
      />
    </>
  );
};

export default Home;
