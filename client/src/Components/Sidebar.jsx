import { Link, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import {
  BsClock,
  BsPeople,
  BsClipboard,
  BsCheckCircle,
  BsNewspaper,
} from "react-icons/bs";
import { FaList } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import Logo from "../images/school.png"; // Import your logo image or SVG

function Sidebar() {
  const location = useLocation();

  const menuItems = [
    {
      path: "/dashboard",
      icon: <FaHome className="text-gray-400" />,
      label: "Dashboard",
    },
    {
      path: "/ClassList",
      icon: <FaList className="text-red-700" />,
      label: "Class List",
    },
    {
      path: "/eventsbyterm",
      icon: <BsNewspaper className="text-green-700" />,
      label: "Events",
    },
    {
      path: "/timetable",
      icon: <BsClock className="text-pink-700" />,
      label: "Timetable",
    },
    {
      path: "/calendar",
      icon: <FaRegCalendarAlt className="text-orange-700" />,
      label: "Calendar",
    },
    {
      path: "/TeachersList",
      icon: <BsPeople className="text-purple-500" />,
      label: "Teachers",
    },
    {
      path: "/ExamResults",
      icon: <BsClipboard className="text-fuchsia-600" />,
      label: "Exam Result",
    },
    {
      path: "/Attendance",
      icon: <BsCheckCircle className="text-blue-600" />,
      label: "Attendance",
    },
  ];

  return (
    <div className="bg-violet-900 h-full left-0 top-0 z-50 w-60 fixed flex flex-col">
      {/* Header */}
      <div className="p-4">
        <div className=" mb-8 bg-white shadow-4xl px-2 py- h-40 rounded-lg flex items-center">
          <img src={Logo} alt="Logo" className="w-20 h-20 mr-2" />
          <span className="font-bold text-center text-lg">
           E. P. SCHOOLS, ABEKA
          </span>
        </div>
      </div>
      <hr className="mb-8" />
      <div className="p-2">
        <ul className="space-y-3 text-white font-semibold">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`${
                  location.pathname === item.path
                    ? "text-white bg-violet-800"
                    : "text-gray-400"
                } hover:bg-gray-200 hover:text-violet-800 px-4 py-2 rounded flex items-center mb-1`}
                aria-current={
                  location.pathname === item.path ? "page" : undefined
                }
              >
                {item.icon}
                <span className="ml-2">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
