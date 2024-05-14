import PropTypes from "prop-types";
import { RiAddLine } from "react-icons/ri";

const FormButton = ({ onClick }) => {
  return (
    <button
      className="fixed bottom-10 right-10 bg-violet-800 hover:bg-gray-200 border hover:text-violet-800 text-white py-2 px-2 rounded-full transition duration-300 flex items-center z-10"
    >
      <RiAddLine className="text-xl" />
    </button>
  );
};

FormButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default FormButton;
