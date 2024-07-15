import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaRegEye, FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import PropTypes from "prop-types";
import DataTable from "react-data-table-component";
import { toast } from "react-toastify";
import StatusTag from "../../../Components/StatusTag";
import PopConfirm from "../../../Components/PopConfirm";
import ExportCSV from "../../../assets/ExportCSV";
import ExportPDF from "../../../assets/ExportPDF";

const TeacherTable = ({ filters, searchText }) => {
  const [data, setData] = useState([]);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3002/teachers/")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = (customID) => {
    setConfirmDeleteId(customID);
  };

  const confirmDelete = () => {
    axios
      .delete("http://localhost:3002/teachers/delete/" + confirmDeleteId)
      .then(() => {
        setData(data.filter((teacher) => teacher.customID !== confirmDeleteId));
        setConfirmDeleteId(null);
        toast.success("Teacher deleted successfully!");
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

  const filteredData = data.filter((teacher) => {
    const ageMatch = ageRange
      ? teacher.age >= ageRange.min && teacher.age <= ageRange.max
      : true;

    return (
      ageMatch &&
      (filters.status ? teacher.status === filters.status : true) &&
      (filters.gender ? teacher.gender === filters.gender : true) &&
      Object.values(teacher).some((value) =>
        String(value).toLowerCase().includes(searchText.toLowerCase())
      )
    );
  });

  const handleRowClick = (row) => {
    navigate(`/teachers/view/${row.customID}`);
    console.log("Row clicked:", row);
  };

  const columns = [
    {
      name: "Teacher ID",
      selector: (row) => row.customID,
      center: true,
    },
    {
      name: "Full Name",
      selector: (row) => row.fullName,
      center: true,
    },
    {
      name: "Date of Birth",
      selector: (row) => row.dateOfBirth,
      center: true,
    },
    {
      name: "Gender",
      selector: (row) => row.gender,
      center: true,
    },
    {
      name: "Nationality",
      selector: (row) => row.nationality,
      center: true,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
      center: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      center: true,
    },
    {
      name: "Address",
      selector: (row) => row.address,
      center: true,
    },
    {
      name: "Qualifications",
      selector: (row) => row.qualifications,
      center: true,
    },
    {
      name: "Experience",
      selector: (row) => row.experience,
      center: true,
    },
    {
      name: "Position",
      selector: (row) => row.position,
      center: true,
    },
    {
      name: "Start Date",
      selector: (row) => row.startDate,
      center: true,
    },
    {
      name: "Salary",
      selector: (row) => row.salary,
      center: true,
    },
    {
      name: "Emergency Contact",
      selector: (row) => row.emergencyContact,
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
          <Link to={`/teachers/view/${row.customID}`} className="text-blue-600">
            <FaRegEye />
          </Link>
          <Link
            to={`/teachers/edit/${row.customID}`}
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
          message="Are you sure you want to delete this teacher?"
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

TeacherTable.propTypes = {
  searchText: PropTypes.string,
  filters: PropTypes.shape({
    age: PropTypes.string,
    status: PropTypes.string,
    gender: PropTypes.string,
  }).isRequired,
};

export default TeacherTable;
