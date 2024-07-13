import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaRegEye, FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import PropTypes from "prop-types";
import DataTable from "react-data-table-component";
import { toast } from "react-toastify";
import StatusTag from "../../Components/StatusTag";
import PopConfirm from "../../Components/PopConfirm";
import ExportCSV from "../../assets/ExportCSV";
import ExportPDF from "../../assets/ExportPDF";

const StudentTable = ({ filters, searchText }) => {
  const [data, setData] = useState([]);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3002/basic1/")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = (customID) => {
    setConfirmDeleteId(customID);
  };

  const confirmDelete = () => {
    axios
      .delete("http://localhost:3002/basic1/delete/" + confirmDeleteId)
      .then(() => {
        setData(data.filter((student) => student.customID !== confirmDeleteId));
        setConfirmDeleteId(null);
        toast.success("Student deleted successfully!");
      })
      .catch((err) => console.error(err));
  };

  const cancelDelete = () => {
    setConfirmDeleteId(null);
  };

  const parseAgeRange = (range) => {
    if (!range) return null;
    const [min, max] = range.split("-").map(Number);
    return { min, max };
  };

  const ageRange = parseAgeRange(filters.age);

  const filteredData = data.filter((student) => {
    const ageMatch = ageRange
      ? student.age >= ageRange.min && student.age <= ageRange.max
      : true;

    return (
      ageMatch &&
      (filters.status ? student.status === filters.status : true) &&
      (filters.gender ? student.sex === filters.gender : true) &&
      Object.values(student).some((value) =>
        String(value).toLowerCase().includes(searchText.toLowerCase())
      )
    );
  });

  const handleRowClick = (row) => {
    navigate(`/basic1/view/${row.customID}`);
    console.log("Row clicked:", row);
  };

  const columns = [
    {
      name: "Student ID",
      selector: (row) => row.customID,
      center: true,
    },
    {
      name: "Registration Date",
      selector: (row) => row.registrationDate,
      center: true,
    },
    {
      name: "First Name",
      selector: (row) => row.firstName,
      center: true,
    },
    {
      name: "Middle Name",
      selector: (row) => row.middleName,
      center: true,
    },
    {
      name: "Last Name",
      selector: (row) => row.lastName,
      center: true,
    },
    {
      name: "Date of Birth",
      selector: (row) => row.dateOfBirth,
      center: true,
    },
    {
      name: "Age",
      selector: (row) => row.age,
      center: true,
    },
    {
      name: "Sex",
      selector: (row) => row.sex,
      center: true,
    },
    {
      name: "Nationality",
      selector: (row) => row.nationality,
      center: true,
    },
    {
      name: "Hometown",
      selector: (row) => row.hometown,
      center: true,
    },
    {
      name: "Parent",
      selector: (row) => row.parentGuardian,
      center: true,
    },
    {
      name: "Address",
      selector: (row) => row.address,
      center: true,
    },
    {
      name: "Occupation",
      selector: (row) => row.occupation,
      center: true,
    },
    {
      name: "Religion",
      selector: (row) => row.religiousDenomination,
      center: true,
    },
    {
      name: "House No.",
      selector: (row) => row.houseNumber,
      center: true,
    },
    {
      name: "Phone No.",
      selector: (row) => row.phoneNumber,
      center: true,
    },
    {
      name: "Status",
      selector: (row) => <StatusTag status={row.status} />,

      center: true,
    },
    {
      name: "Action",

      center: true,
      cell: (row) => (
        <div className="flex space-x-3 items-center text-lg">
          <Link to={`/basic1/view/${row.customID}`} className="text-blue-600">
            <FaRegEye />
          </Link>
          <Link
            to={`/basic1/edit/${row.customID}`}
            className="text-green-600"
          >
            <FaRegEdit />
          </Link>
          <button
            onClick={() => handleDelete(row.customID)}
            className="text-red-600"
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
        color: "#000",
        fontWeight: "bold",
        fontSize: "14px",
        borderRight: "2px solid #eee",
        width: "160px",
      },
    },
    cells: {
      style: {
        textAlign: "center",
        fontSize: "14px",
        borderRight: "1px solid #eee",
      },
    },
    pagination: {
      style: {
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
      },
    },
  };

  return (
    <div>
      {confirmDeleteId && (
        <PopConfirm
          message="Are you sure you want to delete this student?"
          onCancel={cancelDelete}
          onConfirm={confirmDelete}
        />
      )}
      <div className="m-3 cursor-pointer items-center justify-end flex space-x-2">
        <ExportCSV data={filteredData} />
        <ExportPDF data={filteredData} />
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
        onRowClicked={handleRowClick}
      />
    </div>
  );
};

StudentTable.propTypes = {
  searchText: PropTypes.string,
  filters: PropTypes.shape({
    age: PropTypes.string,
    status: PropTypes.string,
    gender: PropTypes.string,
  }).isRequired,
};

export default StudentTable;
