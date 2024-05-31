// Basic9StudentsList.js
import { useState } from "react";
import { Link } from "react-router-dom";
import { RiAddLine } from "react-icons/ri";
import { BiArrowBack } from "react-icons/bi";
import Navbar from "../../Components/Navbar";
import AddStudentForm from "./AddStudentForm";
import StudentTable from "./StudentTable";
import CustomSelect from "../../assets/CustomSelect";
import { BiSearch } from "react-icons/bi";

const Basic3StudentsList = () => {
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

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
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
            <Link to="/Primary">
              <BiArrowBack
                className="mr-2"
                style={{ width: "30px", height: "30px" }}
              />
            </Link>
            <h2>BASIC THREE (3) LEARNERS' LIST</h2>
          </div>
        </div>
        <div className="mt-[90px] flex items-center justify-between">
          <div className="filters flex items-center space-x-4 ">
            <CustomSelect
              name="age"
              value={filters.age}
              onChange={handleFilterChange}
              options={[
                { value: "", label: "All Ages" },
                { value: "1-4", label: "1-4" },
                { value: "5-9", label: "5-9" },
                { value: "10-12", label: "10-12" },
                { value: "13-15", label: "13-15" },
                { value: "16-18", label: "16-18" },
                // Add more options as needed
              ]}
            />
            <CustomSelect
              name="status"
              value={filters.status}
              onChange={handleFilterChange}
              options={[
                { value: "", label: "All Statuses" },
                { value: "fresher", label: "fresher" },
                { value: "continuing", label: "continuing" },
                { value: "completed", label: "completed" },
              ]}
            />
            <CustomSelect
              name="gender"
              value={filters.gender}
              onChange={handleFilterChange}
              options={[
                { value: "", label: "All Genders" },
                { value: "male", label: "Male" },
                { value: "female", label: "Female" },
              ]}
            />
          </div>
          <div className="w-full max-w-[300px] relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchText}
              onChange={handleSearchChange}
              className="pl-10 px-4 py-2 border-2 rounded-2xl w-full max-w-sm mx-auto focus:outline-none focus:border-violet-800 transition duration-300 focus:border-2 hover:border-gray-500 hover:border-2 shadow"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400 pointer-events-none">
              <BiSearch />
            </div>
          </div>
        </div>

        <div className="pt-4 flex-grow">
          <div className="w-full border border-gray-100 rounded-lg px-3">
            <StudentTable filters={filters} searchText={searchText} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basic3StudentsList;
