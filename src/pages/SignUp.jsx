import React, { useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import useAuth from "../providers/useAuth";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const captchaRef = useRef();
  const [disabled, setDisabled] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    const confirmPassword = data.confirmpassword;
    console.log(confirmPassword);
    const name = data.name;
    const photoURL = data.photoURL;
    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Password is not Matched",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      return;
    }
    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateUserProfile(name, photoURL)
          .then(() => {
            const savedUser = { name, email, photoURL, password };
            console.log(savedUser);
            fetch("http://localhost:5000/user", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(savedUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  Swal.fire({
                    icon: "success",
                    title: `Hello ${name} Welcome to TuneTutors`,
                    showClass: {
                      popup: "animate__animated animate__fadeInDown",
                    },
                    hideClass: {
                      popup: "animate__animated animate__fadeOutUp",
                    },
                  });
                }
              });
            reset();
            navigate("/");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            Swal.fire({
              icon: "error",
              title: `Error Code: " + ${errorCode} + ". Message: " + ${errorMessage}`,
              showClass: {
                popup: "animate__animated animate__fadeInDown",
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp",
              },
            });
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: `Error Code: " + ${errorCode} + ". Message: " + ${errorMessage}`,
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
    console.log("hei", user_captcha_value);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <Helmet>
        <title> Registration || TuneTutors</title>
      </Helmet>
      <div className="hero-content md:w-1/2 flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <iframe
            className="h-80"
            src="https://embed.lottiefiles.com/animation/112454"
          ></iframe>
        </div>
        <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", { required: true })}
                name="name"
                type="text"
                placeholder="Name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-600 mt-1">Name is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: true,
                })}
                name="email"
                type="email"
                placeholder="Email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-600 mt-1">Email is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                {...register("phoneNumber", {
                  required: true,
                  pattern: /^[0-9]{10}$/, // Assuming a 10-digit phone number
                })}
                type="text"
                placeholder="Phone Number"
                className="input input-bordered"
              />
              {errors.phoneNumber?.type === "required" && (
                <span className="text-red-600 mt-1">
                  Phone Number is required
                </span>
              )}
              {errors.phoneNumber?.type === "pattern" && (
                <span className="text-red-600 mt-1">Invalid Phone Number</span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                {...register("photoURL", {
                  required: true,
                })}
                type="text"
                placeholder="Photo URL"
                className="input input-bordered"
              />
              {errors.photoURL && (
                <span className="text-red-600 mt-1">Photo URl is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date of Birth</span>
              </label>
              <input
                {...register("dateofbirth", {
                  required: true,
                })}
                type="date"
                placeholder="Date of Birth"
                className="input input-bordered"
              />
              {errors.photoURL && (
                <span className="text-red-600 mt-1">
                  Date of Birth URl is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Gender</span>
              </label>
              <select
                {...register("gender", {
                  required: true,
                })}
                className="input input-bordered"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && (
                <span className="text-red-600 mt-1">Gender is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <textarea
                {...register("address", {
                  required: true,
                })}
                placeholder="Address"
                className="input input-bordered"
              ></textarea>
              {errors.address && (
                <span className="text-red-600 mt-1">Address is required</span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: true,
                  minLength: 8,
                  maxLength: 20,
                  pattern:
                    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
                })}
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <span className="text-red-600 mt-1">Password is required</span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-red-600 mt-1">
                  Password must be at least 8 characters.
                </span>
              )}
              {errors.password?.type === "maxLength" && (
                <span className="text-red-600 mt-1">
                  Your password cannot exceed 20 characters.
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-red-600 mt-1">
                  Password must be include at least one digit and one special
                  character . Allowed characters are letters, digits, and the
                  specified special characters.
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                {...register("confirmpassword", {
                  required: true,
                  minLength: 8,
                  maxLength: 20,
                  pattern:
                    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
                })}
                name="confirmpassword"
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <span className="text-red-600 mt-1">Password is required</span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-red-600 mt-1">
                  Password must be at least 8 characters.
                </span>
              )}
              {errors.password?.type === "maxLength" && (
                <span className="text-red-600 mt-1">
                  Your password cannot exceed 20 characters.
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-red-600 mt-1">
                  Password must be include at least one digit and one special
                  character . Allowed characters are letters, digits, and the
                  specified special characters.
                </span>
              )}

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <div>
                <input
                  type="checkbox"
                  id="showPasswordToggle"
                  checked={showPassword}
                  onChange={handleTogglePassword}
                />
                <label htmlFor="showPasswordToggle"> Show password</label>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
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
                Already have an account?
                <Link
                  className="text-orange-500 font-bold font-serif"
                  to="/login"
                >
                  Log in
                </Link>
              </small>
            </p>

            <div className="form-control mt-6">
              <input
                disabled={disabled}
                type="submit"
                value="Sign Up"
                className=" bg-orange-500 btn btn-primary"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
