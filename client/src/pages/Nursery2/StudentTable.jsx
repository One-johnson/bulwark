import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaRegEye, FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import StatusTag from "../../Components/StatusTag";
import PropTypes from "prop-types";
import DataTable from "react-data-table-component";
import PopConfirm from "../../Components/PopConfirm";
import { toast } from "react-toastify";
import ExportCSV from "../../assets/ExportCSV";
import ExportPDF from "../../assets/ExportPDF";

const StudentTable = ({ filters, searchText }) => {
  const [data, setData] = useState([]);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3002/nursery2/")
      .then((res) => setData(res.data))
      .catch((err) => {
        console.error(err);
        toast.error("Error fetching data. Please try again later.");
      });
  }, []);

  const handleDelete = (customID) => {
    setConfirmDeleteId(customID);
  };

  const confirmDelete = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    axios
      .delete("http://localhost:3002/nursery2/delete/" + confirmDeleteId)
      .then((res) => {
        setData(data.filter((student) => student.customID !== confirmDeleteId));
        setConfirmDeleteId(null);
        toast.success("Student deleted successfully!");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Error deleting student. Please try again later.");
      });
  };

  const cancelDelete = () => {
    setConfirmDeleteId(null);
    toast.info("Delete action canceled.");
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
    navigate(`/nursery2/view/${row.customID}`);
    console.log("Row clicked:", row);
  };

  const columns = [
    {
      name: "Student ID",
      selector: (row) => row.customID,
      sortable: false,
      style: {
        borderRight: "1px solid #eee",
      },
      center: true,
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
            to={`/nursery2/view/${row.customID}`}
            className="text-blue-600 text-lg"
            title="View Details"
          >
            <FaRegEye />
          </Link>
          <Link
            to={`/nursery2/edit/${row.customID}`}
            className="text-green-600   text-lg"
            title="Edit"
          >
            <FaRegEdit />
          </Link>
          <button
            onClick={() => handleDelete(row.customID)}
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
    <div className="">
      {confirmDeleteId && (
        <PopConfirm
          message="Are you sure you want to delete this learner?"
          warning="This action will delete the learner permanently and cannot be undone."
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
        fixedHeader={true}
        fixedHeaderScrollHeight="400px"
        onRowClicked={handleRowClick}
      />
    </div>
  );
};

StudentTable.propTypes = {
  searchText: PropTypes.string,
  filters: PropTypes.object.isRequired,
};

export default StudentTable;
