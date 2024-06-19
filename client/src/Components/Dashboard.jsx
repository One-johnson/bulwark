import { Link } from "react-router-dom";
import {
  BsList,
  BsCalendar,
  BsClock,
  BsPeople,
  BsClipboard,
  BsCheckCircle,
  BsNewspaper,
} from "react-icons/bs";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const dashboardItems = [
    {
      path: "/ClassList",
      icon: (
        <BsList className="text-white rounded-xl shadow-lg p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 " />
      ),
      label: "Class List",
    },
    {
      path: "/events",
      icon: (
        <BsNewspaper className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white p-2 rounded-xl shadow-lg" />
      ),
      label: "Events",
    },
    {
      path: "/timetable",
      icon: <BsClock className="text-green-500" />,
      label: "Timetable",
    },
    {
      path: "/calendar",
      icon: <BsCalendar className="text-yellow-500" />,
      label: "Calendar",
    },
    {
      path: "/teachers",
      icon: <BsPeople className="text-purple-500" />,
      label: "Teachers",
    },
    {
      path: "/exam-result",
      icon: <BsClipboard className="text-pink-500" />,
      label: "Exam Result",
    },
    {
      path: "/attendance",
      icon: <BsCheckCircle className="text-indigo-500" />,
      label: "Attendance",
    },
  ];

  return (
    <div>
      <Sidebar />
      <div className="ml-64 px-28">
        <div className="text-3xl font-bold mb-6 mt-16">Admin Dashboard</div>
        <hr className="mb-8 mt-20 border-gray-200" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {dashboardItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="bg-white border shadow-xl rounded-2xl  p-10 flex flex-col items-center text-center hover:shadow-violet-400
              overflow-hidden transition duration-300"
            >
              <div className="text-8xl mb-4">{item.icon}</div>
              <div className="text-lg font-bold text-gray-500">
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
