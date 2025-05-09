import { useQuery } from "@tanstack/react-query";
// import useAuth from "../useAuth/useAuth";
// import useAxiosSecure from "../useAxiosSecure/UseAxiosSecure";
import useAuth from "../../useAuth/useAuth";
import useAxiosSecure from "../../useAxiosSecure/UseAxiosSecure";

const useAdmin = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  
  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email, 'isAdmin'],
    enabled: !!user?.email, // ✅ Prevent error when user is undefined
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user.email}`);
      console.log(res.data.admin);
      return res.data?.admin;
    },
  });
  

  return { isAdmin, isAdminLoading }; // ✅ better for readability
};

export default useAdmin;
