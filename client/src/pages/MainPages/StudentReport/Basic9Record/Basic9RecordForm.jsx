import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Basic9RecordForm = () => {
  const [values, setValues] = useState({
    customID: "",
    term: "",
    Mathematics_classScore: "",
    Mathematics_examScore: "",
    Mathematics_totalScore: "",
    Mathematics_position: "",
    Mathematics_grade: "",
    Mathematics_remarks: "",
    // Repeat for each subject
    English_classScore: "",
    English_examScore: "",
    English_totalScore: "",
    English_position: "",
    English_grade: "",
    English_remarks: "",
    // Continue for other subjects...
  });

  const subjects = [
    "Mathematics",
    "English",
    "Social Studies",
    "Integrated Science",
    "Computing",
    "Creative Arts",
    "Ghanaian Language",
    "French",
    "Religious and Moral Education",
    "Career Technology",
  ];

  const terms = ["Term 1", "Term 2", "Term 3"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    const subject = name.split("_")[0]; // Extract the subject name
    const fieldType = name.split("_")[1]; // Extract the field type (classScore, examScore, etc.)

    setValues((prevData) => {
      const updatedData = {
        ...prevData,
        [name]: value,
      };

      if (fieldType === "classScore" || fieldType === "examScore") {
        const classScore = parseFloat(updatedData[`${subject}_classScore`]) || 0;
        const examScore = parseFloat(updatedData[`${subject}_examScore`]) || 0;
        updatedData[`${subject}_totalScore`] = classScore + examScore;
      }

      return updatedData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3002/basic9record", values)
      .then(() => {
        toast.success("Record added successfully!");
        setValues({
          customID: "",
          term: "",
          Mathematics_classScore: "",
          Mathematics_examScore: "",
          Mathematics_totalScore: "",
          Mathematics_position: "",
          Mathematics_grade: "",
          Mathematics_remarks: "",
          // Reset fields for each subject
          English_classScore: "",
          English_examScore: "",
          English_totalScore: "",
          English_position: "",
          English_grade: "",
          English_remarks: "",
          // Continue for other subjects...
        });
      })
      .catch((err) => {
        toast.error("Failed to add record.");
        console.error(err);
      });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-800 bg-opacity-80">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="relative w-full max-w-5xl mx-auto">
          <div className="bg-white rounded-lg mt-20 mb-10 p-6 shadow-xl border transform transition-transform duration-300 ease-in-out">
            <h2 className="text-lg font-semibold mb-4 text-center">
              Add Student Record
            </h2>
    <form onSubmit={handleSubmit} className="mx-auto">
      <div className="mb-4">
        <label className="block text-gray-700">Student ID</label>
        <input
          type="text"
          name="customID"
          value={values.customID}
          onChange={handleChange}
          required
          className="mt-2 p-2 border rounded-lg w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Term</label>
        <select
          name="term"
          value={values.term}
          onChange={handleChange}
          required
          className="mt-2 p-2 border rounded-lg w-full"
        >
          <option value="">Select Term</option>
          {terms.map((term, index) => (
            <option key={index} value={term}>
              {term}
            </option>
          ))}
        </select>
      </div>

      {subjects.map((subject) => (
        <div key={subject} className="mb-6">
          <h3 className="text-lg font-bold mb-2">{subject}</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Class Score</label>
              <input
                type="number"
                name={`${subject.replace(/\s+/g, "")}_classScore`}
                value={values[`${subject.replace(/\s+/g, "")}_classScore`]}
                onChange={handleChange}
                required
                className="mt-2 p-2 border rounded-lg w-full"
              />
            </div>

            <div>
              <label className="block text-gray-700">Exam Score</label>
              <input
                type="number"
                name={`${subject.replace(/\s+/g, "")}_examScore`}
                value={values[`${subject.replace(/\s+/g, "")}_examScore`]}
                onChange={handleChange}
                required
                className="mt-2 p-2 border rounded-lg w-full"
              />
            </div>

            <div>
              <label className="block text-gray-700">Total Score</label>
              <input
                type="number"
                name={`${subject.replace(/\s+/g, "")}_totalScore`}
                value={values[`${subject.replace(/\s+/g, "")}_totalScore`]}
                onChange={handleChange}
                readOnly
                className="mt-2 p-2 border rounded-lg w-full bg-gray-100 cursor-not-allowed"
              />
            </div>

            <div>
              <label className="block text-gray-700">Position</label>
              <input
                type="number"
                name={`${subject.replace(/\s+/g, "")}_position`}
                value={values[`${subject.replace(/\s+/g, "")}_position`]}
                onChange={handleChange}
                required
                className="mt-2 p-2 border rounded-lg w-full"
              />
            </div>

            <div>
              <label className="block text-gray-700">Grade</label>
              <input
                type="text"
                name={`${subject.replace(/\s+/g, "")}_grade`}
                value={values[`${subject.replace(/\s+/g, "")}_grade`]}
                onChange={handleChange}
                required
                className="mt-2 p-2 border rounded-lg w-full"
              />
            </div>

            <div>
              <label className="block text-gray-700">Remarks</label>
              <textarea
                name={`${subject.replace(/\s+/g, "")}_remarks`}
                value={values[`${subject.replace(/\s+/g, "")}_remarks`]}
                onChange={handleChange}
                required
                className="mt-2 p-2 border rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      ))}

      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Basic9RecordForm;
