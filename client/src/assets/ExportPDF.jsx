import jsPDF from "jspdf";
import "jspdf-autotable";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import PropTypes from "prop-types";

const generateReport = (data) => {
  const ageCount = {};
  const genderCount = { male: 0, female: 0 };

  data.forEach((student) => {
    const age = student.age;
    const gender = student.sex.toLowerCase();

    // Count by age
    if (ageCount[age]) {
      ageCount[age]++;
    } else {
      ageCount[age] = 1;
    }

    // Count by gender
    if (genderCount[gender] !== undefined) {
      genderCount[gender]++;
    }
  });

  return { ageCount, genderCount };
};

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
    // Generate and Add Report Data
    const { ageCount, genderCount } = generateReport(data);

    let finalY = doc.lastAutoTable.finalY || 10;
    finalY += 10;

    doc.setFontSize(12);
    doc.text("Report Data", 14, finalY);

    finalY += 10;
    doc.setFontSize(10);
    doc.text("Number of Students by Age:", 14, finalY);

    Object.entries(ageCount).forEach(([age, count]) => {
      finalY += 8;
      doc.text(`Age ${age}: ${count} students`, 14, finalY);
    });

    finalY += 10;
    doc.text("Number of Students by Gender:", 14, finalY);

    finalY += 8;
    doc.text(`Male: ${genderCount.male} students`, 14, finalY);

    finalY += 8;
    doc.text(`Female: ${genderCount.female} students`, 14, finalY);

    doc.save("students.pdf");
  };

  return (
    <div className="bg-red-600 font-medium p-2 text-white flex items-center rounded-lg">
      <button onClick={exportPDF} title="Export PDF">
        <BsFileEarmarkPdfFill className=" mr-2 text-[20px]" />
      </button>
      PDF
    </div>
  );
};

ExportPDF.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ExportPDF;
