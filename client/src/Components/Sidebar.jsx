import { Link, useLocation } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import {
  BsList,
  BsCalendar,
  BsClock,
  BsPeople,
  BsClipboard,
  BsCheckCircle,
} from "react-icons/bs";
import Logo from "../images/school.png"; // Import your logo image or SVG

function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { path: "/dashboard", icon: <FiHome />, label: "Dashboard" },
    { path: "/ClassList", icon: <BsList />, label: "Class List" },
    { path: "/events", icon: <BsCalendar />, label: "Events" },
    { path: "/timetable", icon: <BsClock />, label: "Timetable" },
    { path: "/calendar", icon: <BsCalendar />, label: "Calendar" },
    { path: "/teachers", icon: <BsPeople />, label: "Teachers" },
    { path: "/ExamResults", icon: <BsClipboard />, label: "Exam Result" },
    { path: "/Attendance", icon: <BsCheckCircle />, label: "Attendance" },
  ];

  return (
    <div className="bg-violet-900 h-full left-0 top-0 z-50 w-64 fixed flex flex-col">
      {/* Header */}
      <div className="p-4">
        <div className="mb-8 bg-violet-300 shadow-2xl px-2 py- h-40 rounded-lg flex items-center">
          <img src={Logo} alt="Logo" className="w-16 h-16 mr-2" />
          <span className="text-lg font-extrabold">
            E. P. Church School, Abeka
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
                } hover:bg-white hover:text-violet-800 px-4 py-2 rounded flex items-center mb-1`}
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
