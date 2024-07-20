import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { FiChevronDown } from "react-icons/fi";
import StatusTag from "../Components/StatusTag";

const CustomSelect = ({ type, name, value, onChange, options }) => {
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

  if (type === "date") {
    return (
      <input
        type="date"
        name={name}
        value={value}
        onChange={onChange}
        className="border-2 border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-violet-800 transition duration-300 focus:border-2 hover:border-gray-500 hover:border-2"
      />
    );
  }

  return (
    <div ref={selectRef} className="relative w-[160px] text-gray-900 ">
      <div
        className="block w-full bg-white shadow-md border-2 border-gray-200 font-bold px-4 py-2 pr-8 rounded-lg leading-tight focus:outline-none cursor-pointer hover:border-violet-800 transition duration-300 focus:border-violet-800 "
        onClick={handleToggle}
      >
        {selectedOption ? (
          <div className="flex items-center space-x-2">
            {selectedOption.value && (
              <StatusTag status={selectedOption.value} />
            )}
            <span>{selectedOption.label}</span>
          </div>
        ) : (
          "Select..."
        )}
        <FiChevronDown className="absolute inset-y-0 right-0 m-auto h-4 w-4 mr-2 text-gray-600 " />
      </div>
      {isOpen && (
        <ul className="absolute z-10 w-full bg-white border rounded-md shadow-xl max-h-60 overflow-y-auto mt-[2px] transition duration-300">
          {options.map((option) => (
            <li
              key={option.value}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-2 "
              onClick={() => handleOptionClick(option.value)}
            >
              {option.value && <StatusTag status={option.value} />}
              <span>{option.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

CustomSelect.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CustomSelect;
