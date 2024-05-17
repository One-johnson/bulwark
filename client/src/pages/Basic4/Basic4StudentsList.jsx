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
import DataTable from "react-data-table-component";

const Basic4StudentsList = () => {
  const [data, setData] = useState([]);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3002/basic4/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    setConfirmDeleteId(id);
  };

  const confirmDelete = () => {
    axios
      .delete("http://localhost:3002/basic4/delete/" + confirmDeleteId)
      .then((res) => {
        setData(data.filter((student) => student.id !== confirmDeleteId));
        setConfirmDeleteId(null);
        toast.success("Student deleted successfully!");
      })
      .catch((err) => console.log(err));
  };

  const cancelDelete = () => {
    setConfirmDeleteId(null);
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,

      style: {
        borderRight: "1px solid #eee",
      },
    },
    {
      name: "Registration Date",
      selector: (row) => row.registrationDate,
      sortable: true,

      style: {
        borderRight: "1px solid #eee",
      },
    },
    {
      name: "First Name",
      selector: (row) => row.firstName,
      sortable: true,

      style: {
        borderRight: "1px solid #eee",
      },
    },
    {
      name: "Middle Name",
      selector: (row) => row.middleName,
      sortable: true,

      style: {
        borderRight: "1px solid #eee",
      },
    },
    {
      name: "Last Name",
      selector: (row) => row.lastName,
      sortable: true,

      style: {
        borderRight: "1px solid #eee",
      },
    },
    {
      name: "Date of Birth",
      selector: (row) => row.dateOfBirth,
      sortable: true,

      style: {
        borderRight: "1px solid #eee",
      },
    },
    {
      name: "Age",
      selector: (row) => row.age,
      sortable: true,
      style: {
        borderRight: "1px solid #eee",
      },
    },
    {
      name: "Sex",
      selector: (row) => row.sex,
      sortable: true,

      style: {
        borderRight: "1px solid #eee",
      },
    },
    {
      name: "Nationality",
      selector: (row) => row.nationality,
      sortable: true,

      style: {
        borderRight: "1px solid #eee",
      },
    },
    {
      name: "Hometown",
      selector: (row) => row.hometown,
      sortable: true,

      style: {
        borderRight: "1px solid #eee",
      },
    },
    {
      name: "Parent/Guardian",
      selector: (row) => row.parentGuardian,
      sortable: true,
      style: {
        borderRight: "1px solid #eee",
      },
    },
    {
      name: "Address",
      selector: (row) => row.address,
      sortable: true,

      style: {
        borderRight: "1px solid #eee",
      },
    },
    {
      name: "Occupation",
      selector: (row) => row.occupation,
      sortable: true,

      style: {
        borderRight: "1px solid #eee",
      },
    },
    {
      name: "Religious Denomination",
      selector: (row) => row.religiousDenomination,
      sortable: true,

      style: {
        borderRight: "1px solid #eee",
      },
    },
    {
      name: "House Number",
      selector: (row) => row.houseNumber,
      sortable: true,

      style: {
        borderRight: "1px solid #eee",
      },
    },
    {
      name: "Phone Number",
      selector: (row) => row.phoneNumber,
      sortable: true,
      style: {
        borderRight: "1px solid #eee",
      },
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
      style: {
        borderRight: "1px solid #eee",
      },
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex flex-col-1 items-center">
          <Link to={`/basic4/view/${row.id}`} className="text-blue-600 mr-2">
            <FaRegEye />
          </Link>
          <Link to={`/basic4/edit/${row.id}`} className="text-green-600  mr-2">
            <FiEdit3 />
          </Link>
          <button onClick={() => handleDelete(row.id)} className="text-red-600">
            <FaRegTrashCan />
          </button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  const customStyles = {
    headCells: {
      style: {
        backgroundColor: "#f3f4f6",
        color: "#000",
        fontWeight: "bold",
        textTransform: "uppercase",
        padding: "10px",
        transition: "background-color 0.3s",
      },
    },
    rows: {
      style: {
        "&:hover": {
          backgroundColor: "#f3f4f6", // Adjust hover color here
        },
      },
    },
  };
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

      <div className="fixed ml-10 top-[110px] font-bold text-2xl bg-violet-700 rounded-lg px-4 py-3 flex items-center text-gray-200">
        <Link to="/Primary">
          <BiArrowBack
            className="mr-2"
            style={{ width: "40px", height: "40px" }}
          />
        </Link>
        <h2>BASIC FOUR (4) STUDENTS' LIST</h2>
      </div>

      <div className="flex justify-center items-center min-h-screen px-4 py-6">
        <div className="w-full max-w-[1500px] border border-gray-100 rounded-lg">
          <DataTable
            columns={columns}
            data={data}
            pagination
            customStyles={customStyles}
            highlightOnHover
            pointerOnHover
            selectableRows={false}
            fixedHeader
            // fixedHeaderScrollHeight="600px"
          />
        </div>
      </div>
    </div>
  );
};

export default Basic4StudentsList;
