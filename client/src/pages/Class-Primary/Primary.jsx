import classroom from "../../images/classroom.png";
import educate from "../../images/educate.png";
import education from "../../images/education.png";
import diploma from "../../images/diploma.png";
import study from "../../images/study.png";
import knowledge from "../../images/knowledge.png";
import Space from "../../Components/Space";
import Sidebar from "../../Components/Sidebar";

const Primary = () => {
  return (
    <div className="flex flex-col flex-1 px-28 ml-64">
      <Sidebar />
      <h1 className="text-4xl font-bold mb-6 mt-16">Primary School</h1>
      <p className="mb-6 text-gray-500 font-normal">
        Welcome to our Primary School, where students embark on a journey of
        discovery and academic excellence. Our Primary program is designed to
        foster a love for learning while building essential skills in literacy,
        numeracy, and critical thinking.
      </p>

      <hr className="mb-8 border-gray-200" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
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
      </div>
    </div>
  );
};

export default Primary;
