// ✅ src/hooks/UseAdmin.js or .jsx
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth/useAuth";
import useAxiosSecure from "./useAxiosSecure/UseAxiosSecure";

const UseAdmin = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: isAdmin, isLoading } = useQuery({
    queryKey: [user?.email, 'isAdmin'],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user.email}`);
      return res.data?.admin;
    },
  });

  return { isAdmin, isLoading };
};

export default UseAdmin;
