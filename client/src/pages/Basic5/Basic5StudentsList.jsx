import { useState } from "react";
import { Link } from "react-router-dom";
import { RiAddLine } from "react-icons/ri";
import { BiArrowBack } from "react-icons/bi";
import Navbar from "../../Components/Navbar";
import AddStudentForm from "./AddStudentForm";
import StudentTable from "./StudentTable";

const Basic5StudentsList = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  return (
    <div>
      <Navbar />
      <div className="relative mr-5">
        <button
          onClick={toggleFormVisibility}
          className="fixed bottom-10 right-10 bg-violet-800 hover:bg-gray-200 border hover:text-violet-800 text-white py-2 px-2 rounded-full transition duration-300 flex items-center z-10"
        >
          <RiAddLine className="text-xl" />
        </button>
        {isFormVisible && <AddStudentForm onClose={handleCloseForm} />}
      </div>

      <div className="fixed ml-10 top-[110px] font-bold text-2xl bg-violet-700 rounded-lg px-4 py-3 flex items-center text-gray-200">
        <Link to="/Primary">
          <BiArrowBack
            className="mr-2"
            style={{ width: "40px", height: "40px" }}
          />
        </Link>
        <h2>BASIC FIVE (5) STUDENTS' LIST</h2>
      </div>

      <div className="flex justify-center items-center min-h-screen px-4 py-6 mt-5">
        <div className="w-full max-w-[1500px] border border-gray-100 rounded-lg">
          <StudentTable />
        </div>
      </div>
    </div>
  );
};

export default Basic5StudentsList;
