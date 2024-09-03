import { Formik, Form, Field } from "formik";
import PropTypes from "prop-types";
import axios from "axios";
import { toast } from "react-toastify";
import StatusOptions from "../../Components/StatusOption";
import { FaTimes } from "react-icons/fa";
import { StudentValidationSchema } from "../../validation/validationSchema";
import { StudentFormConfig } from "../../config/FormConfig";

const Basic9StudentForm = ({ onClose }) => {
  const handleSubmit = (values, { resetForm }) => {
    axios
      .post("http://localhost:3002/basic9", values)
      .then((res) => {
        console.log(res);
        toast.success("Student added successfully!");
        resetForm();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-800 bg-opacity-80">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="relative w-full max-w-3xl mx-auto">
          <div className="bg-white rounded-lg mt-20 mb-10 p-8 shadow-xl border transform transition-transform duration-300 ease-in-out">
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <FaTimes size={20} title="close" />
            </button>
            <div className="mb-10 text-center font-bold text-violet-900">
              <h2 className="text-2xl">Add New Student</h2>
              <p className="text-lg">(Basic 9)</p>
              <p className="text-sm text-red-600 ">All fields are required</p>
            </div>

            <Formik
              initialValues={StudentFormConfig.initialValues}
              validationSchema={StudentValidationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, handleBlur, resetForm }) => (
                <Form className="mx-auto">
                  <div className="grid grid-cols-2 gap-5">
                    {StudentFormConfig.fields.map((field) => (
                      <div key={field.name}>
                        <label
                          htmlFor={field.name}
                          className="block mb-2 font-bold text-gray-800"
                        >
                          {field.label}
                        </label>
                        {field.type === "select" ? (
                          <Field
                            as="select"
                            id={field.name}
                            name={field.name}
                            onBlur={handleBlur}
                            className="border-2 border-gray-400 rounded-lg w-full py-2 px-3 focus:outline-none focus:border-violet-800 transition duration-300 focus:border-2 hover:border-gray-500 hover:border-2"
                          >
                            <option value="" className="text-gray-500">
                              Select {field.label}
                            </option>
                            {field.options.map((option, index) => (
                              <option key={index} value={option}>
                                {option}
                              </option>
                            ))}
                          </Field>
                        ) : (
                          <Field
                            type={field.type}
                            id={field.name}
                            name={field.name}
                            onBlur={handleBlur}
                            className="border-2 border-gray-400 rounded-lg w-full py-2 px-3 focus:outline-none focus:border-violet-800 transition duration-300 focus:border-2 hover:border-gray-500 hover:border-2"
                          />
                        )}
                        {errors[field.name] && touched[field.name] && (
                          <div className="text-red-600 mt-2">
                            {errors[field.name]}
                          </div>
                        )}
                      </div>
                    ))}
                    <div className="w-full">
                      <label
                        htmlFor="status"
                        className="block mb-2 font-bold text-gray-800"
                      >
                        Status
                      </label>
                      <Field
                        as="select"
                        id="status"
                        name="status"
                        onBlur={handleBlur}
                        className="border-2 border-gray-400 rounded-lg w-full py-2 px-3 focus:outline-none focus:border-violet-800 transition duration-300 focus:border-2 hover:border-gray-500 hover:border-2"
                      >
                        <StatusOptions />
                      </Field>
                      {errors.status && touched.status && (
                        <div className="text-red-600 mt-2">{errors.status}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-span-full mt-10 flex justify-center font-bold text-lg space-x-4">
                    <button
                      type="submit"
                      className="bg-green-700 text-white px-4 py-1 rounded-md hover:bg-green-500 transition-colors duration-300 text-center uppercase"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={onClose}
                      className="bg-red-700 text-white px-4 py-1 rounded-md hover:bg-red-500 transition-colors duration-300 text-center uppercase"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      onClick={() => resetForm()}
                      className="bg-blue-700 text-white px-4 py-1 rounded-lg hover:bg-blue-500 transition-colors duration-300 text-center uppercase"
                    >
                      Reset
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

Basic9StudentForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Basic9StudentForm;
