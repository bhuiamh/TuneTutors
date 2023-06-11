import React from "react";
import { FiPhone, FiMessageCircle, FiPhoneCall, FiSend } from "react-icons/fi";

const CallNowPage = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-md mx-auto bg-black/10 shadow-lg rounded-lg px-8 py-10">
        <h1 className="text-4xl text-center font-bold text-orange-500 mb-4">
          Call Now
        </h1>
        <p className="text-lg text-center mb-8">
          Connect with us for assistance or inquiries
        </p>
        <div className="grid grid-cols-2 gap-4">
          <a
            href="tel:+1234567890"
            className="flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white rounded-lg py-3"
          >
            <FiPhone className="mr-2" />
            Phone Call
          </a>
          <a
            href="tel:+1234567890"
            className="flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white rounded-lg py-3"
          >
            <FiPhoneCall className="mr-2" />
            IP Call
          </a>
          <a
            href="https://call.whatsapp.com/video/26gX6dStUtrhVmnEz3Cf9v"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white rounded-lg py-3"
          >
            <FiMessageCircle className="mr-2" />
            WhatsApp
          </a>
          <a
            href="https://t.me/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white rounded-lg py-3"
          >
            <FiSend className="mr-2" />
            Telegram
          </a>
          <a
            href="https://meet.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white rounded-lg py-3"
          >
            <FiPhoneCall className="mr-2" />
            Google Duo
          </a>
        </div>
      </div>
      <div>
        <img
          src="https://drive.google.com/uc?export=view&id=1VQcv02RuTb0Oc7xt2XYWAzbhf7J1enG6"
          alt=""
        />
      </div>
      <div className="bg-black rounded my-12 h-1 w-full"></div>
    </div>
  );
};

export default CallNowPage;
