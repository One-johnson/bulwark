import { Link, useLocation } from "react-router-dom";
const ClassLinks = () => {
  const location = useLocation();
  const ClassLinkItems = [
    {
      path: "/ClassList",
      label: "All",
    },
    {
      path: "/Creche",
      label: "Creche",
    },
    {
      path: "/Primary",
      label: "Primary",
    },
    {
      path: "/Jhs",
      label: "JHS",
    },
  ];
  return (
    <div>
      <div className="flex items-center space-x-3 mb-5 mt-10">
        {ClassLinkItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`${
              location.pathname === item.path
                ? "text-white bg-violet-800"
                : "text-gray-600 font-semibold"
            } hover:bg-gray-200 hover:text-violet-800 px-3 py-2 rounded-md`}
            aria-current={location.pathname === item.path ? "page" : undefined}
          >
            <div className="">{item.label}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ClassLinks;
