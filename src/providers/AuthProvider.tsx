import { createContext, ReactNode, useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

// User Data Type
interface IUser {
  userId: string;
  email: string;
  name: string;
  createdAt: string;
  id: string;
  updatedAt: string;
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
        const { data } = await axios.get(
          "http://localhost:5000/api/v1/user/me",
          {
            withCredentials: true,
          }
        );
        if (data.success) {
          setUser(data.data);
        } else {
          setUser(null);
          logOut();
        }
      };
      fetchUser();
    } catch (error) {
      setUser(null);
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
