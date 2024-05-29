import { CSVLink } from "react-csv";
import { BsFileEarmarkExcelFill } from "react-icons/bs";
import PropTypes from "prop-types";

const ExportCSV = ({ data }) => {
  return (
    <CSVLink data={data} filename={"students.csv"} title="Export CSV">
      <BsFileEarmarkExcelFill className="text-green-700 text-[22px]" />
    </CSVLink>
  );
};

ExportCSV.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ExportCSV;
