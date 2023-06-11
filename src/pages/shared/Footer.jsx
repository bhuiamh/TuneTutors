import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhoneAlt,
  FaPinterest,
  FaReddit,
  FaSnapchat,
  FaTelegram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import namePhoto from "../../assets/name.svg";

const Footer = () => {
  return (
    <footer className="mx-4 text-light p-5 mt-8 border-x-transparent border-t-orange-500 border-4 border-orange-500">
      <div className="container flex flex-wrap items-center justify-between">
        <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
          <div className="flex flex-col">
            <p className="text-lg font-bold mb-3">Location</p>
            <p className="text-base mb-2">Ikra Villa, Monir Chemical Road</p>
            <p className="text-base mb-2">Opposite of DUET Campus</p>
            <p className="text-base mb-2">Gazipur Sadar, Gazipur</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
          <div className="flex flex-col">
            <p className="text-lg font-bold mb-3">Contact Us</p>
            <a
              href="mailto:info@kitchensecret.com"
              className="text-base text-light mb-2"
            >
              <FaMailBulk className="inline-block mr-1" /> info@tunetutor.com
            </a>
            <a href="tel:+1-123-456-7890" className="text-base text-light mb-2">
              <FaPhoneAlt className="inline-block mr-1" /> +880-1946280853
            </a>
            <a href="tel:+1-123-456-7890" className="text-base text-light">
              <FaPhoneAlt className="inline-block mr-1" /> +880-1819831933
            </a>
          </div>
        </div>
        <div className="w-full flex justify-start md:w-1/2 lg:w-1/4">
          <div className="flex flex-col">
            <div className="mb-3">
              <img src={namePhoto} alt="" />
            </div>
            <div className="flex justify-start">
              <a href="https://twitter.com" className="me-3 text-light">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" className="me-3 text-light">
                <FaLinkedin />
              </a>
              <a href="https://facebook.com" className="me-3 text-light">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" className="me-3 text-light">
                <FaInstagram />
              </a>
              <a href="https://youtube.com" className="me-3 text-light">
                <FaYoutube />
              </a>
              <a href="https://telegram.com" className="me-3 text-light">
                <FaTelegram />
              </a>
              <a href="https://pinterest.com" className="me-3 text-light">
                <FaPinterest />
              </a>
              <a href="https://snapchat.com" className="me-3 text-light">
                <FaSnapchat />
              </a>
              <a href="https://reddit.com" className="me-3 text-light">
                <FaReddit />
              </a>
              <a href="https://tiktok.com" className="text-light">
                <FaTiktok />
              </a>
            </div>
            <div className="flex justify-end mt-4">
              <p className="text-base mb-0">
                © 2023 TuneTutor Inc. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
