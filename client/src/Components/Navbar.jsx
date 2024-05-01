import { useState } from "react";
import { FiSearch, FiBell, FiUser, FiSettings, FiLogOut } from "react-icons/fi"; // Import icons from react-icons library

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="h-16 bg-white text-white flex items-center justify-between px-20 border ">
      {/* Search Bar */}
      <div className="flex items-center ml-64">
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lg text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-white text-gray-600 border border-gray-200 pl-10 pr-10 py-1 rounded-xl focus:outline-none"
          />
        </div>
      </div>
      {/* Profile and Notification */}
      <div className="flex items-center text-gray-500">
        {/* Notification */}
        <div className="relative mr-4 bg-gray-100 p-2 rounded-full">
          <FiBell className="text-xl cursor-pointer" />
          {/* Red Dot for Notification */}
          {/* <div className="bg-red-500 w-2 h-2 rounded-full absolute top-0 right-0 -mt- mr-"></div> */}
        </div>
        {/* Profile Dropdown */}
        <div
          className="relative bg-gray-100 p-2 rounded-full"
          onClick={toggleDropdown}
        >
          <FiUser className="text-xl cursor-pointer" />
          {/* Dropdown */}
          {isDropdownOpen && (
            <div className="text-gray-500 font-normal absolute top-full right-0 bg-white border shadow rounded-2xl mt-1 py-3 px-3 w-60 ">
              <button className="flex items-center w-full text-left px-4 py-2 hover:bg-gray-200 rounded-lg focus:outline-none">
                <FiUser className="mr-2 text-xl text-gray-600" /> Profile
              </button>
              <button className="flex items-center w-full text-left px-4 py-2 hover:bg-gray-200 rounded-lg focus:outline-none">
                <FiSettings className="mr-2 text-xl text-gray-600" /> Settings
              </button>
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
