import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { RiAddLine } from "react-icons/ri";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import { FiEdit3 } from "react-icons/fi";
import PopConfirm from "../../Components/PopConfirm";
import { toast } from "react-toastify";
import AddStudentForm from "./AddStudentForm";
import Navbar from "../../Components/Navbar";
import { BiArrowBack } from "react-icons/bi";

const Basic2StudentsList = () => {
  const [data, setData] = useState([]);
  const [refreshList, setRefreshList] = useState(false);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    fetchData();
  }, [refreshList]); // Fetch data when refreshList changes

  const fetchData = () => {
    axios
      .get("http://localhost:3002/basic2/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    setConfirmDeleteId(id); // Set the ID of the item to delete
  };

  const confirmDelete = () => {
    axios
      .delete("http://localhost:3002/basic2/delete/" + confirmDeleteId)
      .then((res) => {
        setRefreshList(!refreshList);
        setConfirmDeleteId(null); // Reset the confirmation ID
        toast.success("Student deleted successfully!");
      })
      .catch((err) => console.log(err));
  };
  const cancelDelete = () => {
    setConfirmDeleteId(null); // Reset the confirmation ID
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };
  console.log("isFormVisible:", isFormVisible);

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  const tableHeadStyles =
    "border-r px-6 py-3 text-center text-xs font-medium text-gray-900 uppercase tracking-wider";
  const tableDataStyles =
    "px-6 py-4 whitespace-nowrap border-r text-sm text-gray-900";
  return (
    <div>
      <Navbar />
      <div className="relative mr-5">
        <button
          onClick={toggleFormVisibility}
          className="fixed bottom-10 right-10 bg-violet-800 hover:bg-gray-200 border hover:text-violet-800 text-white py-2 px-2 rounded-full transition duration-300 flex items-center z-10"
        >
          <RiAddLine className="text-xl" />
        </button>
        {isFormVisible && <AddStudentForm onClose={handleCloseForm} />}
      </div>

      {confirmDeleteId && (
        <PopConfirm
          message="Are you sure you want to delete this student?"
          onCancel={cancelDelete}
          onConfirm={confirmDelete}
        />
      )}
      <div className="flex justify-center items-center h-screen">
        <div className="overflow-x-auto px-4">
          <div className="fixed left-5 top-[110px] font-bold text-3xl p-5 bg-violet-700 rounded-lg px-4 py-4 flex items-center text-gray-200">
            <Link to="/dashboard">
              <BiArrowBack
                className="mr-2"
                style={{ width: "40px", height: "40px" }}
              />
            </Link>
            <h2>BASIC TWO (2) STUDENTS' LIST</h2>
          </div>
          <table className="min-w-full divide-y divide-gray-400 border border-gray-300 rounded-md">
            <thead className="bg-gray-100">
              <tr>
                <th scope="col" className={tableHeadStyles}>
                  ID
                </th>

                <th scope="col" className={tableHeadStyles}>
                  registration date
                </th>
                <th scope="col" className={tableHeadStyles}>
                  first name
                </th>
                <th scope="col" className={tableHeadStyles}>
                  middle Name
                </th>
                <th scope="col" className={tableHeadStyles}>
                  last Name
                </th>
                <th scope="col" className={tableHeadStyles}>
                  date of birth
                </th>
                <th scope="col" className={tableHeadStyles}>
                  age
                </th>
                <th scope="col" className={tableHeadStyles}>
                  sex
                </th>
                <th scope="col" className={tableHeadStyles}>
                  nationalty
                </th>
                <th scope="col" className={tableHeadStyles}>
                  hometown
                </th>
                <th scope="col" className={tableHeadStyles}>
                  parent/Guardian
                </th>
                <th scope="col" className={tableHeadStyles}>
                  address
                </th>
                <th scope="col" className={tableHeadStyles}>
                  occupation
                </th>
                <th scope="col" className={tableHeadStyles}>
                  religious Denomination
                </th>
                <th scope="col" className={tableHeadStyles}>
                  house number
                </th>
                <th scope="col" className={tableHeadStyles}>
                  phone number
                </th>
                <th scope="col" className={tableHeadStyles}>
                  status
                </th>
                <th scope="col" className={tableHeadStyles}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((student, index) => (
                <tr key={index}>
                  <td className={tableDataStyles}>
                    <div className="text-sm text-gray-900">{student.id}</div>
                  </td>
                  <td className={tableDataStyles}>
                    <div className="text-sm text-gray-900">
                      {student.registrationDate}
                    </div>
                  </td>
                  <td className={tableDataStyles}>
                    <div className="text-sm text-gray-900">
                      {student.firstName}
                    </div>
                  </td>
                  <td className={tableDataStyles}>
                    <div className="text-sm text-gray-900">
                      {student.middleName}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {student.lastName}
                    </div>
                  </td>
                  <td className={tableDataStyles}>
                    <div className="text-sm text-gray-900">
                      {student.dateOfBirth}
                    </div>
                  </td>
                  <td className={tableDataStyles}>
                    <div className="text-sm text-gray-900">{student.age}</div>
                  </td>
                  <td className={tableDataStyles}>
                    <div className="text-sm text-gray-900">{student.sex}</div>
                  </td>
                  <td className={tableDataStyles}>
                    <div className="text-sm text-gray-900">
                      {student.nationality}
                    </div>
                  </td>
                  <td className={tableDataStyles}>
                    <div className="text-sm text-gray-900">
                      {student.hometown}
                    </div>
                  </td>
                  <td className={tableDataStyles}>
                    <div className="text-sm text-gray-900">
                      {student.parentGuardian}
                    </div>
                  </td>
                  <td className={tableDataStyles}>
                    <div className="text-sm text-gray-900">
                      {student.address}
                    </div>
                  </td>
                  <td className={tableDataStyles}>
                    <div className="text-sm text-gray-900">
                      {student.occupation}
                    </div>
                  </td>
                  <td className={tableDataStyles}>
                    <div className="text-sm text-gray-900">
                      {student.religiousDenomination}
                    </div>
                  </td>
                  <td className={tableDataStyles}>
                    <div className="text-sm text-gray-900">
                      {student.houseNumber}
                    </div>
                  </td>
                  <td className={tableDataStyles}>
                    <div className="text-sm text-gray-900">
                      {student.phoneNumber}
                    </div>
                  </td>
                  <td className={tableDataStyles}>
                    <div className="text-sm text-gray-900">
                      {student.status}
                    </div>
                  </td>

                  <td className="px-6 py-4 text-md font-medium ">
                    <div className="flex flex-col-1 items-center">
                      <Link
                        to={`/basic2/view/${student.id}`}
                        className="text-blue-600 mr-2"
                      >
                        <FaRegEye />
                      </Link>
                      <Link
                        to={`/basic2/edit/${student.id}`}
                        className="text-green-600  mr-2"
                      >
                        <FiEdit3 />
                      </Link>
                      <button
                        onClick={() => handleDelete(student.id)}
                        className="text-red-600"
                      >
                        <FaRegTrashCan />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Basic2StudentsList;
