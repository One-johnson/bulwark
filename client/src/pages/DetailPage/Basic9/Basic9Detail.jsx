import { useEffect, useState } from "react";
import FormButton from "../../../Components/FormButton";
import axios from "axios";
import Basic9Form from "./Basic9Form";

const Basic9Detail = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3002/Basic9Detail")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="relative mr-16">
        <FormButton onClick={toggleFormVisibility} />
        {isFormVisible && <Basic9Form onClose={handleCloseForm} />}
      </div>
      {/* <div className="overflow-x-auto">
        <table className="table-auto w-full mt-[100px]">
          <thead className="text-gray-700 font-normal text-sm">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Registration Date</th>
              <th className="px-4 py-2">First Name</th>
              <th className="px-4 py-2">Middle Name</th>
              <th className="px-4 py-2">Last Name</th>
              <th className="px-4 py-2">Date of Birth</th>
              <th className="px-4 py-2">Age</th>
              <th className="px-2 py-2">Sex</th>
              <th className="px-4 py-2">Nationality</th>
              <th className="px-4 py-2">Hometown</th>
              <th className="px-4 py-2">Parent/Guardian</th>
              <th className="px-4 py-2">Address</th>
              <th className="px-4 py-2">Occupation</th>
              <th className="px-4 py-2">Religious Denomination</th>
              <th className="px-4 py-2">House Number</th>
              <th className="px-4 py-2">Phone Number</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{student.studentId}</td>
                <td className="border px-4 py-2">{student.registrationDate}</td>
                <td className="border px-4 py-2">{student.firstName}</td>
                <td className="border px-4 py-2">{student.middleName}</td>
                <td className="border px-4 py-2">{student.lastName}</td>
                <td className="border px-4 py-2">{student.dateOfBirth}</td>
                <td className="border px-4 py-2">{student.age}</td>
                <td className="border px-4 py-2">{student.sex}</td>
                <td className="border px-4 py-2">{student.nationality}</td>
                <td className="border px-4 py-2">{student.hometown}</td>
                <td className="border px-4 py-2">{student.parentGuardian}</td>
                <td className="border px-4 py-2">{student.address}</td>
                <td className="border px-4 py-2">{student.occupation}</td>
                <td className="border px-4 py-2">
                  {student.religiousDenomination}
                </td>
                <td className="border px-4 py-2">{student.houseNumber}</td>
                <td className="border px-4 py-2">{student.phoneNumber}</td>
                <td className="border px-4 py-2">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2">
                    Edit
                  </button>
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mr-2">
                    View
                  </button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default Basic9Detail;
