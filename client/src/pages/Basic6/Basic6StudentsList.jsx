import { useState } from "react";
import { Link } from "react-router-dom";
import { RiAddLine } from "react-icons/ri";
import { BiArrowBack } from "react-icons/bi";
import Navbar from "../../Components/Navbar";
import StudentTable from "./StudentTable";
import AddStudentForm from "./AddStudentForm";
import CustomSelect from "../../assets/CustomSelect";
import { FiSearch } from "react-icons/fi";

const Basic6StudentsList = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filters, setFilters] = useState({
    age: "",
    status: "",
    gender: "",
  });

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <Navbar />
      <div className="mx-4 sm:mx-8 md:mx-auto md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl">
        <div className="flex justify-between items-center relative mt-[110px]">
          <button
            onClick={toggleFormVisibility}
            className="fixed right-[30px] bg-violet-800 hover:bg-gray-200 border hover:text-violet-800 text-white py-2 px-2 
              rounded-full transition duration-300 flex items-center z-10"
          >
            <RiAddLine className="text-xl" />
          </button>
          {isFormVisible && <AddStudentForm onClose={handleCloseForm} />}

          <div
            className="fixed font-bold text-xl sm:text-xl bg-violet-700 
          rounded-lg px-4 py-2 flex items-center text-gray-200 z-10"
          >
            <Link to="/Primary">
              <BiArrowBack
                className="mr-2"
                style={{ width: "30px", height: "30px" }}
              />
            </Link>
            <h2>BASIC SIX (6) LEARNERS' LIST</h2>
          </div>
        </div>
        <div className="flex items-center justify-between mt-[60px]">
          <div className="flex items-center space-x-4 p-2 ">
            <CustomSelect
              name="age"
              value={filters.age}
              onChange={handleFilterChange}
              options={[
                { value: "", label: "All Ages" },
                { value: "1-4" },
                { value: "5-8" },
                { value: "9-12" },
                { value: "13-17" },

                // Add more options as needed
              ]}
            />
            <CustomSelect
              name="status"
              value={filters.status}
              onChange={handleFilterChange}
              options={[
                { value: "", label: "All Statuses" },
                { value: "fresher" },
                { value: "continuing" },
                { value: "completed" },
              ]}
            />
            <CustomSelect
              name="gender"
              value={filters.gender}
              onChange={handleFilterChange}
              options={[
                { value: "", label: "All Genders" },
                { value: "male" },
                { value: "female" },
              ]}
            />
          </div>
          <div className="relative flex items-center w-full max-w-xs">
            <FiSearch className="absolute left-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="shadow-xl pl-10 pr-4 py-2 border-2 rounded-lg w-full focus:outline-none focus:border-violet-800 transition duration-300 focus:border-2 hover:border-violet-700"
            />
          </div>
        </div>

        <div className="mt-[20px]">
          <div className="w-full border border-gray-100 rounded-lg px-3 py-3">
            <StudentTable filters={filters} searchText={searchText} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basic6StudentsList;
