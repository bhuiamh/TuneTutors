import useAuth from "../providers/useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "react-query";

const useUser = () => {
  const token = localStorage.getItem("access-token");
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: acquiredClass = [] } = useQuery({
    queryKey: ["user", user?.email],
    enabled: !loading,

    queryFn: async () => {
      const res = await axiosSecure(`/user?email=${user?.email}`);
      return res.data;
    },
  });

  return [acquiredClass, refetch];
};

export default useUser;
