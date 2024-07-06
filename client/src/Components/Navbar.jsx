import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useAdmin } from "../context/AdminContext";
import { useState } from "react";

function Navbar() {
  const { admin, setAdmin } = useAdmin();
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);

  const handleLogout = () => {
    setShowConfirm(true); // Show confirmation dialog
  };

  const confirmLogout = () => {
    setAdmin(null); // Logout action
    navigate("/"); // Navigate to home or login page
    setShowConfirm(false); // Close confirmation dialog
  };

  const cancelLogout = () => {
    setShowConfirm(false); // Close confirmation dialog
  };

  return (
    <div className="h-[65px] bg-white flex items-center justify-between border top-0 right-0 left-0 px-8 absolute ml-60">
      <div className="flex items-center text-gray-700">
        <p className="text-lg font-semibold px-10">
          Hello, {admin?.loginUserName || "Admin"}
        </p>
      </div>

      <div className="flex items-center">
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="w-10 h-10 rounded-full mr-4"
        />
        <button
          className="flex items-center text-gray-400 hover:text-gray-900 focus:outline-none transition duration-300"
          onClick={handleLogout}
        >
          <FiLogOut className="text-xl mr-1" />
        </button>
      </div>

      {/* Confirmation dialog */}
      {showConfirm && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <p className="text-lg font-semibold mb-4">
              Are you sure you want to logout?
            </p>
            <div className="flex justify-center space-x-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                onClick={confirmLogout}
              >
                Logout
              </button>
              <button
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
                onClick={cancelLogout}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
