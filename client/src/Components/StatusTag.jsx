import PropTypes from "prop-types";

const StatusTag = ({ status }) => {
  let bgColor, textColor, border;

  switch (status) {
    case "fresher":
      bgColor = "bg-red-100";
      textColor = "text-red-600";
      border = "border-red-500";
      break;
    case "continuing":
      bgColor = "bg-yellow-100";
      textColor = "text-yellow-600";
      border = "border-yellow-500";
      break;
    case "completed":
      bgColor = "bg-green-100";
      textColor = "text-green-600";
      border = "border-green-500";
      break;
    default:
      bgColor = "bg-gray-200";
      textColor = "text-gray-500";
  }

  return (
    <span
      className={`${bgColor} ${textColor} ${border} font-bold py-1 px-4 rounded-lg inline-block text-center border text-sm`}
    >
      {status}
    </span>
  );
};

StatusTag.propTypes = {
  status: PropTypes.string.isRequired,
};

export default StatusTag;
