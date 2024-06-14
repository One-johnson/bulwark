import { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "axios";
import { InputText } from "primereact/inputtext";
import StatusTag from "../../Components/StatusTag";

const StudentTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [globalFilterValue, setGlobalFilterValue] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3002/nursery1/")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const onGlobalFilterChange = (e) => {
    setGlobalFilterValue(e.target.value);
  };

  const filterHeader = (
    <div className="flex justify-end">
      <InputText
        value={globalFilterValue}
        onChange={onGlobalFilterChange}
        placeholder="Global Search"
        className="mr-2 px-3 py-2 border rounded-lg"
      />
    </div>
  );

  return (
    <div className="overflow-x-auto">
      <DataTable
        value={data}
        paginator
        rows={10}
        loading={loading}
        globalFilter={globalFilterValue}
        header={filterHeader}
        emptyMessage="No students found."
        className="datatable-responsive"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} students"
        showGridlines
        stripedRows
        responsiveLayout="scroll"
      >
        <Column
          field="customID"
          header="Student ID"
          filter
          filterPlaceholder="Search ID"
        />
        <Column
          field="registrationDate"
          header="Registration Date"
          filter
          filterPlaceholder="Search Date"
        />
        <Column
          field="firstName"
          header="First Name"
          filter
          filterPlaceholder="Search First Name"
        />
        <Column
          field="middleName"
          header="Middle Name"
          filter
          filterPlaceholder="Search Middle Name"
        />
        <Column
          field="lastName"
          header="Last Name"
          filter
          filterPlaceholder="Search Last Name"
        />
        <Column
          field="dateOfBirth"
          header="Date of Birth"
          filter
          filterPlaceholder="Search DOB"
        />
        <Column
          field="age"
          header="Age"
          filter
          filterPlaceholder="Search Age"
        />
        <Column
          field="sex"
          header="Sex"
          filter
          filterPlaceholder="Search Sex"
        />
        <Column
          field="nationality"
          header="Nationality"
          filter
          filterPlaceholder="Search Nationality"
        />
        <Column
          field="hometown"
          header="Hometown"
          filter
          filterPlaceholder="Search Hometown"
        />
        <Column
          field="parentGuardian"
          header="Parent/Guardian"
          filter
          filterPlaceholder="Search Parent/Guardian"
        />
        <Column
          field="address"
          header="Address"
          filter
          filterPlaceholder="Search Address"
        />
        <Column
          field="occupation"
          header="Occupation"
          filter
          filterPlaceholder="Search Occupation"
        />
        <Column
          field="religiousDenomination"
          header="Religious Denomination"
          filter
          filterPlaceholder="Search Religion"
        />
        <Column
          field="houseNumber"
          header="House Number"
          filter
          filterPlaceholder="Search House Number"
        />
        <Column
          field="phoneNumber"
          header="Phone Number"
          filter
          filterPlaceholder="Search Phone Number"
        />
        <Column
          field="status"
          header="Status"
          filter
          filterPlaceholder="Search Status"
          body={(rowData) => <StatusTag status={rowData.status} />}
        />
      </DataTable>
    </div>
  );
};

export default StudentTable;
