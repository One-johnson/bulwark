import { useState } from "react";
import { FaList } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import Card from "../../Components/Card";
import ClassLinks from "../../Components/ClassLinks";
import Sidebar from "../../Components/Sidebar";

function Primary() {
  const [searchQuery, setSearchQuery] = useState("");

  const ClassListItems = [
    {
      path: "/Basic1StudentsList",
      icon: (
        <FaList className="text-white rounded-xl shadow-lg p-4 bg-red-700" />
      ),
      label: "Basic 1",
      description:
        "Introduction to fundamental concepts and skills in various subjects...",
    },
    {
      path: "/Basic2StudentsList",
      icon: (
        <FaList className="text-white rounded-xl shadow-lg p-4 bg-red-700" />
      ),
      label: "Basic 2",
      description:
        "Building on foundational knowledge with more advanced topics and activities...",
    },
    {
      path: "/Basic3StudentsList",
      icon: (
        <FaList className="text-white rounded-xl shadow-lg p-4 bg-red-700" />
      ),
      label: "Basic 3",
      description:
        "Exploring deeper levels of understanding in core subjects...",
    },
    {
      path: "/Basic4StudentsList",
      icon: (
        <FaList className="text-white rounded-xl shadow-lg p-4 bg-red-700" />
      ),
      label: "Basic 4",
      description:
        "Consolidating knowledge and skills for academic advancement...",
    },
    {
      path: "/Basic5StudentsList",
      icon: (
        <FaList className="text-white rounded-xl shadow-lg p-4 bg-red-700" />
      ),
      label: "Basic 5",
      description:
        "Preparing students for more complex learning experiences...",
    },
    {
      path: "/Basic6StudentsList",
      icon: (
        <FaList className="text-white rounded-xl shadow-lg p-4 bg-red-700" />
      ),
      label: "Basic 6",
      description:
        "Final year of primary education, focusing on readiness for transition...",
    },
  ];

  const filteredItems = ClassListItems.filter((item) =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="px-28 ml-64">
      <Sidebar />
      <div>
        <h1 className="text-4xl font-bold mb-6 mt-16">Primary School</h1>
        <p className="mb-6 text-gray-500">
          Welcome to our Creche section, where the youngest learners embark on
          their educational journey in a nurturing and stimulating environment.
          Our Creche program focuses on providing a safe and caring space for
          infants and toddlers to explore, play, and grow...
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between mt-10 mb-8 items-center">
        <div className="mb-4 md:mb-0">
          <ClassLinks />
        </div>
        <div className="relative w-full max-w-xs">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <FiSearch className="text-gray-400" />
          </span>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 pl-10 border-2 border-gray-300 rounded-xl w-full shadow-md focus:border-violet-800 focus:outline-none transition duration-300 hover:border-gray-500"
          />
        </div>
      </div>

      <hr className="mb-8 border-gray-200" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
        {filteredItems.map((item) => (
          <Card
            key={item.path}
            path={item.path}
            icon={item.icon}
            label={item.label}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Primary;
