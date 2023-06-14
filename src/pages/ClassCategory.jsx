import React from "react";
import useClass from "../hooks/useClass";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Link } from "react-router-dom";

const ClassCategory = () => {
  const [classes] = useClass();

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-orange-500 text-center mb-4">
        Enchanting Courses
      </h1>
      <h1 className="text-2xl font-bold text-slate-900 text-center mb-8">
        Unleash Your Potential and Explore New Horizons
      </h1>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        {" "}
        {classes.map((classItem) => (
          <SwiperSlide key={classItem._id}>
            <Link to="/classes">
              <div className="relative">
                <img
                  className="h-36 w-auto md:h-96 md:w-72 object-cover border-2 border-orange-500 rounded"
                  src={classItem.cover_picture}
                  alt="Slide 1"
                />
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="absolute bottom-0 w-full text-center">
                  <h3 className="md:text-4xl uppercase text-orange-500 font-bold shadow-xl">
                    {classItem.title}{" "}
                    <span className="md:text-2xl text-slate-300">tutor</span>{" "}
                    <br />
                  </h3>
                  <h2 className="md:text-3xl shadow-xl pb-10 text-white font-bold">
                    {classItem.instructor_name}
                  </h2>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="bg-black rounded my-12 h-1 w-full"></div>
    </div>
  );
};

export default ClassCategory;
