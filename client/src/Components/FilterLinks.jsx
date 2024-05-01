import { Link } from "react-router-dom";

const FilterLinks = () => {
  return (
    <div className="flex items-center space-x-1 mb-4 font-semibold">
      {/* Add your filter links here */}
      <Link
        to="/"
        className="text-gray-500 hover:bg-violet-800 hover:text-white px-3 py-1 rounded-lg transition duration-300"
      >
        For you
      </Link>
      <Link
        to="/Creche"
        className="text-gray-500 hover:bg-violet-800 hover:text-white px-3 py-1 rounded-lg transition duration-300"
      >
        Creche
      </Link>
      <Link
        to="/Primary"
        className="text-gray-500 hover:bg-violet-800 hover:text-white px-3 py-1 rounded-lg transition duration-300"
      >
        Primary
      </Link>
      <Link
        to="/Jhs"
        className="text-gray-500 hover:bg-violet-800 hover:text-white px-3 py-1 rounded-lg transition duration-300"
      >
        JHS
      </Link>
    </div>
  );
};

export default FilterLinks;
