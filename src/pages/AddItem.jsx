import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const image_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD;

const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageResponse) => {
        if (imageResponse.success) {
          const imgURL = imageResponse.data.display_url;
          const { title, instructor_name, available_seats, price } = data;
          const newItem = {
            title,
            instructor_name,
            available_seats,
            price: parseFloat(price),

            cover_picture: imgURL,
          };
          axiosSecure.post("/classes", newItem).then((data) => {
            Swal.fire({
              icon: "success",
              title: "Menu Added Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            reset();
          });
        }
      });
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>Add Class || TuneTutors</title>
      </Helmet>

      <form className="flex justify-center" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full max-w-sm">
          <div className="mb-4">
            <label htmlFor="recipeName" className="label">
              <span className="label-text font-semibold text-base">
                Class Title*
              </span>
            </label>
            <input
              type="text"
              {...register("title", { required: true, maxLength: 80 })}
              placeholder="Type a class name"
              className="input input-bordered w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="recipeDetails" className="label">
              <span className="label-text font-semibold text-base">
                Instructor Name*
              </span>
            </label>
            <input
              type="text"
              {...register("instructor_name", {
                required: true,
                maxLength: 200,
              })}
              placeholder="Type a instructor name"
              className="textarea textarea-bordered w-full"
            />
          </div>
          <div className="flex gap-x-3">
            <div className=" w-1/2">
              <label htmlFor="duration" className="label">
                <span className=" text-base label-text font-semibold">
                  Available Seats*
                </span>
              </label>
              <input
                type="number"
                {...register("available_seats", {
                  required: true,
                  maxLength: 80,
                })}
                placeholder="Type available seats"
                className="input input-bordered w-full"
              />
            </div>
            <div className=" w-1/2">
              <label htmlFor="duration" className="label">
                <span className=" text-base label-text font-semibold">
                  Price*
                </span>
              </label>
              <input
                type="number"
                {...register("price", { required: true, maxLength: 80 })}
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="my-4">
            <div className="form-control">
              <input
                {...register("image", { required: true, maxLength: 400 })}
                type="file"
                className="file-input file-input-bordered w-full"
              />
            </div>
          </div>
          <div className="mt-6">
            <input
              type="submit"
              className="btn hover:bg-[#ee9104] uppercase bg-[#D1A054] w-full"
              value={"Add an Item"}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddItem;
