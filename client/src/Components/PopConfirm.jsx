import { useState } from "react";
import PropTypes from "prop-types";
import { BiLoaderCircle } from "react-icons/bi";

const PopConfirm = ({ message, onCancel, onConfirm }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleConfirm = async () => {
    setIsLoading(true);
    await onConfirm();
    setIsLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-400 bg-opacity-85">
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <p className="text-xl mb-6 font-semibold">{message}</p>
        <div className="flex justify-center">
          <button
            className="mr-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            onClick={onCancel}
            disabled={isLoading}
          >
            CANCEL
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            onClick={handleConfirm}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center">
                <BiLoaderCircle className="animate-spin mr-3" />
                <span>Logging out...</span>
              </div>
            ) : (
              "CONFIRM"
            )}
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
