import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useAdmin } from "../context/AdminContext";

function Navbar() {
  const { admin, setAdmin } = useAdmin();
  const navigate = useNavigate();

  const handleLogout = () => {
    setAdmin(null);
    navigate("/");
  };

  return (
    <div className="h-[65px] bg-white flex items-center justify-between border fixed top-0 right-0 left-0 px-8">
      <div className="flex items-center text-gray-700">
        <p className="text-lg font-semibold">
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
    </div>
  );
}

export default Navbar;
