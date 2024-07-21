import { useState } from "react";
import Card from "./Card";
import {
  BsClock,
  BsPeople,
  BsClipboard,
  BsCheckCircle,
  BsNewspaper,
} from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaList } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dashboardItems = [
    {
      path: "/ClassList",
      icon: (
        <FaList className="text-white rounded-xl shadow-lg p-4 bg-red-700" />
      ),
      label: "Class List",
      description: "View and manage the list of classes.",
    },
    {
      path: "/eventsbyterm",
      icon: (
        <BsNewspaper className="bg-green-700 text-white p-4 rounded-xl shadow-lg" />
      ),
      label: "Events",
      description: "Check out upcoming school events.",
    },
    {
      path: "/timetable",
      icon: (
        <BsClock className="text-white rounded-xl shadow-lg p-4 bg-pink-700" />
      ),
      label: "Timetable",
      description: "Manage class schedules and timetables.",
    },
    {
      path: "/calendar",
      icon: (
        <FaRegCalendarAlt className="text-white rounded-xl shadow-lg p-4 bg-orange-700" />
      ),
      label: "Calendar",
      description: "View the school calendar and important dates.",
    },
    {
      path: "/TeachersList",
      icon: (
        <BsPeople className="text-white rounded-xl shadow-lg p-4  bg-purple-700" />
      ),
      label: "Teachers",
      description: "Manage teacher information and assignments.",
    },
    {
      path: "/exam-result",
      icon: (
        <BsClipboard className="text-white rounded-xl shadow-lg p-4 bg-fuchsia-700" />
      ),
      label: "Exam Result",
      description: "View and manage exam results.",
    },
    {
      path: "/attendance",
      icon: (
        <BsCheckCircle className="text-white rounded-xl shadow-lg p-4 bg-blue-700" />
      ),
      label: "Attendance",
      description: "Track and manage student attendance.",
    },
  ];
  const filteredItems = dashboardItems.filter((item) =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="ml-60 px-24">
        <div>
          <h1 className="text-4xl font-bold mb-6 mt-32">Admin Dashboard</h1>
          <p className=" text-gray-500 mb-6">
            Welcome to our School Management System! This platform empowers
            administrators to efficiently manage student enrollment and
            record-keeping. <br /> From here, you can access various sections to
            oversee the educational journey of your learners...
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
            className="p-2 pl-10 border-2 border-gray-300 rounded-xl w-full shadow-md focus:border-violet-800 focus:outline-none
            transition duration-300 focus:border-2 hover:border-gray-500 hover:border-2"
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
};

export default Dashboard;
