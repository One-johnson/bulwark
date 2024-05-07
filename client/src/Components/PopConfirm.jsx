
import PropTypes from "prop-types";

const PopConfirm = ({ message, onCancel, onConfirm }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-400 bg-opacity-75 transition-opacity duration-300">
      <div className="bg-white p-8 rounded-lg shadow-lg transform transition-transform duration-300">
        <p className="text-lg mb-6">{message}</p>
        <div className="flex justify-end">
          <button
            className="mr-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-300"
            onClick={onCancel}
          >
            CANCEL
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300"
            onClick={onConfirm}
          >
            CONFIRM
          </button>
        </div>
      </div>
    </div>
  );
};

PopConfirm.propTypes = {
  message: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default PopConfirm;
