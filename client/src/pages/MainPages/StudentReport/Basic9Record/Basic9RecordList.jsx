import { useState, useEffect } from "react";
import { RiAddLine } from "react-icons/ri";
import Basic9RecordForm from "./Basic9RecordForm";
import { FiSearch } from "react-icons/fi";
import Sidebar from "../../../../Components/Sidebar";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import StudentCard from "../../../../Components/StudentCard"
import axios from "axios"; // Import axios for fetching data

const Basic9RecordList = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [students, setStudents] = useState([]); // State to store students data
  const [loading, setLoading] = useState(true); // State to handle loading

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch students data from API
    axios.get("http://localhost:3002/basic9record") // Adjust the API URL as needed
      .then((response) => {
        setStudents(response.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        // Handle error as needed
      });
  }, []);

  const handleBackClick = () => {
    navigate("/StudentReport");
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  // Filter students based on search text
  const filteredStudents = students.filter((student) =>
    student.studentName.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="flex min-h-screen">
      <div className="w-full md:w-1/4 lg:w-1/6">
        <Sidebar />
      </div>
      <div className="w-full md:w-3/4 lg:w-4/5 mx-auto px-4 md:px-10 lg:px-16 xl:px-10 2xl:px-30 mt-32">
        <div className="flex justify-between items-center relative">
          <FaArrowLeft
            size={30}
            onClick={handleBackClick}
            className="mr-4 text-violet-900"
            title="back to Student Report page"
          />
          <div
            className="font-bold text-2xl bg-violet-800 
            rounded-lg px-4 py-2 text-gray-200"
          >
            <h2>BASIC NINE (9) STUDENTS' RECORDS</h2>
          </div>
          <button
            onClick={toggleFormVisibility}
            className="bg-violet-800 hover:bg-gray-200 border hover:text-violet-800 text-white py-2 px-4 
              rounded-lg transition duration-300 flex items-center"
          >
            <p className="font-semibold">Add</p>
            <RiAddLine className="text-xl" />
          </button>
          {isFormVisible && <Basic9RecordForm onClose={handleCloseForm} />}
        </div>
        <div className="flex items-center justify-end mt-[60px] flex-col md:flex-row">
          <div className="relative flex items-center w-full max-w-xs">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FiSearch className="text-gray-400" />
            </span>
            <input
              type="text"
              placeholder="Search..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="shadow-md pl-10 pr-4 py-2 border-2 rounded-lg w-full focus:outline-none focus:border-violet-800 transition duration-300 focus:border-2 hover:border-violet-700"
            />
          </div>
        </div>

        {/* Display cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 mb-16">
          {loading ? (
            <p>Loading...</p>
          ) : (
            filteredStudents.map((student) => (
              <StudentCard
                key={student.customID}
                studentId={student.customID}
                studentName={student.studentName}
                image={student.image} // Assuming `image` is part of the student data
                onView={() => console.log("View", student.customID)} // Replace with actual view logic
                onEdit={() => console.log("Edit", student.customID)} // Replace with actual edit logic
                onDelete={() => console.log("Delete", student.customID)} // Replace with actual delete logic
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Basic9RecordList;
