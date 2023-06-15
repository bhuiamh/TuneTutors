import React from "react";
import { useQuery } from "react-query";

const useClass = () => {
  const {
    data: classes = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await fetch(
        "https://tunetutor-server-bhuiamh.vercel.app/classes"
      );
      return res.json();
    },
  });
  return [classes, loading, refetch];
};

export default useClass;
