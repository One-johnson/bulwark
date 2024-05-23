// StudentTable.js
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaRegEye, FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import StatusTag from "../../Components/StatusTag";
import PropTypes from "prop-types";
import DataTable from "react-data-table-component";
import PopConfirm from "../../Components/PopConfirm";
import { toast } from "react-toastify";

const StudentTable = () => {
  const [data, setData] = useState([]);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3002/nursery2/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    setConfirmDeleteId(id);
  };

  const confirmDelete = () => {
    axios
      .delete("http://localhost:3002/nursery2/delete/" + confirmDeleteId)
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

  const filteredData = data.filter((student) =>
    Object.values(student).some((value) =>
      String(value).toLowerCase().includes(searchText.toLowerCase())
    )
  );

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
      style: {
        borderRight: "1px solid #eee",
      },
      center: "true",
    },

    {
      name: "Registration Date",
      selector: (row) => row.registrationDate,
      sortable: true,
      style: { borderRight: "1px solid #eee" },
      center: "true",
    },
    {
      name: "First Name",
      selector: (row) => row.firstName,
      sortable: true,
      style: { borderRight: "1px solid #eee" },
      center: "true",
    },
    {
      name: "Middle Name",
      selector: (row) => row.middleName,
      sortable: true,
      style: { borderRight: "1px solid #eee" },
      center: "true",
    },
    {
      name: "Last Name",
      selector: (row) => row.lastName,
      sortable: true,
      style: { borderRight: "1px solid #eee" },
      center: "true",
    },
    {
      name: "Date of Birth",
      selector: (row) => row.dateOfBirth,
      sortable: true,
      style: { borderRight: "1px solid #eee" },
      center: "true",
    },
    {
      name: "Age",
      selector: (row) => row.age,
      sortable: true,
      style: { borderRight: "1px solid #eee" },
      center: "true",
    },
    {
      name: "Sex",
      selector: (row) => row.sex,
      sortable: true,
      style: { borderRight: "1px solid #eee" },
      center: "true",
    },
    {
      name: "Nationality",
      selector: (row) => row.nationality,
      sortable: true,
      style: { borderRight: "1px solid #eee" },
      center: "true",
    },
    {
      name: "Hometown",
      selector: (row) => row.hometown,
      sortable: true,
      style: { borderRight: "1px solid #eee" },
      center: "true",
    },
    {
      name: "Parent/Guardian",
      selector: (row) => row.parentGuardian,
      sortable: true,
      style: { borderRight: "1px solid #eee" },
      center: "true",
    },
    {
      name: "Address",
      selector: (row) => row.address,
      sortable: true,
      style: { borderRight: "1px solid #eee" },
      center: "true",
    },
    {
      name: "Occupation",
      selector: (row) => row.occupation,
      sortable: true,
      style: { borderRight: "1px solid #eee" },
      center: "true",
    },
    {
      name: "Religious Denomination",
      selector: (row) => row.religiousDenomination,
      sortable: true,
      style: { borderRight: "1px solid #eee" },
      center: "true",
    },
    {
      name: "House Number",
      selector: (row) => row.houseNumber,
      sortable: true,
      style: { borderRight: "1px solid #eee" },
      center: "true",
    },
    {
      name: "Phone Number",
      selector: (row) => row.phoneNumber,
      sortable: true,
      style: { borderRight: "1px solid #eee" },
      center: "true",
    },
    {
      name: "Status",
      selector: (row) => <StatusTag status={row.status} />,
      sortable: true,
      style: { borderRight: "1px solid #eee" },
      center: "true",
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center justify-center space-x-4">
          <Link
            to={`/nursery2/view/${row.id}`}
            className="text-blue-600 text-lg"
            title="View Details"
          >
            <FaRegEye />
          </Link>
          <Link
            to={`/nursery2/edit/${row.id}`}
            className="text-green-600   text-lg"
            title="Edit"
          >
            <FaRegEdit />
          </Link>
          <button
            onClick={() => handleDelete(row.id)}
            className="text-red-600 text-lg"
            title="Delete"
          >
            <FaRegTrashCan />
          </button>
        </div>
      ),
    },
  ];

  const customStyles = {
    headCells: {
      style: {
        backgroundColor: "#f3f4f6",
        color: "gray",
        fontWeight: "bold",
        fontSize: "16px",
      },
    },
    cells: {
      style: {
        fontSize: "14px",
      },
    },
    rows: {
      style: {
        "&:hover": {
          backgroundColor: "#f3f4f6",
        },
      },
    },
  };

  return (
    <div className="max-h-[80vh] overflow-y-auto">
      {confirmDeleteId && (
        <PopConfirm
          message="Are you sure you want to delete this student?"
          onCancel={cancelDelete}
          onConfirm={confirmDelete}
        />
      )}
      <div className="w-full max-w-[1500px] p-3 mb-2 text-end">
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="px-4 py-2 border rounded-lg w-full max-w-sm mx-auto focus:outline-none focus:border-violet-800 transition duration-300 focus:border-2 hover:border-gray-500 hover:border"
        />
      </div>

      <DataTable
        columns={columns}
        data={filteredData}
        pagination
        customStyles={customStyles}
        highlightOnHover
        pointerOnHover
        selectableRows={false}
        fixedHeader
        fixedHeaderScrollHeight="400px"
      />
    </div>
  );
};
StudentTable.propTypes = {
  searchText: PropTypes.string,
};

export default StudentTable;
