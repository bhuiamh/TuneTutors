import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import useAcquiredClass from "../hooks/useAcquiredClass";
import { Helmet } from "react-helmet-async";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
  const [acquiredClass] = useAcquiredClass();

  const total = acquiredClass.reduce((sum, item) => item.price + sum, 0);
  const price = parseFloat(total.toFixed(2));
  return (
    <div className="w-full flex justify-center items-center mt-8">
      <div>
        <Helmet>
          <title>Payment || TuneTutors</title>
        </Helmet>

        <div className="flex justify-center items-center mb-8 bg-gray-100">
          <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Payment Details
            </h2>
            <h1 className="text-2xl text-red-500 mb-8 font-bold text-center">
              Disabled
            </h1>
            <form>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="cardNumber"
                >
                  Card Number
                </label>

                <input
                  className="appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="cardNumber"
                  type="text"
                  placeholder="Enter card number"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="expiryMonth"
                  >
                    Expiry Month
                  </label>
                  <input
                    className="appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                    id="expiryMonth"
                    type="text"
                    placeholder="MM"
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="expiryYear"
                  >
                    Expiry Year
                  </label>
                  <input
                    className="appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                    id="expiryYear"
                    type="text"
                    placeholder="YY"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="cvv"
                >
                  CVV
                </label>
                <input
                  className="appearance-none border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="cvv"
                  type="text"
                  placeholder="Enter CVV"
                />
              </div>

              <div className="flex justify-center my-4">
                <button
                  className="bg-[#D1A054] disabled hover:bg-[#ee9104] text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Pay Now
                </button>
              </div>
            </form>
          </div>
        </div>
        <h1 className="text-2xl text-green-500 mb-8 font-bold text-center">
          Enabled
        </h1>

        <Elements stripe={stripePromise}>
          <CheckoutForm cart={acquiredClass} price={price}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
