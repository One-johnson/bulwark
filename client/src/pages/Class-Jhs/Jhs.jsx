import Space from "../../Components/Space";
import Sidebar from "../../Components/Dashboard/SidebarSection/Sidebar";
import books from "../../images/books.png";
import grade from "../../images/grade.png";
import calculator from "../../images/calculator.png";
// import FilterLinks from "../../Components/FilterLinks";

const Jhs = () => {
  return (
    <div className="flex flex-col flex-1 px-28 ml-64">
      <Sidebar />
      <h1 className="text-4xl font-bold mb-8 mt-16">Junior High School</h1>
      <p className="mb-6 text-gray-500">
        Welcome to our Junior High School, where students continue their
        educational journey with a focus on growth, independence, and
        preparation for the future. Our Junior High program offers a rigorous
        curriculum that challenges students academically while nurturing their
        personal and social development.
      </p>
      {/* <FilterLinks /> */}
      <hr className="mb-8 border-gray-200" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        <Space
          image={books}
          title="Basic 7"
          description="Introduction to more specialized subjects and deeper exploration
              of core concepts..."
          link="/Basic7Detail"
        />
        <Space
          image={calculator}
          title="Basic 8"
          description="Building on previous knowledge with advanced topics and critical
              thinking skills..."
          link="/Basic8Detail"
        />
        <Space
          image={grade}
          title="Basic 9"
          description=" Preparation for higher education with a focus on independent
              learning...."
          link="/Basic9Detail"
        />
      </div>
    </div>
  );
};

export default Jhs;
