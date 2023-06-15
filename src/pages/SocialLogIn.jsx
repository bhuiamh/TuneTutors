import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import useAuth from "../providers/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogIn = () => {
  const { googleSignIn, githubSignIn } = useAuth();
  const navigate = useNavigate();

  const location = useLocation();

  const goTo = location.state?.form?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedInUser = result.user;
        const savedUser = {
          name: loggedInUser.displayName,
          email: loggedInUser.email,
        };
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
              navigate(goTo, { replace: true });
              navigate("/");
            }
          });
        navigate(goTo, { replace: true });
        Swal.fire({
          icon: "success",
          title: "Google Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: error.message,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  const handleGitHubLogIn = () => {
    githubSignIn()
      .then((result) => {
        const loggedInUser = result.user;
        const savedUser = {
          name: loggedInUser.displayName,
          email: loggedInUser.email,
        };
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
              navigate(goTo, { replace: true });
            }
          });
        Swal.fire({
          icon: "success",
          title: "GitHub Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(goTo, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: errorMessage,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <div className="">
      <div className="divider text-orange-500">Or login with social media</div>
      <div className="flex justify-center mx-3 gap-2">
        <div className="">
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline btn-circle hover:bg-orange-500"
          >
            <FcGoogle></FcGoogle>
          </button>
        </div>
        <div className="">
          <button
            onClick={handleGitHubLogIn}
            className="btn btn-outline btn-circle hover:bg-orange-500"
          >
            <FaGithub></FaGithub>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialLogIn;
