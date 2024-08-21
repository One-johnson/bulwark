import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaChild, FaSchool, FaChalkboardTeacher } from "react-icons/fa";
import { MdOutlineEmojiPeople, MdOutlineChildFriendly } from "react-icons/md";
import { BsBook, BsPen } from "react-icons/bs";
import Card from "../../Components/Card";
import Sidebar from "../../Components/Sidebar";
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
        "An overview of early childhood progress, highlighting key milestones in social and cognitive development...",
    },
    {
      path: "",
      icon: (
        <MdOutlineChildFriendly className="text-white rounded-xl shadow-lg p-4 bg-orange-700" />
      ),
      label: "Nursery 2",
      description:
        "Evaluation of foundational skills in language, early numeracy, and social interaction...",
    },
    {
      path: "",
      icon: (
        <FaChild className="text-white rounded-xl shadow-lg p-4 bg-yellow-700" />
      ),
      label: "Kindergarten (KG) 1",
      description:
        "Tracking early academic and social progress, laying the groundwork for primary education...",
    },
    {
      path: "",
      icon: (
        <FaChild className="text-white rounded-xl shadow-lg p-4 bg-green-700" />
      ),
      label: "Kindergarten (KG) 2",
      description:
        "Assessment of readiness for primary education through continued development of core skills...",
    },
    {
      path: "",
      icon: (
        <FaSchool className="text-white rounded-xl shadow-lg p-4 bg-blue-700" />
      ),
      label: "Basic 1",
      description:
        "Introduction to basic academic skills, focusing on literacy, numeracy, and social adjustment...",
    },
    {
      path: "",
      icon: (
        <FaSchool className="text-white rounded-xl shadow-lg p-4 bg-indigo-700" />
      ),
      label: "Basic 2",
      description:
        "Progress in fundamental subjects, emphasizing literacy and numeracy development...",
    },
    {
      path: "",
      icon: (
        <FaChalkboardTeacher className="text-white rounded-xl shadow-lg p-4 bg-purple-700" />
      ),
      label: "Basic 3",
      description:
        "Evaluation of academic progress with an introduction to more complex concepts...",
    },
    {
      path: "",
      icon: (
        <FaChalkboardTeacher className="text-white rounded-xl shadow-lg p-4 bg-pink-700" />
      ),
      label: "Basic 4",
      description:
        "Assessment of core academic skills, focusing on preparation for upper primary education...",
    },
    {
      path: "",
      icon: (
        <BsBook className="text-white rounded-xl shadow-lg p-4 bg-teal-700" />
      ),
      label: "Basic 5",
      description:
        "Evaluation of readiness for more advanced topics, emphasizing critical thinking and problem-solving...",
    },
    {
      path: "",
      icon: (
        <BsBook className="text-white rounded-xl shadow-lg p-4 bg-cyan-700" />
      ),
      label: "Basic 6",
      description:
        "Final assessment of primary education, focusing on transition readiness for junior high school...",
    },
    {
      path: "",
      icon: (
        <BsPen className="text-white rounded-xl shadow-lg p-4 bg-lime-700" />
      ),
      label: "Basic 7",
      description:
        "Introduction to junior high school with an emphasis on specialized subjects and skill-building...",
    },
    {
      path: "",
      icon: (
        <BsPen className="text-white rounded-xl shadow-lg p-4 bg-amber-700" />
      ),
      label: "Basic 8",
      description:
        "Progress evaluation with advanced topics and critical thinking skills development...",
    },
    {
      path: "/Basic9RecordList",
      icon: (
        <MdOutlineEmojiPeople className="text-white rounded-xl shadow-lg p-4 bg-red-700" />
      ),
      label: "Basic 9",
      description:
        "Comprehensive assessment preparing students for transition to higher education, focusing on independent learning...",
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
