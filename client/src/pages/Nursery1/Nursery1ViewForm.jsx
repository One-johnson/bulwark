import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Nursery1ViewForm = () => {
  const { id } = useParams();

  const [student, setStudent] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/nursery1/view/" + id)
      .then((res) => {
        console.log(res);
        setStudent(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (student.length === 0) {
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
              Student Details
            </h2>
            <form className="mx-auto">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="id" className="block mb-2">
                    ID
                  </label>
                  <input
                    type="text"
                    id="id"
                    name="id"
                    value={student.id}
                    readOnly
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="registrationDate" className="block mb-2">
                    Registration Date
                  </label>
                  <input
                    type="text"
                    id="registrationDate"
                    name="registrationDate"
                    value={student.registrationDate}
                    readOnly
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="firstName" className="block mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={student.firstName}
                    className={inputStyle}
                    readOnly
                  />
                </div>
                <div>
                  <label htmlFor="middleName" className="block mb-2">
                    Middle Name
                  </label>
                  <input
                    type="text"
                    id="middleName"
                    name="middleName"
                    value={student.middleName}
                    className={inputStyle}
                    readOnly
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={student.lastName}
                    className={inputStyle}
                    readOnly
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
                    value={student.dateOfBirth}
                    className={inputStyle}
                    readOnly
                  />
                </div>
                <div>
                  <label htmlFor=" age" className="block mb-2">
                    Age
                  </label>
                  <input
                    type="text"
                    id="age"
                    name="age"
                    value={student.age}
                    className={inputStyle}
                    readOnly
                  />
                </div>
                <div>
                  <label htmlFor="sex" className="block mb-2">
                    Age
                  </label>
                  <input
                    type="text"
                    id="sex"
                    name="sex"
                    value={student.sex}
                    className={inputStyle}
                    readOnly
                  />
                </div>

                <div>
                  <label htmlFor=" nationality" className="block mb-2">
                    Nationality
                  </label>
                  <input
                    type="text"
                    id="nationality"
                    name="nationality"
                    value={student.nationality}
                    className={inputStyle}
                    readOnly
                  />
                </div>
                <div>
                  <label htmlFor=" hometown" className="block mb-2">
                    Hometown
                  </label>
                  <input
                    type="text"
                    id="hometown"
                    name="hometown"
                    value={student.hometown}
                    className={inputStyle}
                    readOnly
                  />
                </div>
                <div>
                  <label htmlFor=" parentGuardian" className="block mb-2">
                    Parent/Guardian
                  </label>
                  <input
                    type="text"
                    id="parentGuardian"
                    name="parentGuardian"
                    value={student.parentGuardian}
                    className={inputStyle}
                    readOnly
                  />
                </div>
                <div>
                  <label htmlFor=" address" className="block mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={student.address}
                    className={inputStyle}
                    readOnly
                  />
                </div>
                <div>
                  <label htmlFor="  occupation" className="block mb-2">
                    Occupation
                  </label>
                  <input
                    type="text"
                    id="occupation"
                    name="occupation"
                    value={student.occupation}
                    className={inputStyle}
                    readOnly
                  />
                </div>
                <div>
                  <label
                    htmlFor="  religiousDenomination"
                    className="block mb-2"
                  >
                    Religious Denomiation
                  </label>
                  <input
                    type="text"
                    id="religiousDenomination"
                    name="religiousDenomination"
                    value={student.religiousDenomination}
                    className={inputStyle}
                    readOnly
                  />
                </div>
                <div>
                  <label htmlFor=" houseNumber" className="block mb-2">
                    House Number
                  </label>
                  <input
                    type="text"
                    id="houseNumber"
                    name="houseNumber"
                    value={student.houseNumber}
                    className={inputStyle}
                    readOnly
                  />
                </div>
                <div>
                  <label htmlFor=" phoneNumber" className="block mb-2">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={student.phoneNumber}
                    className={inputStyle}
                    readOnly
                  />
                </div>
              </div>
            </form>

            <div className="mt-8 text-center">
              <Link
                to="/Nursery1StudentsList"
                className="mr-4 text-white bg-blue-500  py-2 px-4 rounded-md font-bold hover:bg-blue-800 transition duration-300"
              >
                BACK
              </Link>
              <Link
                to={`/nursery1/edit/${student.id}`}
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

export default Nursery1ViewForm;
