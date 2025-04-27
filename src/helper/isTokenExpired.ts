import { jwtDecode } from "jwt-decode";

const isTokenExpired = (token: string) => {
  const decoded: any = jwtDecode(token);
  const currentTime = Date.now() / 1000;
  return decoded.exp < currentTime;
};

export default isTokenExpired;
