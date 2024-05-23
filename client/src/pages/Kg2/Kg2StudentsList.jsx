// Basic9StudentsList.js
import { useState } from "react";
import { Link } from "react-router-dom";
import { RiAddLine } from "react-icons/ri";
import { BiArrowBack } from "react-icons/bi";
import Navbar from "../../Components/Navbar";
import AddStudentForm from "./AddStudentForm";
import StudentTable from "./StudentTable";

const Kg2StudentsList = () => {
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
          className="fixed top-[110px] right-[60px] bg-violet-800 hover:bg-gray-200 border hover:text-violet-800 text-white py-2 px-2 rounded-full transition duration-300 flex items-center z-10"
        >
          <RiAddLine className="text-xl" />
        </button>
        {isFormVisible && <AddStudentForm onClose={handleCloseForm} />}
      </div>

      <div className="fixed ml-10 top-[110px] font-bold text-2xl bg-violet-700 rounded-lg px-4 py-3 flex items-center text-gray-200 z-10">
        <Link to="/Creche">
          <BiArrowBack
            className="mr-2"
            style={{ width: "40px", height: "40px" }}
          />
        </Link>
        <h2>KG TWO (2) STUDENTS' LIST</h2>
      </div>

      <div className="flex flex-col items-center min-h-screen px-4 py-6 pt-32">
        <div className="w-full max-w-[1500px] border border-gray-100 rounded-lg mt-16 px-3">
          <StudentTable />
        </div>
      </div>
    </div>
  );
};

export default Kg2StudentsList;
