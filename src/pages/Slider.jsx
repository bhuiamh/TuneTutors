import React, { useState, useEffect } from "react";
import LazyLoad from "react-lazy-load";

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

  const allImagesLoaded = imageLoaded.every((loaded) => loaded);

  return (
    <div className="carousel-container m-5">
      <div className="carousel rounded-lg overflow-hidden">
        <div
          className="carousel-inner flex"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className="carousel-item flex-shrink-0 w-full h-96"
            >
              {!imageLoaded[index] && (
                <div className="w-full h-full flex items-center justify-center">
                  <p>Loading...</p>
                </div>
              )}
              <LazyLoad height={762}>
                <img
                  src={item}
                  className={`w-full h-full object-cover ${
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
      {allImagesLoaded && (
        <p className="py-4 text-4xl font-bold text-orange-500">
          Our Special Instrument
        </p>
      )}
    </div>
  );
};

export default Slider;
