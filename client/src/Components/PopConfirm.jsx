import { useState } from "react";
import PropTypes from "prop-types";

const PopConfirm = ({ message, onCancel, onConfirm, warning }) => {
  const [isConfirming, setIsConfirming] = useState(false);

  const handleConfirm = async () => {
    setIsConfirming(true);
    await onConfirm();
    setIsConfirming(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-80">
      <div className="bg-white px-10 py-6 rounded-2xl shadow-lg relative">
        <p className="text-lg mb-6 font-bold">{message} </p>
        <p className="text-red-600 mb-6 text-md font-medium">{warning} </p>
        <div className="flex justify-end">
          <button
            className="mr-4 bg-white text-gray-700 px-4 py-2 border border-gray-200 rounded-full hover:bg-gray-100 font-semibold"
            onClick={onCancel}
            disabled={isConfirming}
          >
            CANCEL
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-700 font-semibold"
            onClick={handleConfirm}
            disabled={isConfirming}
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

PopConfirm.propTypes = {
  warning: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default PopConfirm;
