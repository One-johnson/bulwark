// Basic9StudentsList.js
import { useState } from "react";
import { Link } from "react-router-dom";
import { RiAddLine } from "react-icons/ri";
import { BiArrowBack } from "react-icons/bi";
import Navbar from "../../Components/Navbar";
import StudentTable from "./StudentTable";
import AddStudentForm from "./AddStudentForm";

const Nursery1StudentsList = () => {
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
      <div className="mx-4 sm:mx-8 md:mx-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl">
        <div className="flex justify-between items mt-[90px]">
          <div className="relative">
            <button
              onClick={toggleFormVisibility}
              className="fixed right-[30px] bg-violet-800 hover:bg-gray-200 border hover:text-violet-800 text-white py-2 px-2 
              rounded-full transition duration-300 flex items-center z-10"
            >
              <RiAddLine className="text-xl" />
            </button>
            {isFormVisible && <AddStudentForm onClose={handleCloseForm} />}
          </div>

          <div
            className="fixed font-bold text-xl sm:text-xl bg-violet-700 
          rounded-lg px-4 py-2 flex items-center text-gray-200 z-10"
          >
            <Link to="/Creche">
              <BiArrowBack
                className="mr-2"
                style={{ width: "30px", height: "30px" }}
              />
            </Link>
            <h2>NURSERY ONE (1) LEARNERS' LIST</h2>
          </div>
        </div>

        <div className="mt-[90px]">
          <div className="w-full border border-gray-100 rounded-lg px-3 py-3">
            <StudentTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nursery1StudentsList;
