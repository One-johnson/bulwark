import { useState } from "react";
import { FaList } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import Card from "../../Components/Card";
import ClassLinks from "../../Components/ClassLinks";
import Sidebar from "../../Components/Sidebar";
import { BsPen } from "react-icons/bs";
import { MdOutlineEmojiPeople } from "react-icons/md";

function Body() {
  const [searchQuery, setSearchQuery] = useState("");

  const ClassListItems = [
    {
      path: "/Basic7StudentsList",
      icon: (
        <BsPen className="text-white rounded-xl shadow-lg p-4 bg-lime-700" />
      ),
      label: "Basic 7",
      description:
        "Introduction to more specialized subjects and deeper exploration of core concepts...",
    },
    {
      path: "/Basic8StudentsList",
      icon: (
        <BsPen className="text-white rounded-xl shadow-lg p-4 bg-amber-700" />
      ),
      label: "Basic 8",
      description:
        "Building on previous knowledge with advanced topics and critical thinking skills...",
    },
    {
      path: "/Basic9StudentsList",
      icon: (
        <MdOutlineEmojiPeople className="text-white rounded-xl shadow-lg p-4 bg-red-700" />
      ),
      label: "Basic 9",
      description:
        "Preparation for higher education with a focus on independent learning....",
    },
  ];

  const filteredItems = ClassListItems.filter((item) =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="px-28 ml-64">
      <Sidebar />
      <div>
        <h1 className="text-4xl font-bold mb-6 mt-16">Junior High School</h1>
        <p className="mb-6 text-gray-500">
          Welcome to our Junior High School section, where students transition
          from foundational learning to more specialized subjects. Our program
          focuses on fostering critical thinking, independent learning, and
          preparing students for higher education and beyond...
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

export default Body;
