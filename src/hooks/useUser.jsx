import useAuth from "../providers/useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "react-query";

const useUser = () => {
  const token = localStorage.getItem("access-token");
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: profile = [] } = useQuery({
    queryKey: ["profile", user?.email],
    enabled: !loading,

    queryFn: async () => {
      const res = await axiosSecure(`/profile?email=${user?.email}`);
      return res.data;
    },
  });
  console.log(profile, " email email");

  return [profile, refetch];
};

export default useUser;
