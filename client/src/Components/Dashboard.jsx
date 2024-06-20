import { Link } from "react-router-dom";
import {
  BsClock,
  BsPeople,
  BsClipboard,
  BsCheckCircle,
  BsNewspaper,
} from "react-icons/bs";
import { FaRegCalendarAlt,  } from "react-icons/fa";
import { FaList } from "react-icons/fa6";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const dashboardItems = [
    {
      path: "/ClassList",
      icon: (
        <FaList className="text-white rounded-xl shadow-lg p-4 bg-red-700" />
      ),
      label: "Class List",
    },
    {
      path: "/events",
      icon: (
        <BsNewspaper className="bg-green-700 text-white p-4 rounded-xl shadow-lg" />
      ),
      label: "Events",
    },
    {
      path: "/timetable",
      icon: (
        <BsClock className="text-white rounded-xl shadow-lg p-4 bg-pink-700" />
      ),
      label: "Timetable",
    },
    {
      path: "/calendar",
      icon: (
        <FaRegCalendarAlt className="text-white rounded-xl shadow-lg p-4 bg-orange-700" />
      ),
      label: "Calendar",
    },
    {
      path: "/teachers",
      icon: (
        <BsPeople className="text-white rounded-xl shadow-lg p-4  bg-purple-700" />
      ),
      label: "Teachers",
    },
    {
      path: "/exam-result",
      icon: (
        <BsClipboard className="text-white rounded-xl shadow-lg p-4 bg-fuchsia-700" />
      ),
      label: "Exam Result",
    },
    {
      path: "/attendance",
      icon: (
        <BsCheckCircle className="text-white rounded-xl shadow-lg p-4 bg-blue-700" />
      ),
      label: "Attendance",
    },
  ];

  return (
    <div>
      <Sidebar />
      <div className="ml-64 px-28">
        <div>
          <h1 className="text-4xl font-bold mb-6 mt-16">Admin Dashboard</h1>
          <p className=" text-gray-500">
            Welcome to our School Management System! This platform empowers
            administrators to efficiently manage student enrollment and
            record-keeping. <br /> From here, you can access various sections to
            oversee the educational journey of our students, ensuring a smooth
            and productive learning experience for all.
          </p>
        </div>
        <hr className="mb-8 mt-8 border-gray-200" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {dashboardItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="bg-white border shadow-xl rounded-2xl p-10 flex flex-col items-center text-center hover:shadow-violet-400
              overflow-hidden transition duration-300"
            >
              <div className="text-7xl mb-4">{item.icon}</div>
              <div className="text-lg font-bold text-gray-700">
                {item.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
