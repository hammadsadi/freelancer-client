import { createContext, ReactNode, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

// User Data Type
interface IUser {
  userId: string;
  email: string;
}
// Auth Context Type
type TAuthContext = {
  user: IUser | null;
  logOut: () => void;
};

export const AuthContext = createContext<TAuthContext>({
  user: null,
  logOut: () => {},
});
const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    try {
      const fetchUser = async () => {
        // const res = await axios.get("http://localhost:5000/api/v1/user/me", {
        //   withCredentials: true,
        // });
        // console.log(res);
      };
      fetchUser();
    } catch (error) {
      console.log(error);
      logOut();
    }
  }, []);

  //   User Logout
  const logOut = () => {
    // Remove Token
    Cookies.remove("freelance_token");
    // Clean User Data
    setUser(null);
    // Redirect Login Page
    window.location.href = "/login";
  };
  return (
    <AuthContext.Provider value={{ user, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
