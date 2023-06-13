import React, { useState, useEffect } from "react";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const Slider = () => {
  const carouselItems = [
    "https://drive.google.com/uc?id=1M0z3xlY-CfJw-VZ1PeDaeqwNsqHxYlTZ",
    "https://drive.google.com/uc?id=1s742No4JEflBi9pGxqDKTq5UqHL3Crp2",
    "https://drive.google.com/uc?id=1M0z3xlY-CfJw-VZ1PeDaeqwNsqHxYlTZ",
    "https://drive.google.com/uc?id=1E8Rth6HlwZFXFYON7hte48Bs_bfgfIMd",
    "https://drive.google.com/uc?id=1zTuKbXncQdLV4E-ogjGc4z7uvYt69VJr",
    "https://drive.google.com/uc?id=1Lt9joWGRRQIiNtRip1YVDT27EVBXq5KZ",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(
    Array(carouselItems.length).fill(false)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleImageLoad = (index) => {
    const updatedImageLoaded = [...imageLoaded];
    updatedImageLoaded[index] = true;
    setImageLoaded(updatedImageLoaded);
  };

  return (
    <div className="container mx-auto m-5">
      <div className="flex flex-col md:flex-row">
        <div className="carousel w-full md:w-1/2 rounded-lg overflow-hidden">
          <div
            className="flex"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {carouselItems.map((item, index) => (
              <div
                key={index}
                className="carousel-item flex-shrink-0 w-full h-96"
              >
                {!imageLoaded[index] && (
                  <div className="flex items-center justify-center">
                    <iframe src="https://lottie.host/?file=ac25520e-2c79-49ce-8047-7be92056dd89/cytrNoAY7e.json"></iframe>
                  </div>
                )}
                <LazyLoad height={762}>
                  <img
                    src={item}
                    className={`w-full h-full object-fill ${
                      imageLoaded[index] ? "opacity-100" : "opacity-0"
                    }`}
                    alt={`Toy ${index + 1}`}
                    onLoad={() => handleImageLoad(index)}
                  />
                </LazyLoad>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="py-4 text-4xl font-bold text-orange-500">
            Discover Your Musical Potential
          </h1>
          <p className="text-slate-900 p-4">
            TuneTutors is an exceptional music instrument learning platform that
            caters to both online and offline learners. Whether you prefer the
            convenience of online lessons or the interactive experience of
            in-person instruction, TuneTutors is your ultimate destination.
            During the summer season vacation, we offer a diverse range of
            engaging and immersive music lessons, tailored to help you unlock
            your musical talents on your favorite instrument. Our team of expert
            instructors specializes in teaching a variety of instruments,
            including guitar, piano, drums, and more. With flexible scheduling
            options, you have the freedom to learn at your own pace and in the
            comfort of your own home through our user-friendly online platform.
            Alternatively, you can opt for in-person lessons at one of our
            physical locations. Experience the sheer joy of music and make the
            most of your summer break with TuneTutors, where your journey
            towards mastering an instrument becomes a truly enjoyable and
            fulfilling experience, no matter where you are.
          </p>
          <Link to="/classes">
            {/* todo-add an appropriate button link */}
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded ">
              Enroll Now
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-black rounded my-12 h-1 w-full"></div>
    </div>
  );
};

export default Slider;
