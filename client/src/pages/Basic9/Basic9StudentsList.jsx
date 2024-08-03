import { useState } from "react";
import { RiAddLine } from "react-icons/ri";
import StudentTable from "./StudentTable";
import AddStudentForm from "./AddStudentForm";
import CustomSelect from "../../assets/CustomSelect";
import { FiSearch } from "react-icons/fi";
import Sidebar from "../../Components/Sidebar";

const Basic9StudentsList = () => {
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
    <div className="flex min-h-screen">
       <div className="w-full md:w-1/4 lg:w-1/6">
        <Sidebar />
      </div>
      <div className="w-full md:w-3/4 lg:w-4/5 mx-auto px-4 md:px-10 lg:px-16 xl:px-10 2xl:px-30 mt-32">
        <div className="flex justify-between items-center relative">
          <div
            className="font-bold text-2xl bg-violet-800 
          rounded-lg px-4 py-2 text-gray-200"
          >
            <h2>BASIC NINE (9) LEARNERS' LIST</h2>
          </div>
          <button
            onClick={toggleFormVisibility}
            className="bg-violet-800 hover:bg-gray-200 border hover:text-violet-800 text-white py-2 px-4 
              rounded-lg transition duration-300 flex items-center"
          >
            <p className="font-semibold">Add</p>
            <RiAddLine className="text-xl" />
          </button>
          {isFormVisible && <AddStudentForm onClose={handleCloseForm} />}
        </div>
        <div className="flex items-center justify-between mt-[60px] flex-col md:flex-row">
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

        <div className="mt-[20px] flex justify-center">
        <div className="w-full border border-gray-200 rounded-lg px-3 py-3 shadow-md">
            <StudentTable filters={filters} searchText={searchText} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basic9StudentsList;
