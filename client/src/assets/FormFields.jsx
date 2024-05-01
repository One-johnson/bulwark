import PropTypes from "prop-types";
import { Field, ErrorMessage } from "formik";

const FormField = ({ id, label, type, value }) => {
  return (
    <div>
      <label htmlFor={id} className="text-sm text-gray-700">
        {label}
      </label>
      <Field
        type={type}
        name={id}
        id={id}
        value={value}
        autoComplete="off"
        className="border-2 rounded-lg w-full py-1 px-2 focus:outline-none focus:bg-gray-100 transition duration-300 text-gray-600 mt-1"
      />
      <ErrorMessage
        name={id}
        component="div"
        className="text-red-600 text-xs"
      />
    </div>
  );
};

FormField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default FormField;
