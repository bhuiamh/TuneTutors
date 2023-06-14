import useAuth from "../providers/useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "react-query";

const useEnrolled = () => {
  const token = localStorage.getItem("access-token");
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { refetch, data: enrolled = [] } = useQuery({
    queryKey: ["enrolled", user?.email],
    enabled: !loading,

    queryFn: async () => {
      const res = await axiosSecure(`/enrolled?email=${user?.email}`);
      return res.data;
    },
  });

  return [enrolled, refetch];
};

export default useEnrolled;
