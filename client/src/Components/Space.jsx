import PropTypes from "prop-types";

const Space = ({ image, title, description, link }) => {
  return (
    <div className="flex">
      <div className="flex flex-col rounded-2xl bg-white shadow-xl mt-2 overflow-hidden p-5 border cursor-pointer hover:shadow-violet-400 hover:shadow-lg transition-all duration-500">
        <img src={image} alt={image} className="h-16 w-16 mb-4" />
        <h2 className="mb-2 text-black font-bold text-lg">{title}</h2>
        <p className="pb-5 text-gray-500">{description}</p>
        <a
          href={link}
          className="bg-violet-800 font-medium p-2 text-center text-white hover:text-violet-800 hover:bg-white transition-all duration-500 rounded-lg border"
        >
          Click Here...
        </a>
      </div>
    </div>
  );
};

Space.propTypes = {
  image: PropTypes.string.isRequired, // Image source should be a string and required
  title: PropTypes.string.isRequired, // Title should be a string and required
  description: PropTypes.string.isRequired, // Description should be a string and required
  link: PropTypes.string.isRequired, // Link should be a string and required
};

export default Space;
