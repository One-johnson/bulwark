import PropTypes from "prop-types";
import { FaRegEye, FaRegEdit, FaUser  } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const StudentCard = ({ studentId, studentName, image, onView, onEdit, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white border-2 shadow-xl rounded-2xl p-6 flex flex-col items-center text-center hover:border-violet-800 hover:bg-gray-200 overflow-hidden transition duration-300">
      {image ? (
        <img
          src={image}
          alt={studentName}
          className="w-24 h-24 rounded-full mb-4 object-cover"
        />
      ) : (
        <div className="w-24 h-24 rounded-full mb-4 flex items-center justify-center bg-gray-200">
          <FaUser size={24} className="text-gray-500" />
        </div>
      )}
      <div className="text-lg font-bold text-gray-700">{studentName}</div>
      <p className="text-md text-gray-500 mt-2">{studentId}</p>
      <div className="mt-4 flex space-x-3 text-xl items-center">
        <button
          onClick={onView}
          className="text-blue-600 "
        >
          <FaRegEye  />
        </button>
        <button
          onClick={onEdit}
          className="text-green-600"
        >
          <FaRegEdit />
        </button>
        <button
          onClick={onDelete}
          className="text-red-600"
        >
          <FaRegTrashCan />
        </button>
      </div>
    </div>
  );
};

StudentCard.propTypes = {
  studentId: PropTypes.string.isRequired,
  studentName: PropTypes.string.isRequired,
  image: PropTypes.string,
  onView: PropTypes.func,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

export default StudentCard;
