import { Link, useLocation } from "react-router-dom";
import { FiHome, FiLogOut } from "react-icons/fi";
import { BsBook, BsAward, BsGem } from "react-icons/bs";
import Logo from "../../../images/school.png"; // Import your logo image or SVG

function Sidebar() {
  const location = useLocation();

  return (
    <div className="bg-violet-900 h-full left-0 top-0 z-50 w-64 fixed flex flex-col">
      {/* Header */}
      <div className="p-4">
        <div className="mb-8 bg-violet-300 shadow-2xl px-2 py- h-40 rounded-lg flex items-center">
          <img src={Logo} alt="Logo" className="w-16 h-16 mr-2" />
          <span className="text-lg font-extrabold">
            E. P. Church School, Abeka
          </span>
        </div>
      </div>
      <hr className="mb-8" />
      <div className="p-2 ">
        <ul className="space-y-4 text-white font-semibold">
          <li>
            <Link
              to="/dashboard"
              className={`${
                location.pathname === "/" ? "text-white" : "text-gray-400"
              } hover:bg-white hover:text-violet-800 px-4 py-2 rounded flex items-center mb-1`}
            >
              <FiHome className="inline-block mr-2" />
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/Creche"
              className={`${
                location.pathname === "/Creche" ? "text-white" : "text-gray-400"
              } hover:bg-white hover:text-violet-800 px-4 py-2 rounded flex items-center mb-1`}
            >
              <BsBook className="inline-block mr-2" />
              Creche
            </Link>
          </li>
          <li>
            <Link
              to="/Primary"
              className={`${
                location.pathname === "/Primary"
                  ? "text-white"
                  : "text-gray-400"
              } hover:bg-white hover:text-violet-800 px-4 py-2 rounded flex items-center mb-1`}
            >
              <BsAward className="inline-block mr-2" />
              Primary
            </Link>
          </li>
          <li>
            <Link
              to="/Jhs"
              className={`${
                location.pathname === "/Jhs" ? "text-white" : "text-gray-400"
              } hover:bg-white hover:text-violet-800 px-4 py-2 rounded flex items-center mb-10`}
            >
              <BsGem className="inline-block mr-2" />
              Junior High School
            </Link>
          </li>
          <hr />
          <li>
            <Link
              to="/"
              className="text-gray-400 hover:bg-white hover:text-violet-800 px-4 py-2 rounded flex items-center mb-1 mt-40"
            >
              <FiLogOut className="inline-block mr-2" />
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
