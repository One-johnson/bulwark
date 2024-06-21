import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Card = ({ path, icon, label, description }) => {
  return (
    <Link
      to={path}
      className="bg-white border-2 shadow-xl rounded-2xl p-10 flex flex-col items-center text-center hover:border-violet-800 
      hover:bg-gray-200 overflow-hidden transition duration-300"
    >
      <div className="text-7xl mb-4">{icon}</div>
      <div className="text-lg font-bold text-gray-700">{label}</div>
      <p className="text-sm text-gray-500 mt-2">{description}</p>
    </Link>
  );
};

Card.propTypes = {
  path: PropTypes.string.isRequired, // Image source should be a string and required
  icon: PropTypes.string.isRequired, // Title should be a string and required
  description: PropTypes.string.isRequired, // Description should be a string and required
  label: PropTypes.string.isRequired, // Link should be a string and required
};
export default Card;
