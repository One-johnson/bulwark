import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { FiChevronDown } from "react-icons/fi";

const CustomSelect = ({ name, value, onChange, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleOptionClick = (optionValue) => {
    onChange({ target: { name, value: optionValue } });
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectedOption = options.find((option) => option.value === value);

  return (
    <div ref={selectRef} className="relative w-[160px] text-gray-900 ">
      <div
        className="block w-full bg-white border-2 border-gray-200 font-bold px-4 py-2 pr-8 rounded-lg leading-tight focus:outline-none cursor-pointer hover:border-gray-800 transition duration-300 focus:border-violet-800"
        onClick={handleToggle}
      >
        {selectedOption ? selectedOption.label : "Select..."}
        <FiChevronDown className="absolute inset-y-0 right-0 m-auto h-4 w-4 mr-2" />
      </div>
      {isOpen && (
        <ul className="absolute z-10 w-full bg-white border border-gray-400 rounded-md shadow-lg max-h-60 overflow-y-auto mt-[1px]">
          {options.map((option) => (
            <li
              key={option.value}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

CustomSelect.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CustomSelect;
