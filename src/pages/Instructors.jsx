import React from "react";
import { useQuery } from "react-query";

const Instructors = () => {
  const {
    data: instructors = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["instructors"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/instructors");
      return res.json();
    },
  });
  console.log(instructors, loading);
  return (
    <div className="md:grid grid-cols-2 my-6 mx-2 gap-x-6 gap-y-12">
      {instructors.map((instructor) => (
        <div
          key={instructor._id}
          className="card md:my-0 my-5 md:card-side bg-base-100 shadow-2xl"
        >
          <figure className="md:w-1/2 md:h-auto h-1/2">
            <img
              className="w-full h-full object-cover"
              src={instructor.image}
              alt="Album"
            />
          </figure>
          <div className="card-body md:w-1/2 md:h-auto h-1/2">
            <h2 className="card-title text-base">
              Hei I'm{" "}
              <span className="font-serif text-xl text-orange-500">
                {instructor.name}
              </span>
            </h2>
            <p>
              <span className="text-xl font-bold">{instructor.classes[0]}</span>{" "}
              instructor at{" "}
              <span className="text-xl font-bold">TuneTutors</span>
            </p>
            <p>
              {" "}
              {instructor.name} is a {instructor.classes[0]} instructor at
              TuneTutors, with {instructor.classes_taken} classes taught.
              Contact him at {instructor.email} for more information.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Instructors;
