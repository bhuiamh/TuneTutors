import React, { useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
// import useAuth from "../../Hooks/useAuth";
import SocialLogIn from "./SocialLogIn";
import useAuth from "../providers/useAuth";

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const location = useLocation();

  const goTo = location.state?.form?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        Swal.fire({
          icon: "success",
          title: `Hello ${user.displayName} Welcome to TuneTutors`,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });

        navigate(goTo, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: `Error Code: ", ${errorCode}, ". Message: ", ${errorMessage}`,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      });
  };

  const handleValidateCaptcha = (event) => {
    event.preventDefault();
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      Swal.fire({
        icon: "error",
        title: "Captcha is not Matched",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      setDisabled(true);
    }
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <Helmet>
        <title> Login || TuneTutors</title>
      </Helmet>
      <div className="hero-content md:w-1/2 flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <iframe
            className="h-80"
            src="https://lottie.host/?file=bf356e05-478e-4ffd-bd87-4d16b5fb227e/dsmc2zz4v4.json"
          ></iframe>
        </div>
        <form
          onSubmit={handleLogin}
          className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                required
                name="email"
                type="email"
                placeholder="Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                required
                name="password"
                type="password"
                placeholder="Password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                required
                ref={captchaRef}
                name="captcha"
                type="text"
                placeholder="Type the Captcha Above"
                className="input input-bordered"
              />
              <button
                onClick={handleValidateCaptcha}
                className={` ${
                  disabled || "bg-green-600"
                } btn btn-outline btn-xs mt-2`}
              >
                Validate
              </button>
            </div>
            <p>
              <small>
                New here?
                <Link
                  className="text-orange-500 font-bold font-serif"
                  to="/signup"
                >
                  Create an Account
                </Link>
              </small>
            </p>
            <div className="form-control mt-6">
              <input
                disabled={disabled}
                type="submit"
                value="Login"
                className=" bg-orange-500 btn btn-primary"
              />
            </div>
            <SocialLogIn></SocialLogIn>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
