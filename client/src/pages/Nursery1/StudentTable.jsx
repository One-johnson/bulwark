// StudentTable.js
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaRegEye, FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";

import DataTable from "react-data-table-component";
import PopConfirm from "../../Components/PopConfirm";
import { toast } from "react-toastify";

const StudentTable = () => {
  const [data, setData] = useState([]);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3002/nursery1/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    setConfirmDeleteId(id);
  };

  const confirmDelete = () => {
    axios
      .delete("http://localhost:3002/nursery1/delete/" + confirmDeleteId)
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
    },
    {
      name: "Registration Date",
      selector: (row) => row.registrationDate,
      sortable: true,
      style: { borderRight: "1px solid #eee" },
      grow: 3,
    },
    {
      name: "First Name",
      selector: (row) => row.firstName,
      sortable: true,
      style: { borderRight: "1px solid #eee" },
      grow: 2,
    },
    {
      name: "Middle Name",
      selector: (row) => row.middleName,
      sortable: true,
      style: { borderRight: "1px solid #eee" },
      grow: 3,
    },
    {
      name: "Last Name",
      selector: (row) => row.lastName,
      sortable: true,
      style: { borderRight: "1px solid #eee" },
      grow: 2,
    },
    {
      name: "Date of Birth",
      selector: (row) => row.dateOfBirth,
      sortable: true,
      style: { borderRight: "1px solid #eee" },
      grow: 3,
    },
    {
      name: "Age",
      selector: (row) => row.age,
      sortable: true,
      style: { borderRight: "1px solid #eee" },
      grow: 1,
    },
    {
      name: "Sex",
      selector: (row) => row.sex,
      sortable: true,
      style: { borderRight: "1px solid #eee" },
      grow: 1,
    },
    {
      name: "Nationality",
      selector: (row) => row.nationality,
      sortable: true,
      style: { borderRight: "1px solid #eee" },
      grow: 3,
    },
    {
      name: "Hometown",
      selector: (row) => row.hometown,
      sortable: true,
      style: { borderRight: "1px solid #eee" },
      grow: 3,
    },
    {
      name: "Parent/Guardian",
      selector: (row) => row.parentGuardian,
      sortable: true,
      style: { borderRight: "1px solid #eee" },
      grow: 3,
    },
    {
      name: "Address",
      selector: (row) => row.address,
      sortable: true,
      style: { borderRight: "1px solid #eee" },
      grow: 1,
    },
    {
      name: "Occupation",
      selector: (row) => row.occupation,
      sortable: true,
      style: { borderRight: "1px solid #eee" },
      grow: 3,
    },
    {
      name: "Religious Denomination",
      selector: (row) => row.religiousDenomination,
      sortable: true,
      style: { borderRight: "1px solid #eee" },
      grow: 3,
    },
    {
      name: "House Number",
      selector: (row) => row.houseNumber,
      sortable: true,
      style: { borderRight: "1px solid #eee" },
      grow: 3,
    },
    {
      name: "Phone Number",
      selector: (row) => row.phoneNumber,
      sortable: true,
      style: { borderRight: "1px solid #eee" },
      grow: 3,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
      style: { borderRight: "1px solid #eee" },
      grow: 1,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex flex-col-1 items-center">
          <Link to={`/nursery1/view/${row.id}`} className="text-blue-600 mr-2">
            <FaRegEye />
          </Link>
          <Link
            to={`/nursery1/edit/${row.id}`}
            className="text-green-600  mr-2"
          >
            <FaRegEdit />
          </Link>
          <button onClick={() => handleDelete(row.id)} className="text-red-600">
            <FaRegTrashCan />
          </button>
        </div>
      ),
      grow: 1,
    },
  ];

  const customStyles = {
    headCells: {
      style: {
        backgroundColor: "#f3f4f6",
        color: "#000",
        fontWeight: "bold",
        whiteSpace: "normal",
        textAlign: "center",
      },
    },
    cell: {
      style: {
        textAlign: "center",
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
    <div>
      <div className="text-end">
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="px-4 py-2 border rounded-lg w-full max-w-sm m-3"
        />
      </div>

      {confirmDeleteId && (
        <PopConfirm
          message="Are you sure you want to delete this student?"
          onCancel={cancelDelete}
          onConfirm={confirmDelete}
        />
      )}
      <DataTable
        columns={columns}
        data={filteredData}
        pagination
        customStyles={customStyles}
        highlightOnHover
        pointerOnHover
        selectableRows={false}
        fixedHeader
        fixedHeaderScrollHeight="600px"
      />
    </div>
  );
};

export default StudentTable;
