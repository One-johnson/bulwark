import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FiUser, FiLogOut } from "react-icons/fi"; // Import icons from react-icons library
import Logo from "../images/school.png";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="h-[65px] bg-white flex items-center justify-between border fixed top-0 right-0 left-0 ">
      {/* Logo (Dashboard) */}
      <div className="text-gray-500 text-2xl font-bold flex items-center ml-4">
        <img src={Logo} alt="School Logo" className="w-[50px] h-[50px]" />
      </div>

      {/* Navigation */}
      <div className="flex items-center text-gray-500 mr-8">
      
        {/* Profile Dropdown */}
        <div
          className="relative bg-gray-100 p-2 rounded-full ml-20"
          onClick={toggleDropdown}
        >
          <FiUser className="text-xl cursor-pointer" />
          {/* Dropdown */}
          {isDropdownOpen && (
            <div className="text-gray-500 font-normal absolute top-full right-0 bg-white border shadow rounded-lg mt-1 py-3 px-3 w-60">
              <Link
                to="/profile"
                className="flex items-center w-full text-left px-4 py-2 hover:bg-gray-200 rounded-lg focus:outline-none"
              >
                <FiUser className="mr-2 text-xl text-gray-600" /> Profile
              </Link>

              <button className="flex items-center w-full text-left px-4 py-2 hover:bg-gray-200 rounded-lg focus:outline-none">
                <FiLogOut className="mr-2 text-xl text-gray-600" /> Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
