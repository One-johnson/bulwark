import PropTypes from "prop-types";
import { RiAddLine } from "react-icons/ri";

const FormButton = ({ onClick }) => {
  return (
    <button
      className="mt-10 absolute top-4 right-4 bg-violet-800 hover:bg-gray-200 border hover:text-violet-800 text-white py-2 px-2 rounded-full transition duration-300 flex items-center" 
    >
      <RiAddLine className="text-xl" />
    </button>
  );
};

FormButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default FormButton;
