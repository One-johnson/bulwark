import jsPDF from "jspdf";
import "jspdf-autotable";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import PropTypes from "prop-types";

const ExportPDF = ({ data }) => {
  const exportPDF = () => {
    const doc = new jsPDF({ orientation: "landscape" });
    doc.text("Student Data", 14, 10);
    doc.autoTable({
      head: [
        [
          "ID",
          "Registration Date",
          "First Name",
          "Middle Name",
          "Last Name",
          "Date of Birth",
          "Age",
          "Sex",
          "Nationality",
          "Hometown",
          "Parent/Guardian",
          "Address",
          "Occupation",
          "Religious Denomination",
          "House Number",
          "Phone Number",
          "Status",
        ],
      ],
      body: data.map((student) => [
        student.id,
        student.registrationDate,
        student.firstName,
        student.middleName,
        student.lastName,
        student.dateOfBirth,
        student.age,
        student.sex,
        student.nationality,
        student.hometown,
        student.parentGuardian,
        student.address,
        student.occupation,
        student.religiousDenomination,
        student.houseNumber,
        student.phoneNumber,
        student.status,
      ]),
      startY: 20,
      styles: { fontSize: 8 },
      headStyles: { fillColor: [100, 100, 100] },
      margin: { top: 10 },
    });
    doc.save("students.pdf");
  };

  return (
    <button onClick={exportPDF} title="Export PDF">
      <BsFileEarmarkPdfFill className="text-red-700 text-[22px]" />
    </button>
  );
};

ExportPDF.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ExportPDF;
