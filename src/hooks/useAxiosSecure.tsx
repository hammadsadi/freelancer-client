import axios from "axios";
import { useNavigate } from "react-router-dom";
const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});
const useAxiosSecure = () => {
  // const { logOut } = useAuth();
  const navigate = useNavigate();
  axiosSecure.interceptors.response.use(
    (res) => {
      return res;
    },
    async (error) => {
      console.log(error.response.message);
      if (error.response.status === 401 || error.response.status === 403) {
        // await logOut();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
