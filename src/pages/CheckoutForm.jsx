import React from "react";
import { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import Swal from "sweetalert2";
import useAuth from "../providers/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import "./CheckoutForm.css";

const CheckoutForm = ({ price, cart }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [cardError, setCardError] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  console.log(cart, "cart");

  useEffect(() => {
    if (price === 0) {
      return;
    }
    axiosSecure.post("/create-payment-intent", { price }).then((res) => {
      setClientSecret(res.data.clientSecret);
    });
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user.email || "User Email",
            name: user.displayName || "User Name",
          },
        },
      });
    if (confirmError) {
      setCardError("Something Went Wrong");
    }

    setProcessing(false);

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      const payment = {
        name: user.displayName ? user.displayName : "null",
        email: user.email,
        date: new Date(),
        transaction: paymentIntent.id,
        amount: price,

        cartItems: cart.map((item) => item._id),

        status: "service pending",
        itemNames: cart.map((item) => item.title),
      };
      console.log(cart, "it will store");
      axiosSecure.post("/payments", payment).then((res) => {
        if (res.data.insertResult.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Payment Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    }
  };
  return (
    <div className="my-10 w-2/3">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn mt-4 btn-sm btn-primary bg-[#D1A054] hover:bg-[#ee9104]"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="tex-center text-red-500">{cardError}</p>}
      {transactionId && (
        <p className="tex-center text-green-500">
          Transaction Complete <br />{" "}
          <span className="text-slate-500 inline-block">
            Transaction:{" "}
            <span className="border p-1 inline-block">{transactionId}</span>
          </span>
        </p>
      )}
    </div>
  );
};

export default CheckoutForm;
