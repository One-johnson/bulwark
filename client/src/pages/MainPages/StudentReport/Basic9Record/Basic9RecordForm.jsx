import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";

const subjects = ["Mathematics", "English"];

const Basic9RecordForm = ({ onClose }) => {
  const [values, setValues] = useState({
    customID: "",
    studentName: "",
    term: "",
    // Initialize state for each subject dynamically
    ...subjects.reduce(
      (acc, subject) => ({
        ...acc,
        [`${subject}_classScore`]: "",
        [`${subject}_examScore`]: "",
        [`${subject}_totalScore`]: "",
        [`${subject}_position`]: "",
        [`${subject}_grade`]: "",
        [`${subject}_remarks`]: "",
      }),
      {}
    ),
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [students, setStudents] = useState([]);

  const terms = ["Term 1", "Term 2", "Term 3"];

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3002/basic9")
      .then((response) => {
        setStudents(response.data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to fetch students.");
        setLoading(false);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues((prevData) => {
      const [subject, field] = name.split("_");
      const updatedData = {
        ...prevData,
        [name]: value,
      };

      if (field === "classScore" || field === "examScore") {
        const classScore =
          parseFloat(updatedData[`${subject}_classScore`]) || 0;
        const examScore = parseFloat(updatedData[`${subject}_examScore`]) || 0;
        updatedData[`${subject}_totalScore`] = classScore + examScore;
      }

      return updatedData;
    });
  };

  const handleStudentChange = (e) => {
    const selectedID = e.target.value;
    const selectedStudent = students.find(
      (student) => student.customID === selectedID
    );

    setValues((prevData) => ({
      ...prevData,
      customID: selectedID,
      studentName: selectedStudent
        ? `${selectedStudent.firstName} ${selectedStudent.lastName}`
        : "",
    }));
  };

  const validateForm = () => {
    const validationErrors = {};

    if (!values.customID) validationErrors.customID = "Student ID is required.";
    if (!values.term) validationErrors.term = "Term is required.";

    subjects.forEach((subject) => {
      if (!values[`${subject}_classScore`])
        validationErrors[
          `${subject}_classScore`
        ] = `${subject} class score is required.`;
      if (!values[`${subject}_examScore`])
        validationErrors[
          `${subject}_examScore`
        ] = `${subject} exam score is required.`;
      if (!values[`${subject}_grade`])
        validationErrors[`${subject}_grade`] = `${subject} grade is required.`;
      if (!values[`${subject}_position`])
        validationErrors[`${subject}_position`] = `${subject} position is required.`;
      if (!values[`${subject}_remarks`])
        validationErrors[
          `${subject}_remarks`
        ] = `${subject} remarks are required.`;
    });

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    axios
      .post("http://localhost:3002/basic9record", values)
      .then(() => {
        toast.success("Record added successfully!");
        resetForm();
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to add record.");
        setLoading(false);
      });
  };

  const resetForm = () => {
    setValues({
      customID: "",
      studentName: "",
      term: "",
      ...subjects.reduce(
        (acc, subject) => ({
          ...acc,
          [`${subject}_classScore`]: "",
          [`${subject}_examScore`]: "",
          [`${subject}_totalScore`]: "",
          [`${subject}_position`]: "",
          [`${subject}_grade`]: "",
          [`${subject}_remarks`]: "",
        }),
        {}
      ),
    });
    setErrors({});
  };

  const handleCancel = () => {
    resetForm();
    onClose();
  };

  const inputClass =
    "border-2 border-gray-300 rounded-lg w-full py-2 px-3 focus:outline-none focus:border-violet-800 transition duration-300 hover:border-gray-500";
  const errorClass = "text-red-500 text-sm";

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-800 bg-opacity-80">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="relative w-full max-w-4xl mx-auto">
          <div className="bg-white rounded-lg mt-20 mb-10 p-6 shadow-xl border transform transition-transform duration-300 ease-in-out">
            <button
              type="button"
              onClick={handleCancel}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none transition duration-300"
            >
              <FaTimes size={20} />
            </button>
            <h2 className="text-2xl mb-10 text-center font-bold text-violet-900">
              Basic 9 Exam Record
              <p className="text-sm">(Enter records for multiple subjects)</p>
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-3 gap-4">
                <div className="mb-4">
                  <label htmlFor="customID" className="block text-gray-700">
                    Student ID
                  </label>
                  <select
                    id="customID"
                    name="customID"
                    value={values.customID}
                    onChange={handleStudentChange}
                    className={inputClass}
                    disabled={loading}
                  >
                    <option value="">Select Student</option>
                    {students.map((student) => (
                      <option key={student.customID} value={student.customID}>
                        {student.customID}
                      </option>
                    ))}
                  </select>
                  {errors.customID && (
                    <p className={errorClass}>{errors.customID}</p>
                  )}
                </div>
                <div className="mb-4">
                  <label htmlFor="studentName" className="block text-gray-700">
                    Student Name
                  </label>
                  <input
                    id="studentName"
                    type="text"
                    name="studentName"
                    value={values.studentName}
                    readOnly
                    className="bg-gray-200 border-2 border-gray-300 rounded-lg w-full py-2 px-3 focus:outline-none cursor-not-allowed"
                    disabled
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="term" className="block text-gray-700">
                    Term
                  </label>
                  <select
                    id="term"
                    name="term"
                    value={values.term}
                    onChange={handleInputChange}
                    className={inputClass}
                    disabled={loading}
                  >
                    <option value="">Select Term</option>
                    {terms.map((term, index) => (
                      <option key={index} value={term}>
                        {term}
                      </option>
                    ))}
                  </select>
                  {errors.term && <p className={errorClass}>{errors.term}</p>}
                </div>
              </div>

              {subjects.map((subject) => (
                <div key={subject} className="mb-3">
                  <h3 className="text-white text-lg font-bold mb-2 bg-violet-900 rounded px-4 py-1">
                    {subject}
                  </h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label
                        className="block text-gray-700"
                        htmlFor={`${subject}_classScore`}
                      >
                        Class Score (%)
                      </label>
                      <input
                        id={`${subject}_classScore`}
                        type="number"
                        name={`${subject}_classScore`}
                        value={values[`${subject}_classScore`]}
                        onChange={handleInputChange}
                        className={inputClass}
                        disabled={loading}
                      />
                      {errors[`${subject}_classScore`] && (
                        <p className={errorClass}>
                          {errors[`${subject}_classScore`]}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        className="block text-gray-700"
                        htmlFor={`${subject}_examScore`}
                      >
                        Exam Score (%)
                      </label>
                      <input
                        id={`${subject}_examScore`}
                        type="number"
                        name={`${subject}_examScore`}
                        value={values[`${subject}_examScore`]}
                        onChange={handleInputChange}
                        className={inputClass}
                        disabled={loading}
                      />
                      {errors[`${subject}_examScore`] && (
                        <p className={errorClass}>
                          {errors[`${subject}_examScore`]}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        className="block text-gray-700"
                        htmlFor={`${subject}_totalScore`}
                      >
                        Total Score
                      </label>
                      <input
                        id={`${subject}_totalScore`}
                        type="number"
                        name={`${subject}_totalScore`}
                        value={values[`${subject}_totalScore`]}
                        readOnly
                        className="bg-gray-200 border-2 border-gray-300 rounded-lg w-full py-2 px-3 focus:outline-none cursor-not-allowed"
                        disabled
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mt-2">
                    <div>
                      <label
                        className="block text-gray-700"
                        htmlFor={`${subject}_grade`}
                      >
                        Grade
                      </label>
                      <input
                        id={`${subject}_grade`}
                        type="text"
                        name={`${subject}_grade`}
                        value={values[`${subject}_grade`]}
                        onChange={handleInputChange}
                        className={inputClass}
                        disabled={loading}
                      />
                      {errors[`${subject}_grade`] && (
                        <p className={errorClass}>
                          {errors[`${subject}_grade`]}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        className="block text-gray-700"
                        htmlFor={`${subject}_position`}
                      >
                        Position
                      </label>
                      <input
                        id={`${subject}_position`}
                        type="text"
                        name={`${subject}_position`}
                        value={values[`${subject}_position`]}
                        onChange={handleInputChange}
                        className={inputClass}
                        disabled={loading}
                      />
                       {errors[`${subject}_position`] && (
                        <p className={errorClass}>
                          {errors[`${subject}_position`]}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        className="block text-gray-700"
                        htmlFor={`${subject}_remarks`}
                      >
                        Remarks
                      </label>
                      <input
                        id={`${subject}_remarks`}
                        type="text"
                        name={`${subject}_remarks`}
                        value={values[`${subject}_remarks`]}
                        onChange={handleInputChange}
                        className={inputClass}
                        disabled={loading}
                      />
                      {errors[`${subject}_remarks`] && (
                        <p className={errorClass}>
                          {errors[`${subject}_remarks`]}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex justify-center mt-6  space-x-4">
                
                <button
                  type="submit"
                  className={`px-4 py-2 bg-green-600 hover:bg-green-800  text-white rounded-md transition duration-300 uppercase font-bold ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={loading}
                >
                  {loading ? "Saving..." : "Save Record"}
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-4 py-2 bg-red-600 hover:bg-red-800  text-white rounded-md transition duration-300 uppercase font-bold"
                  disabled={loading}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Basic9RecordForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Basic9RecordForm;
