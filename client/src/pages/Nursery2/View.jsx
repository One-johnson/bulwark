import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const View = () => {
  const { id } = useParams();

  const [student, setStudent] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/nursery2/view/" + id)
      .then((res) => {
        console.log(res);
        setStudent(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (student.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow border p-8 w-full md:w-2/3 lg:w-1/2 xl:w-1/3 rounded-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Student Details</h2>
        <div className="mb-4">
          <p className="mb-2">
            <span className="font-bold">ID:</span> {student.id}
          </p>
          <p className="mb-2">
            <span className="font-bold">Registration Date:</span>
            {student.registrationDate}
          </p>
          <p className="mb-2">
            <span className="font-bold">First Name:</span> {student.firstName}
          </p>
          <p className="mb-2">
            <span className="font-bold">Middle Name:</span> {student.middleName}
          </p>
          <p className="mb-2">
            <span className="font-bold">Last Name:</span> {student.lastName}
          </p>
          <p className="mb-2">
            <span className="font-bold">Date of birth:</span>
            {student.dateOfBirth}
          </p>
          <p className="mb-2">
            <span className="font-bold">Age:</span> {student.age}
          </p>
          <p className="mb-2">
            <span className="font-bold">Sex:</span> {student.sex}
          </p>
          <p className="mb-2">
            <span className="font-bold">Nationality:</span>
            {student.nationality}
          </p>
          <p className="mb-2">
            <span className="font-bold">Hometown:</span> {student.hometown}
          </p>
          <p className="mb-2">
            <span className="font-bold">Parent/Guardian:</span>
            {student.parentGuardian}
          </p>
          <p className="mb-2">
            <span className="font-bold">Address:</span> {student.address}
          </p>
          <p className="mb-2">
            <span className="font-bold">Occupation:</span> {student.occupation}
          </p>
          <p className="mb-2">
            <span className="font-bold">Religious Denomination:</span>
            {student.religiousDenomination}
          </p>
          <p className="mb-2">
            <span className="font-bold">House Number:</span>
            {student.houseNumber}
          </p>
          <p className="mb-2">
            <span className="font-bold">Phone Number:</span>
            {student.phoneNumber}
          </p>
        </div>

        <div className="mt-3 text-center">
          <Link
            to="/Nursery2Students"
            className="mr-4 text-white bg-blue-700  py-2 px-4 rounded font-bold hover:bg-blue-500"
          >
            BACK
          </Link>
          <Link
            to={`/nursery2/edit/${student.id}`}
            className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded"
          >
            EDIT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default View;
