import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";

const Basic9RecordForm = ({onClose}) => {
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

    English_classScore: "",
    English_examScore: "",
    English_totalScore: "",
    English_position: "",
    English_grade: "",
    English_remarks: "",

    SocialStudies_classScore: "",
    SocialStudies_examScore: "",
    SocialStudies_totalScore: "",
    SocialStudies_position: "",
    SocialStudies_grade: "",
    SocialStudies_remarks: "",

    IntegratedScience_classScore: "",
    IntegratedScience_examScore: "",
    IntegratedScience_totalScore: "",
    IntegratedScience_position: "",
    IntegratedScience_grade: "",
    IntegratedScience_remarks: "",

    Computing_classScore: "",
    Computing_examScore: "",
    Computing_totalScore: "",
    Computing_position: "",
    Computing_grade: "",
    Computing_remarks: "",

    CreativeArts_classScore: "",
    CreativeArts_examScore: "",
    CreativeArts_totalScore: "",
    CreativeArts_position: "",
    CreativeArts_grade: "",
    CreativeArts_remarks: "",

    GhanaianLanguage_classScore: "",
    GhanaianLanguage_examScore: "",
    GhanaianLanguage_totalScore: "",
    GhanaianLanguage_position: "",
    GhanaianLanguage_grade: "",
    GhanaianLanguage_remarks: "",

    French_classScore: "",
    French_examScore: "",
    French_totalScore: "",
    French_position: "",
    French_grade: "",
    French_remarks: "",

    ReligiousAndMoralEducation_classScore: "",
    ReligiousAndMoralEducation_examScore: "",
    ReligiousAndMoralEducation_totalScore: "",
    ReligiousAndMoralEducation_position: "",
    ReligiousAndMoralEducation_grade: "",
    ReligiousAndMoralEducation_remarks: "",

    CareerTechnology_classScore: "",
    CareerTechnology_examScore: "",
    CareerTechnology_totalScore: "",
    CareerTechnology_position: "",
    CareerTechnology_grade: "",
    CareerTechnology_remarks: "",
   
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
  const [students, setStudents] = useState([]); // State to store Basic 9 students
  
  useEffect(() => {
    // Fetch Basic 9 students from the database
    axios
      .get("http://localhost:3002/basic9") // Update with the correct endpoint
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

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3002/basic9record", values)
      .then(() => {
        toast.success("Record added successfully!");
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
          
          English_classScore: "",
          English_examScore: "",
          English_totalScore: "",
          English_position: "",
          English_grade: "",
          English_remarks: "",
        
          SocialStudies_classScore: "",
          SocialStudies_examScore: "",
          SocialStudies_totalScore: "",
          SocialStudies_position: "",
          SocialStudies_grade: "",
          SocialStudies_remarks: "",
      
          IntegratedScience_classScore: "",
          IntegratedScience_examScore: "",
          IntegratedScience_totalScore: "",
          IntegratedScience_position: "",
          IntegratedScience_grade: "",
          IntegratedScience_remarks: "",
      
          Computing_classScore: "",
          Computing_examScore: "",
          Computing_totalScore: "",
          Computing_position: "",
          Computing_grade: "",
          Computing_remarks: "",
      
          CreativeArts_classScore: "",
          CreativeArts_examScore: "",
          CreativeArts_totalScore: "",
          CreativeArts_position: "",
          CreativeArts_grade: "",
          CreativeArts_remarks: "",
      
          GhanaianLanguage_classScore: "",
          GhanaianLanguage_examScore: "",
          GhanaianLanguage_totalScore: "",
          GhanaianLanguage_position: "",
          GhanaianLanguage_grade: "",
          GhanaianLanguage_remarks: "",
      
          French_classScore: "",
          French_examScore: "",
          French_totalScore: "",
          French_position: "",
          French_grade: "",
          French_remarks: "",
      
          ReligiousAndMoralEducation_classScore: "",
          ReligiousAndMoralEducation_examScore: "",
          ReligiousAndMoralEducation_totalScore: "",
          ReligiousAndMoralEducation_position: "",
          ReligiousAndMoralEducation_grade: "",
          ReligiousAndMoralEducation_remarks: "",
      
          CareerTechnology_classScore: "",
          CareerTechnology_examScore: "",
          CareerTechnology_totalScore: "",
          CareerTechnology_position: "",
          CareerTechnology_grade: "",
          CareerTechnology_remarks: "",
        });
      })
      .catch((err) => {
        toast.error("Failed to add record.");
        console.error(err);
      });
  };

const handleCancel = () =>{
  onClose();
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
    
    English_classScore: "",
    English_examScore: "",
    English_totalScore: "",
    English_position: "",
    English_grade: "",
    English_remarks: "",
  
    SocialStudies_classScore: "",
    SocialStudies_examScore: "",
    SocialStudies_totalScore: "",
    SocialStudies_position: "",
    SocialStudies_grade: "",
    SocialStudies_remarks: "",

    IntegratedScience_classScore: "",
    IntegratedScience_examScore: "",
    IntegratedScience_totalScore: "",
    IntegratedScience_position: "",
    IntegratedScience_grade: "",
    IntegratedScience_remarks: "",

    Computing_classScore: "",
    Computing_examScore: "",
    Computing_totalScore: "",
    Computing_position: "",
    Computing_grade: "",
    Computing_remarks: "",

    CreativeArts_classScore: "",
    CreativeArts_examScore: "",
    CreativeArts_totalScore: "",
    CreativeArts_position: "",
    CreativeArts_grade: "",
    CreativeArts_remarks: "",

    GhanaianLanguage_classScore: "",
    GhanaianLanguage_examScore: "",
    GhanaianLanguage_totalScore: "",
    GhanaianLanguage_position: "",
    GhanaianLanguage_grade: "",
    GhanaianLanguage_remarks: "",

    French_classScore: "",
    French_examScore: "",
    French_totalScore: "",
    French_position: "",
    French_grade: "",
    French_remarks: "",

    ReligiousAndMoralEducation_classScore: "",
    ReligiousAndMoralEducation_examScore: "",
    ReligiousAndMoralEducation_totalScore: "",
    ReligiousAndMoralEducation_position: "",
    ReligiousAndMoralEducation_grade: "",
    ReligiousAndMoralEducation_remarks: "",

    CareerTechnology_classScore: "",
    CareerTechnology_examScore: "",
    CareerTechnology_totalScore: "",
    CareerTechnology_position: "",
    CareerTechnology_grade: "",
    CareerTechnology_remarks: "",
  });
}



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
           
            <h2 className="text-lg font-semibold mb-10 text-center">
              Add Student Record
            </h2>
    <form onSubmit={handleSubmit} className="mx-auto">

      <div className="grid grid-cols-3 gap-4">
      <div className="mb-4">
                  <label className="block text-gray-700">Student ID</label>
                  <select
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
                  <label className="block text-gray-700">Student Name</label>
                  <input
                    type="text"
                    name="studentName"
                    value={values.studentName}
                    readOnly
                    className="bg-gray-200 border-2 border-gray-300 rounded-lg w-full py-2 px-3 focus:outline-none focus:border-violet-800 transition duration-300 focus:border-2 hover:border-gray-500 hover:border-2 cursor-not-allowed"
                  />
                </div>




      <div className="mb-4">
        <label className="block text-gray-700">Term</label>
        <select
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
     

      {subjects.map((subject) => (
        <div key={subject} className="mb-6">
          <h3 className="text-lg font-bold mb-2">{subject}</h3>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-700">Class Score (%)</label>
              <input
                type="number"
                name={`${subject.replace(/\s+/g, "")}_classScore`}
                value={values[`${subject.replace(/\s+/g, "")}_classScore`]}
                onChange={handleChange}
                required
                className={inputStyle}
              />
            </div>

            <div>
              <label className="block text-gray-700">Exam Score (%)</label>
              <input
                type="number"
                name={`${subject.replace(/\s+/g, "")}_examScore`}
                value={values[`${subject.replace(/\s+/g, "")}_examScore`]}
                onChange={handleChange}
                required
                className={inputStyle}
              />
            </div>

            <div>
              <label className="block text-gray-700">Total Score (%)</label>
              <input
                type="number"
                name={`${subject.replace(/\s+/g, "")}_totalScore`}
                value={values[`${subject.replace(/\s+/g, "")}_totalScore`]}
                onChange={handleChange}
                readOnly
                className="bg-gray-200 border-2 border-gray-300 rounded-lg w-full py-2 px-3 focus:outline-none focus:border-violet-800 transition duration-300 focus:border-2 hover:border-gray-500 hover:border-2 cursor-not-allowed"
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
                className={inputStyle}
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
                className={inputStyle}
              />
            </div>

            <div>
              <label className="block text-gray-700">Remarks</label>
              <textarea
                name={`${subject.replace(/\s+/g, "")}_remarks`}
                value={values[`${subject.replace(/\s+/g, "")}_remarks`]}
                onChange={handleChange}
                required
                className={inputStyle}
              />
            </div>
          </div>
        </div>
      ))}

<div className="col-span-full mt-6 flex justify-center font-bold text-lg">
                <button
                  type="submit"
                  className="mr-3 bg-green-700 text-white px-10 py-1 rounded-md hover:bg-green-500 transition-colors duration-300 text-center uppercase"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="ml-4 bg-red-700 text-white px-10 py-1 rounded-md hover:bg-red-500 transition-colors duration-300 text-center uppercase"
                  onChange={handleChange}
                >
                  Close
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
