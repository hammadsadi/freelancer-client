import { Link } from "react-router-dom";

const CreateClient = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col max-w-lg w-full p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-3 text-center">
          <h1 className=" text-3xl font-bold">Create Client</h1>
        </div>
        <form
          //   onSubmit={handleSubmit}
          className="space-y-4 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
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
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateClient;
