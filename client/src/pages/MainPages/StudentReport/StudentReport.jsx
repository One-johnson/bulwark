import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaChild, FaSchool, FaChalkboardTeacher } from "react-icons/fa";
import { MdOutlineEmojiPeople, MdOutlineChildFriendly } from "react-icons/md";
import { BsBook, BsPen } from "react-icons/bs";
import Card from "../../../Components/Card";
import Sidebar from "../../../Components/Sidebar";
function StudentReport() {
  const [searchQuery, setSearchQuery] = useState("");

  const ClassListItems = [
    {
      path: "",
      icon: (
        <MdOutlineChildFriendly className="text-white rounded-xl shadow-lg p-4 bg-red-700" />
      ),
      label: "Nursery 1",
      description:
        "Introductory class designed to foster early childhood development through play...",
    },
    {
      path: "/Nursery2StudentsList",
      icon: (
        <MdOutlineChildFriendly className="text-white rounded-xl shadow-lg p-4 bg-orange-700" />
      ),
      label: "Nursery 2",
      description:
        "Focuses on building foundational skills in language, math, and social interaction...",
    },
    {
      path: "/Kg1StudentsList",
      icon: (
        <FaChild className="text-white rounded-xl shadow-lg p-4 bg-yellow-700" />
      ),
      label: "Kindergarten (KG) 1",
      description:
        "Continued exploration of foundational skills in preparation for primary education...",
    },
    {
      path: "/Kg2StudentsList",
      icon: (
        <FaChild className="text-white rounded-xl shadow-lg p-4 bg-green-700" />
      ),
      label: "Kindergarten (KG) 2",
      description:
        "Continued exploration of foundational skills in preparation for primary education...",
    },
    {
      path: "/Basic1StudentsList",
      icon: (
        <FaSchool className="text-white rounded-xl shadow-lg p-4 bg-blue-700" />
      ),
      label: "Basic 1",
      description:
        "Introduction to fundamental concepts and skills in various subjects...",
    },
    {
      path: "/Basic2StudentsList",
      icon: (
        <FaSchool className="text-white rounded-xl shadow-lg p-4 bg-indigo-700" />
      ),
      label: "Basic 2",
      description:
        "Building on foundational knowledge with more advanced topics and activities...",
    },
    {
      path: "/Basic3StudentsList",
      icon: (
        <FaChalkboardTeacher className="text-white rounded-xl shadow-lg p-4 bg-purple-700" />
      ),
      label: "Basic 3",
      description:
        "Exploring deeper levels of understanding in core subjects...",
    },
    {
      path: "/Basic4StudentsList",
      icon: (
        <FaChalkboardTeacher className="text-white rounded-xl shadow-lg p-4 bg-pink-700" />
      ),
      label: "Basic 4",
      description:
        "Consolidating knowledge and skills for academic advancement...",
    },
    {
      path: "/Basic5StudentsList",
      icon: (
        <BsBook className="text-white rounded-xl shadow-lg p-4 bg-teal-700" />
      ),
      label: "Basic 5",
      description:
        "Preparing students for more complex learning experiences...",
    },
    {
      path: "/Basic6StudentsList",
      icon: (
        <BsBook className="text-white rounded-xl shadow-lg p-4 bg-cyan-700" />
      ),
      label: "Basic 6",
      description:
        "Final year of primary education, focusing on readiness for transition...",
    },
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
    <div className="flex bg-gray-100 min-h-screen">
      <div className="w-full md:w-1/4 lg:w-1/6">
        <Sidebar />
      </div>
      <div className="w-full md:w-3/4 lg:w-4/5 mx-auto px-4 md:px-10 lg:px-16 xl:px-10 2xl:px-30">
        <div>
          <h1 className="text-4xl font-bold mb-6 mt-32 text-violet-800">Student Report</h1>
          <p className="mb-6 text-gray-700">
            Explore our comprehensive class list for each educational level. From
            Nursery to Basic 9, each class is designed to foster academic growth
            and personal development. Click on any class to view detailed
            information and access student lists...
          </p>
        </div>

        <div className="relative mt-10 mb-10">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <FiSearch className="text-gray-400" />
          </span>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 pl-10 border-2 border-gray-300 rounded-xl w-full shadow-md focus:border-violet-800 focus:outline-none transition duration-300 focus:border-2 hover:border-gray-500 hover:border-2"
          />
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
    </div>
  );
}

export default StudentReport;
