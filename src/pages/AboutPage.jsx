import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import name from "../assets/name.svg";

const AboutPage = () => {
  return (
    <div className=" px-8 text-white">
      <div className="max-w-2xl mx-auto">
        <div className="flex  items-start">
          <h1 className="text-4xl text-black font-bold mb-4">Welcome to</h1>
          <img className="ml-3 h-10" src={name} alt="" />
        </div>
        <h2 className="text-2xl text-black font-bold mb-4">
          Learn, Explore, and Create with Us
        </h2>
        <p className="text-lg text-slate-900 mb-6">
          TuneTutors is a Summer Camp Learning School that offers a wide range
          of extra-curricular activities for students to enroll and learn during
          their summer break. Our mission is to provide an immersive and
          enriching experience that combines education, creativity, and personal
          development.
        </p>
        <p className="text-slate-900 text-lg mb-6">
          At TuneTutors, we believe that learning goes beyond traditional
          academics. Our expert instructors are passionate about their craft and
          are dedicated to guiding students in their artistic journey. Whether
          it is learning to play a musical instrument, exploring various dance
          forms, honing acting skills, or discovering the joy of painting, our
          diverse range of classes allows students to pursue their interests and
          uncover new talents.
        </p>
        <p className="text-lg text-slate-900 mb-6">
          We take pride in our vibrant and inclusive community, where students
          can connect with like-minded individuals and build lifelong
          friendships. Our state-of-the-art facilities provide a conducive
          environment for learning and creativity. With small class sizes,
          personalized attention, and a supportive learning atmosphere, we
          ensure that each student receives the guidance and encouragement they
          need to thrive.
        </p>
        <div className="flex mb-6 text-orange-500">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <FaYoutube size={24} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
        <div className="flex justify-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mr-4 ">
            Our Popular Instructors
          </button>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded ">
            Our Classes
          </button>
        </div>
        <div className="bg-black rounded my-12 h-1 w-full"></div>
      </div>
    </div>
  );
};

export default AboutPage;
