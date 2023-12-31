import React from "react";
import { Helmet } from "react-helmet-async";
import {
  FaComment,
  FaInfoCircle,
  FaShareAlt,
  FaThumbsUp,
} from "react-icons/fa";
import { useQuery } from "react-query";

const InstructorPage = () => {
  const {
    data: instructors = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["instructors"],
    queryFn: async () => {
      const res = await fetch(
        "https://tunetutor-server-bhuiamh.vercel.app/instructors"
      );
      return res.json();
    },
  });
  return (
    <div className="mt-8">
      <Helmet>
        <title>Instructors || TuneTutors</title>
      </Helmet>
      <h1 className="text-4xl font-bold text-orange-500 text-center mb-4">
        Meet Our Skilled Instructors
      </h1>
      <h1 className="text-2xl font-bold text-slate-900 text-center mb-8">
        Elevate Your Skills with Expert Mentorship
      </h1>
      <div className="md:grid grid-cols-2 my-6 mx-2 gap-x-6 gap-y-12">
        {instructors.map((instructor) => (
          <div
            key={instructor._id}
            className="card md:my-0 my-5 md:card-side bg-base-100 shadow-2xl"
          >
            <div className="md:flex flex-row-reverse">
              <figure className="md:w-1/2 md:h-auto h-1/2">
                <img
                  className="w-full h-full object-cover"
                  src={instructor.image}
                  alt="Album"
                />
              </figure>
              <div className="card-body md:w-1/2 md:h-auto h-1/2 p-4 bg-black bg-opacity-50">
                <div className="flex flex-col justify-center items-start">
                  <h2 className="card-title text-base">
                    <span className="text-white">Name:</span>
                    <span className=" text-white">{instructor.name}</span>
                  </h2>
                  <p className="mb-2 card-title text-base">
                    <span className="text-white">Instructor of:</span>
                    <span className=" text-white">{instructor.classes[0]}</span>
                  </p>
                  <p className="mb-2 card-title text-base">
                    <span className="text-white">Current Students:</span>
                    <span className=" text-white">
                      {instructor.classes_taken}
                    </span>
                  </p>
                  <p className="mb-2 card-title text-base email-truncate">
                    <span className="text-white">Email:</span>
                    <span className=" text-white overflow-hidden truncate max-w-[200px]">
                      {instructor.email}
                    </span>
                  </p>
                  <div className="card-actions flex mt-4">
                    <button className="btn bg-orange-500 text-white hover:bg-orange-700 flex-1 ml-2">
                      <FaThumbsUp className="mr-2" />
                      Like
                    </button>
                    <button className="btn flex bg-orange-500 text-white hover:bg-orange-700 flex-1 ml-2">
                      <FaComment className="mr-2" />
                      Comment
                    </button>
                    <button className="btn bg-orange-500 text-white hover:bg-orange-700 flex-1 ml-2">
                      <FaInfoCircle className="mr-2" />
                      Details
                    </button>
                    <button className="btn bg-orange-500 text-white hover:bg-orange-700 flex-1 ml-2">
                      <FaShareAlt className="mr-2" />
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorPage;
