import books from "../images/books.png";
import brick from "../images/brick.png";
import bookshelf from "../images/bookshelf.png";
import students from "../images/students.png";
import classroom from "../images/classroom.png";
import educate from "../images/educate.png";
import education from "../images/education.png";
import diploma from "../images/diploma.png";
import calculator from "../images/calculator.png";
import schoolbuilding from "../images/schoolbuilding.png";
import knowledge from "../images/knowledge.png";
import study from "../images/study.png";
import grade from "../images/grade.png";
import Space from "./Space";
import ClassLinks from "./ClassLinks";

function Body() {
  return (
    <div className="px-28 ml-64">
      <div>
        <h1 className="text-4xl font-bold mb-6 mt-16">Class List</h1>
        <p className="mb-6 text-gray-500">
          Welcome to our Creche section, where the youngest learners embark on
          their educational journey in a nurturing and stimulating environment.
          Our Creche program focuses on providing a safe and caring space for
          infants and toddlers to explore, play, and grow...
        </p>
      </div>

      <ClassLinks />
      <hr className="mb-8 border-gray-200" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
        <Space
          image={schoolbuilding}
          title="Nursery 1"
          description="Introductory class designed to foster early childhood development through play..."
          link="/Nursery1StudentsList"
        />
        <Space
          image={brick}
          title="Nursery 2"
          description="Focuses on building foundational skills in language, math, and social interaction.."
          link="/Nursery2StudentsList"
        />
        <Space
          image={bookshelf}
          title="Kindergarten (KG) 1"
          description="Continued exploration of foundational skills in preparation for primary education..."
          link="/Kg1StudentsList"
        />
        <Space
          image={students}
          title="Kindergarten (KG) 2"
          description="Continued exploration of foundational skills in preparation for primary education..."
          link="/Kg2StudentsList"
        />
        <Space
          image={classroom}
          title="Basic 1"
          description="Introduction to fundamental concepts and skills in various
              subjects..."
          link="/Basic1StudentsList"
        />
        <Space
          image={educate}
          title="Basic 2"
          description="Building on foundational knowledge with more advanced topics and
              activities..."
          link="/Basic2StudentsList"
        />
        <Space
          image={education}
          title="Basic 3"
          description="Exploring deeper levels of understanding in core subjects....."
          link="/Basic3StudentsList"
        />

        <Space
          image={study}
          title="Basic 4"
          description=" Consolidating knowledge and skills for academic advancement..."
          link="/Basic4StudentsList"
        />
        <Space
          image={knowledge}
          title="Basic 5"
          description=" Preparing students for more complex learning experiences..."
          link="/Basic5StudentsList"
        />
        <Space
          image={diploma}
          title="Basic 6"
          description="  Final year of primary education, focusing on readiness for
              transition..."
          link="/Basic6StudentsList"
        />
        <Space
          image={books}
          title="Basic 7"
          description="Introduction to more specialized subjects and deeper exploration
              of core concepts..."
          link="/Basic7StudentsList"
        />
        <Space
          image={calculator}
          title="Basic 8"
          description="Building on previous knowledge with advanced topics and critical
              thinking skills..."
          link="/Basic8StudentsList"
        />
        <Space
          image={grade}
          title="Basic 9"
          description=" Preparation for higher education with a focus on independent
              learning...."
          link="/Basic9StudentsList"
        />
      </div>
    </div>
  );
}

export default Body;
