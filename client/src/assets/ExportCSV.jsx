import { CSVLink } from "react-csv";
import { BsFileEarmarkExcelFill } from "react-icons/bs";
import PropTypes from "prop-types";

const ExportCSV = ({ data }) => {
  return (
    <div className="bg-green-600 p-2 text-white flex items-center rounded-lg">
      <CSVLink data={data} filename={"students.csv"} title="Export CSV">
        <BsFileEarmarkExcelFill className="  mr-1 text-[20px]" />
      </CSVLink>
      CSV
    </div>
  );
};

ExportCSV.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ExportCSV;
