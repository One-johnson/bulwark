import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const TeacherViewForm = () => {
  const { customID } = useParams();

  const [teacher, setTeacher] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:3002/teachers/view/" + customID)
      .then((res) => {
        console.log(res);
        setTeacher(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, [customID]);

  if (!teacher.customID) {
    return <div>Loading...</div>;
  }

  const inputStyle =
    "border-2 border-gray-300 rounded-lg w-full py-2 px-3 focus:outline-none bg-gray-200";
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-300 bg-opacity-75">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="relative w-full max-w-3xl mx-auto">
          <div className="bg-white rounded-lg mt-20 mb-10 p-6 shadow-xl border transform transition-transform duration-300 ease-in-out">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Teacher Details
            </h2>
            <form className="mx-auto">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="customID" className="block mb-2">
                    Teacher ID
                  </label>
                  <input
                    type="text"
                    id="customID"
                    name="customID"
                    value={teacher.customID}
                    readOnly
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="fullName" className="block mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={teacher.fullName}
                    readOnly
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="dateOfBirth" className="block mb-2">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={teacher.dateOfBirth}
                    readOnly
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="gender" className="block mb-2">
                    Gender
                  </label>
                  <input
                    type="text"
                    id="gender"
                    name="gender"
                    value={teacher.gender}
                    readOnly
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="nationality" className="block mb-2">
                    Nationality
                  </label>
                  <input
                    type="text"
                    id="nationality"
                    name="nationality"
                    value={teacher.nationality}
                    readOnly
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2">
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={teacher.phone}
                    readOnly
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={teacher.email}
                    readOnly
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={teacher.address}
                    readOnly
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="qualifications" className="block mb-2">
                    Qualifications
                  </label>
                  <input
                    type="text"
                    id="qualifications"
                    name="qualifications"
                    value={teacher.qualifications}
                    readOnly
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="experience" className="block mb-2">
                    Experience
                  </label>
                  <input
                    type="text"
                    id="experience"
                    name="experience"
                    value={teacher.experience}
                    readOnly
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="position" className="block mb-2">
                    Position
                  </label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={teacher.position}
                    readOnly
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="startDate" className="block mb-2">
                    Start Date
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={teacher.startDate}
                    readOnly
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="salary" className="block mb-2">
                    Salary
                  </label>
                  <input
                    type="text"
                    id="salary"
                    name="salary"
                    value={teacher.salary}
                    readOnly
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="emergencyContact" className="block mb-2">
                    Emergency Contact
                  </label>
                  <input
                    type="text"
                    id="emergencyContact"
                    name="emergencyContact"
                    value={teacher.emergencyContact}
                    readOnly
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="specialSkills" className="block mb-2">
                    Special Skills
                  </label>
                  <input
                    type="text"
                    id="specialSkills"
                    name="specialSkills"
                    value={teacher.specialSkills}
                    readOnly
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="status" className="block mb-2">
                    Status
                  </label>
                  <input
                    type="text"
                    id="status"
                    name="status"
                    value={teacher.status}
                    readOnly
                    className={inputStyle}
                  />
                </div>
              </div>
            </form>

            <div className="mt-8 text-center">
              <Link
                to="/TeachersList"
                className="mr-4 text-white bg-blue-500 py-2 px-4 rounded-md font-bold hover:bg-blue-800 transition duration-300"
              >
                BACK
              </Link>
              <Link
                to={`/teachers/edit/${teacher.customID}`}
                className="bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-md transition duration-300"
              >
                EDIT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherViewForm;
 