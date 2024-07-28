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

const EventTable = ({ filters, searchText }) => {
  const [data, setData] = useState([]);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3002/events/")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = (customID) => {
    setConfirmDeleteId(customID);
  };

  const confirmDelete = () => {
    axios
      .delete(`http://localhost:3002/events/delete/${confirmDeleteId}`)
      .then(() => {
        setData(data.filter((event) => event.customID !== confirmDeleteId));
        setConfirmDeleteId(null);
        toast.success("Event deleted successfully!");
      })
      .catch((err) => console.error(err));
  };

  const cancelDelete = () => {
    setConfirmDeleteId(null);
  };

  const filteredData = data.filter((event) => {
    return (
      (filters.status ? event.status === filters.status : true) &&
      (filters.term ? event.term === filters.term : true) &&
      Object.values(event).some((value) =>
        String(value).toLowerCase().includes(searchText.toLowerCase())
      )
    );
  });


  const handleRowClick = (row) => {
    navigate(`/events/view/${row.customID}`);
    console.log("Row clicked:", row);
  };

  const columns = [
    {
      name: "Event ID",
      selector: (row) => row.customID,
      center: true,
    },
    {
      name: "Title",
      selector: (row) => row.title,
      center: true,
    },
    {
      name: "Description",
      selector: (row) => row.description,
      center: true,
    },
    {
      name: "Start Date",
      selector: (row) => new Date(row.start).toLocaleString(),
      center: true,
    },
    {
      name: "End Date",
      selector: (row) => new Date(row.end).toLocaleString(),
      center: true,
    },
    {
      name: "Term",
      selector: (row) => row.term,
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
          <Link to={`/events/view/${row.customID}`} className="text-blue-600">
            <FaRegEye />
          </Link>
          <Link to={`/events/edit/${row.customID}`} className="text-green-600">
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
          message="Are you sure you want to delete this event?"
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

EventTable.propTypes = {
  searchText: PropTypes.string,
  filters: PropTypes.shape({
    status: PropTypes.string,
    term: PropTypes.string,
  }).isRequired,
};

export default EventTable;
