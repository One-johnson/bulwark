import PropTypes from "prop-types";

const StatusTag = ({ status }) => {
  let bgColor, textColor;

  switch (status) {
    case "fresher":
      bgColor = "bg-red-600";
      textColor = "text-white";

      break;
    case "continuing":
      bgColor = "bg-orange-600";
      textColor = "text-white";

      break;
    case "completed":
      bgColor = "bg-green-600";
      textColor = "text-white";

      break;
    default:
      bgColor = "bg-gray-200";
      textColor = "text-gray-500";
  }

  return (
    <span
      className={`${bgColor} ${textColor} font-sm py-1 px-2 rounded-lg inline-block text-sm`}
    >
      {status}
    </span>
  );
};

StatusTag.propTypes = {
  status: PropTypes.string.isRequired,
};

export default StatusTag;
