import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import { toast } from "react-toastify";
import StatusOptions from "../../Components/StatusOption";

const AddStudentForm = ({ onClose }) => {
  const [values, setValues] = useState({
    registrationDate: "",
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: "",
    age: "",
    sex: "",
    nationality: "",
    hometown: "",
    parentGuardian: "",
    address: "",
    occupation: "",
    religiousDenomination: "",
    houseNumber: "",
    phoneNumber: "",
    status: "",
  });

  const inputStyle =
    "border-2 border-gray-300 rounded-lg w-full py-2 px-3 focus:outline-none focus:border-violet-800 transition duration-300 focus:border-2 hover:border-gray-500 hover:border-2";
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3002/basic9", values)
      .then((res) => {
        console.log(res);
        // Show success toast
        toast.success("Student added successfully!");
        // Reset form fields
        setValues({
          registrationDate: "",
          firstName: "",
          middleName: "",
          lastName: "",
          dateOfBirth: "",
          age: "",
          sex: "",
          nationality: "",
          hometown: "",
          parentGuardian: "",
          address: "",
          occupation: "",
          religiousDenomination: "",
          houseNumber: "",
          phoneNumber: "",
          status: "",
        });
      })
      .catch((err) => console.log(err));
  };

  const handleCancel = () => {
    onClose();
    setValues({
      registrationDate: "",
      firstName: "",
      middleName: "",
      lastName: "",
      dateOfBirth: "",
      age: "",
      sex: "",
      nationality: "",
      hometown: "",
      parentGuardian: "",
      address: "",
      occupation: "",
      religiousDenomination: "",
      houseNumber: "",
      phoneNumber: "",
      status: "",
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-800 bg-opacity-80">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="relative w-full max-w-5xl mx-auto">
          <div className="bg-white rounded-lg mt-20 mb-10 p-6 shadow-xl border transform transition-transform duration-300 ease-in-out">
            <h2 className="text-lg font-semibold mb-4 text-center">
              Add New Student
            </h2>
            <form onSubmit={handleSubmit} className="mx-auto">
              <div className="grid grid-cols-2 gap-4">
                {/* Inputs for all fields */}

                <div>
                  <label htmlFor="registrationDate" className="block mb-2">
                    Registration Date
                  </label>
                  <input
                    type="date"
                    id="registrationDate"
                    name="registrationDate"
                    value={values.registrationDate}
                    onChange={handleChange}
                    className={inputStyle}
                    required="required"
                  />
                </div>
                <div>
                  <label htmlFor="firstName" className="block mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    className={inputStyle}
                    required="required"
                  />
                </div>
                <div>
                  <label htmlFor="middleName" className="block mb-2">
                    Middle Name
                  </label>
                  <input
                    type="text"
                    id="middleName"
                    name="middleName"
                    value={values.middleName}
                    onChange={handleChange}
                    className={inputStyle}
                    required="required"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    className={inputStyle}
                    required="required"
                  />
                </div>
                <div>
                  <label htmlFor="dateOfBirth" className="block mb-2">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={values.dateOfBirth}
                    onChange={handleChange}
                    className={inputStyle}
                    required="required"
                  />
                </div>
                <div>
                  <label htmlFor=" age" className="block mb-2">
                    Age
                  </label>
                  <input
                    type="text"
                    id="age"
                    name="age"
                    value={values.age}
                    onChange={handleChange}
                    className={inputStyle}
                    required="required"
                  />
                </div>
                <div>
                  <label htmlFor=" sex" className="block mb-2">
                    Sex
                  </label>
                  <select
                    id="sex"
                    name="sex"
                    value={values.sex}
                    onChange={handleChange}
                    className={inputStyle}
                    required="required"
                  >
                    <option value="" className="text-gray-500">
                      Select
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div>
                  <label htmlFor=" nationality" className="block mb-2">
                    Nationality
                  </label>
                  <input
                    type="text"
                    id="nationality"
                    name="nationality"
                    value={values.nationality}
                    onChange={handleChange}
                    className={inputStyle}
                    required="required"
                  />
                </div>
                <div>
                  <label htmlFor=" hometown" className="block mb-2">
                    Hometown
                  </label>
                  <input
                    type="text"
                    id="hometown"
                    name="hometown"
                    value={values.hometown}
                    onChange={handleChange}
                    className={inputStyle}
                    required="required"
                  />
                </div>
                <div>
                  <label htmlFor=" parentGuardian" className="block mb-2">
                    Parent/Guardian
                  </label>
                  <input
                    type="text"
                    id="parentGuardian"
                    name="parentGuardian"
                    value={values.parentGuardian}
                    onChange={handleChange}
                    className={inputStyle}
                    required="required"
                  />
                </div>
                <div>
                  <label htmlFor=" address" className="block mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={values.address}
                    onChange={handleChange}
                    className={inputStyle}
                    required="required"
                  />
                </div>

                <div>
                  <label htmlFor="  occupation" className="block mb-2">
                    Occupation
                  </label>
                  <input
                    type="text"
                    id="occupation"
                    name="occupation"
                    value={values.occupation}
                    onChange={handleChange}
                    className={inputStyle}
                    required="required"
                  />
                </div>
                <div>
                  <label
                    htmlFor="  religiousDenomination"
                    className="block mb-2"
                  >
                    Religious Denomiation
                  </label>
                  <input
                    type="text"
                    id="religiousDenomination"
                    name="religiousDenomination"
                    value={values.religiousDenomination}
                    onChange={handleChange}
                    className={inputStyle}
                    required="required"
                  />
                </div>
                <div>
                  <label htmlFor=" houseNumber" className="block mb-2">
                    House Number
                  </label>
                  <input
                    type="text"
                    id="houseNumber"
                    name="houseNumber"
                    value={values.houseNumber}
                    onChange={handleChange}
                    className={inputStyle}
                    required="required"
                  />
                </div>
                <div>
                  <label htmlFor=" phoneNumber" className="block mb-2">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={values.phoneNumber}
                    onChange={handleChange}
                    className={inputStyle}
                    required="required"
                  />
                </div>
                <div>
                  <label htmlFor="status" className="block mb-2">
                    Status
                  </label>
                  <select
                    id="status"
                    name="status"
                    value={values.status}
                    onChange={handleChange}
                    className={inputStyle}
                    required="required"
                  >
                    <StatusOptions />
                  </select>
                </div>
              </div>
              <div className="col-span-full mt-6 flex justify-center font-bold">
                <button
                  type="submit"
                  className="mr-4 bg-green-600 text-white px-8 py-1 rounded-md hover:bg-green-700 transition-colors duration-300 text-center"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="ml-4 bg-red-500 text-white px-8 py-1 rounded-md hover:bg-red-600 transition-colors duration-300 text-center"
                  onChange={handleChange}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

AddStudentForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};
export default AddStudentForm;
