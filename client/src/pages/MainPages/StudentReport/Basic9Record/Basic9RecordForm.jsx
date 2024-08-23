import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";

const Basic9RecordForm = ({ onClose }) => {
  const [values, setValues] = useState({
    customID: "",
    studentName: "",
    term: "",
    Mathematics_classScore: "",
    Mathematics_examScore: "",
    Mathematics_totalScore: "",
    Mathematics_position: "",
    Mathematics_grade: "",
    Mathematics_remarks: "",
  });

  const terms = ["Term 1", "Term 2", "Term 3"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    const fieldType = name.split("_")[1]; // Extract the field type (classScore, examScore, etc.)

    setValues((prevData) => {
      const updatedData = {
        ...prevData,
        [name]: value,
      };

      if (fieldType === "classScore" || fieldType === "examScore") {
        const classScore =
          parseFloat(updatedData["Mathematics_classScore"]) || 0;
        const examScore = parseFloat(updatedData["Mathematics_examScore"]) || 0;
        updatedData["Mathematics_totalScore"] = classScore + examScore;
      }

      return updatedData;
    });
  };

  const [students, setStudents] = useState([]); // State to store Basic 9 students

  useEffect(() => {
    // Fetch Basic 9 students from the database
    axios
      .get("http://localhost:3002/basic9")
      .then((response) => {
        setStudents(response.data); // Assuming the API returns an array of students
      })
      .catch((err) => {
        toast.error("Failed to fetch students.");
        console.error(err);
      });
  }, []);

  const handleStudentChange = (e) => {
    const selectedStudentID = e.target.value;
    const selectedStudent = students.find(
      (student) => student.customID === selectedStudentID
    );
    setValues((prevData) => ({
      ...prevData,
      customID: selectedStudentID,
      studentName: selectedStudent
        ? `${selectedStudent.firstName} ${selectedStudent.lastName}`
        : "",
    }));
  };

  const resetForm = () => {
    setValues({
      customID: "",
      studentName: "",
      term: "",
      Mathematics_classScore: "",
      Mathematics_examScore: "",
      Mathematics_totalScore: "",
      Mathematics_position: "",
      Mathematics_grade: "",
      Mathematics_remarks: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3002/basic9record", values)
      .then(() => {
        toast.success("Record added successfully!");
        resetForm();
      })
      .catch((err) => {
        toast.error("Failed to add record.");
        console.error(err);
      });
  };

  const handleCancel = () => {
    onClose();
    resetForm();
  };

  const inputStyle =
    "border-2 border-gray-300 rounded-lg w-full py-2 px-3 focus:outline-none focus:border-violet-800 transition duration-300 focus:border-2 hover:border-gray-500 hover:border-2";

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-800 bg-opacity-80">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="relative w-full max-w-4xl mx-auto">
          <div className="bg-white rounded-lg mt-20 mb-10 p-6 shadow-xl border transform transition-transform duration-300 ease-in-out">
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <FaTimes size={20} />
            </button>
            <h2 className="text-2xl mb-10 text-center font-bold text-violet-900">
              Basic 9 Exam Record
              <p className="text-sm">(Enter records for Mathematics)</p>
            </h2>
            <form onSubmit={handleSubmit} className="mx-auto">
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
                    required
                    className={inputStyle}
                  >
                    <option value="">Select Student</option>
                    {students.map((student) => (
                      <option key={student.customID} value={student.customID}>
                        {student.customID}
                      </option>
                    ))}
                  </select>
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
                    className="bg-gray-200 border-2 border-gray-300 rounded-lg w-full py-2 px-3 focus:outline-none focus:border-violet-800 transition duration-300 focus:border-2 hover:border-gray-500 hover:border-2 cursor-not-allowed"
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
                    onChange={handleChange}
                    required
                    className={inputStyle}
                  >
                    <option value="">Select Term</option>
                    {terms.map((term, index) => (
                      <option key={index} value={term}>
                        {term}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-3">
                <h3 className="text-white text-lg font-bold mb-2 bg-violet-900 rounded px-4 py-1">
                  Mathematics
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label
                      className="block text-gray-700"
                      htmlFor="Mathematics_classScore"
                    >
                      Class Score (%)
                    </label>
                    <input
                      id="Mathematics_classScore"
                      type="number"
                      name="Mathematics_classScore"
                      value={values.Mathematics_classScore}
                      onChange={handleChange}
                      required
                      className={inputStyle}
                    />
                  </div>

                  <div>
                    <label
                      className="block text-gray-700"
                      htmlFor="Mathematics_examScore"
                    >
                      Exam Score (%)
                    </label>
                    <input
                      id="Mathematics_examScore"
                      type="number"
                      name="Mathematics_examScore"
                      value={values.Mathematics_examScore}
                      onChange={handleChange}
                      required
                      className={inputStyle}
                    />
                  </div>

                  <div>
                    <label
                      className="block text-gray-700"
                      htmlFor="Mathematics_totalScore"
                    >
                      Total Score (%)
                    </label>
                    <input
                      id="Mathematics_totalScore"
                      type="number"
                      name="Mathematics_totalScore"
                      value={values.Mathematics_totalScore}
                      readOnly
                      className="bg-gray-200 border-2 border-gray-300 rounded-lg w-full py-2 px-3 focus:outline-none cursor-not-allowed"
                    />
                  </div>

                  <div>
                    <label
                      className="block text-gray-700"
                      htmlFor="Mathematics_position"
                    >
                      Position
                    </label>
                    <input
                      id="Mathematics_position"
                      type="number"
                      name="Mathematics_position"
                      value={values.Mathematics_position}
                      onChange={handleChange}
                      className={inputStyle}
                    />
                  </div>

                  <div>
                    <label
                      className="block text-gray-700"
                      htmlFor="Mathematics_grade"
                    >
                      Grade
                    </label>
                    <input
                      id="Mathematics_grade"
                      type="text"
                      name="Mathematics_grade"
                      value={values.Mathematics_grade}
                      onChange={handleChange}
                      required
                      className={inputStyle}
                    />
                  </div>

                  <div>
                    <label
                      className="block text-gray-700"
                      htmlFor="Mathematics_remarks"
                    >
                      Remarks
                    </label>
                    <textarea
                      id="Mathematics_remarks"
                      name="Mathematics_remarks"
                      value={values.Mathematics_remarks}
                      onChange={handleChange}
                      required
                      className={inputStyle}
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full mt-6 flex justify-center font-bold text-lg">
                <button
                  type="submit"
                  className="mr-3 bg-green-700 text-white px-10 py-1 rounded-md hover:bg-green-500 transition-colors duration-300"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="bg-red-700 text-white px-10 py-1 rounded-md hover:bg-red-500 transition-colors duration-300"
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
