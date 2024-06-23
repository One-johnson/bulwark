import PropTypes from "prop-types";

const StatusTag = ({ status }) => {
  let bgColor, textColor, border;

  switch (status) {
    case "fresher":
      bgColor = "bg-red-100";
      textColor = "text-red-600";
      border = "border-red-600";

      break;
    case "continuing":
      bgColor = "bg-orange-100";
      textColor = "text-orange-600";
       border = "border-orange-600";

      break;
    case "completed":
      bgColor = "bg-green-100";
      textColor = "text-green-600";
      border = "border-green-600";

      break;
    default:
      bgColor = "bg-gray-200";
      textColor = "text-gray-500";
  }

  return (
    <span
      className={`${bgColor} ${textColor} ${border} font-bold py-1 px-5 rounded-xl inline-block text-sm border-2`}
    >
      {status}
    </span>
  );
};

StatusTag.propTypes = {
  status: PropTypes.string.isRequired,
};

export default StatusTag;
