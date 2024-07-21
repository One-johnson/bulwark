import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Card from "../../../Components/Card";
import { BsPen } from "react-icons/bs";


function EventsByTerm() {
  const [searchQuery, setSearchQuery] = useState("");

  const EventsListItems = [
    {
      path: "/EventsList",
      icon: (
        <BsPen className="text-white rounded-xl shadow-lg p-4 bg-red-700" />
      ),
      label: "Term One (1) Events",
      description:
        "Introduction to more specialized subjects and deeper exploration of core concepts...",
    },
    {
      path: "/Basic8StudentsList",
      icon: (
        <BsPen className="text-white rounded-xl shadow-lg p-4 bg-amber-700" />
      ),
      label: "Term Two (2) Events",
      description:
        "Building on previous knowledge with advanced topics and critical thinking skills...",
    },
    {
      path: "/Basic9StudentsList",
      icon: (
        <BsPen className="text-white rounded-xl shadow-lg p-4 bg-lime-700" />
      ),
      label: "Term Three (3) Events",
      description:
        "Preparation for higher education with a focus on independent learning....",
    },
  ];

  const filteredItems = EventsListItems.filter((item) =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="px-24 ml-60">
      <div>
        <h1 className="text-4xl font-bold mb-6 mt-32">Termly Events</h1>
        <p className="mb-6 text-gray-500">
          Welcome to our Junior High School section, where students transition
          from foundational learning to more specialized subjects. Our program
          focuses on fostering critical thinking, independent learning, and
          preparing students for higher education and beyond...
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
  );
}

export default EventsByTerm;
