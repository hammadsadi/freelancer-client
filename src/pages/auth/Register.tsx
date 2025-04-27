import { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  // Handle Submit Form Data
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const userInfo = {
      name,
      email,
      password,
    };
    const res = await axios.post(
      "http://localhost:5000/api/v1/user/create",
      userInfo,
      {
        withCredentials: true,
      }
    );
    if (res.data.success) {
      navigate("/dashboard");
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm text-gray-400">
            Sign up to access your account
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">
                User Name
              </label>
              <input
                type="name"
                name="name"
                // onBlur={(e) => setEmail(e.target.value)}
                id="name"
                required
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                // onBlur={(e) => setEmail(e.target.value)}
                id="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>

            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
              />
            </div>
          </div>

          <div>
            <button
              //   disabled={loading}
              type="submit"
              className="bg-rose-500 w-full rounded-md py-3 text-white cursor-pointer"
            >
              {/* {loading ? (
                <TbFidgetSpinner className="animate-spin m-auto" />
              ) : (
                "Sign In"
              )} */}
              Sign Up
            </button>
          </div>
        </form>

        <p className="px-6 text-sm text-center text-gray-600 mt-2">
          Already have an account? &nbsp;
          <Link to="/" className="hover:underline text-rose-500">
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Register;
