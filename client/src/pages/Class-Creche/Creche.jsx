import schoolbuilding from "../../images/schoolbuilding.png";
import brick from "../../images/brick.png";
import bookshelf from "../../images/bookshelf.png";
import students from "../../images/students.png";
import Space from "../../Components/Space";
import Sidebar from "../../Components/Dashboard/SidebarSection/Sidebar";

const Creche = () => {
  return (
    <div className="flex flex-col flex-1 px-28 ml-64">
      <Sidebar />
      <h1 className="text-4xl font-bold mb-6 mt-16">Creche</h1>
      <p className="mb-6 text-gray-500">
        Welcome to our Creche section, where the youngest learners embark on
        their educational journey in a nurturing and stimulating environment.
        Our Creche program focuses on providing a safe and caring space for
        infants and toddlers to explore, play, and grow...
      </p>
      <hr className="mb-8 border-gray-200" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {/* Card for Nursery 1 */}
        <Space
          image={schoolbuilding}
          title="Nursery 1"
          description="Introductory class designed to foster early childhood development through play..."
          link="/Nursery1Students"
        />
        <Space
          image={brick}
          title="Nursery 2"
          description="Focuses on building foundational skills in language, math, and social interaction.."
          link="/Nursery2Students"
        />
        <Space
          image={bookshelf}
          title="Kindergarten (KG) 1"
          description="Continued exploration of foundational skills in preparation for primary education..."
          link="/Kg1Students"
        />
        <Space
          image={students}
          title="Kindergarten (KG) 2"
          description="Continued exploration of foundational skills in preparation for primary education..."
          link="/Kg2Students"
        />
      </div>
    </div>
  );
};

export default Creche;
