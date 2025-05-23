import { ChartLine, Folder, MenuIcon, User } from "lucide-react";
import { useContext, useState } from "react";

import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Sidebar = () => {
  const [isActive, setActive] = useState(false);
  const { user } = useContext(AuthContext);

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/">Freelancer</Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <MenuIcon className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-rose-100 mx-auto">
              <Link to="/">Freelancer</Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            {/* Conditional toggle button here.. */}

            {/*  Menu Items */}
            <nav>
              {/* Statistics */}
              <NavLink
                to="/dashboard"
                end
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-rose-500 text-white" : "text-gray-600"
                  }`
                }
              >
                <ChartLine className="w-5 h-5" />

                <span className="mx-4 font-medium">Statistics</span>
              </NavLink>

              {/* Add Client */}
              <NavLink
                to="/dashboard/clients"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-rose-500 text-white" : "text-gray-600"
                  }`
                }
              >
                <User className="w-5 h-5" />

                <span className="mx-4 font-medium">Clients</span>
              </NavLink>
              {/* Add Project */}
              <NavLink
                to="/dashboard/add-project"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <Folder className="w-5 h-5" />

                <span className="mx-4 font-medium">Projects</span>
              </NavLink>
            </nav>
          </div>
        </div>

        <div>
          <hr />

          {/* Profile Menu */}
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
              }`
            }
          >
            {/* <FcSettings className="w-5 h-5" />  */}

            <span className="mx-4 font-medium">{user?.name}</span>
          </NavLink>
          <button
            // onClick={logOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            {/* <GrLogout className="w-5 h-5" />  */}

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
