import PropTypes from "prop-types";

const StatusTag = ({ status }) => {
  let bgColor, textColor;

  switch (status) {
    case "fresher":
      bgColor = "bg-red-600";
      textColor = "text-white";

      break;
    case "continuing":
      bgColor = "bg-yellow-500";
      textColor = "text-white";

      break;
    case "completed":
      bgColor = "bg-green-600";
      textColor = "text-white";

      break;
    case "full-time":
      bgColor = "bg-blue-600";
      textColor = "text-white";

      break;
    case "part-time":
      bgColor = "bg-pink-600";
      textColor = "text-white";

      break;
    case "contract":
      bgColor = "bg-fuchsia-600";
      textColor = "text-white";

      break;
    case "upcoming":
      bgColor = "bg-blue-700";
      textColor = "text-white";

      break;
    case "cancelled":
      bgColor = "bg-red-600";
      textColor = "text-white";

      break;
    default:
      bgColor = "bg-gray-200";
      textColor = "text-gray-500";
  }

  return (
    <span
      className={`${bgColor} ${textColor} font-semibold py-1 px-3 rounded-xl inline-block text-sm`}
    >
      {status}
    </span>
  );
};

StatusTag.propTypes = {
  status: PropTypes.string.isRequired,
};

export default StatusTag;
