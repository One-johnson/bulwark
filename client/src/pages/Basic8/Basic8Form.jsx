import { useState } from "react";
import PropTypes from "prop-types";
const Basic8Form = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    studentId: "",
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
  });
  const inputStyle =
    "border-2 border-gray-300 rounded-lg w-full py-2 px-3 focus:outline-none focus:border-violet-800 transition duration-300 focus:border-2 hover:border-gray-500 hover:border-2";
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      studentId: "",
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
    });
  };

  const handleCancel = () => {
    onClose();
    setFormData({
      studentId: "",
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
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto ">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="relative w-full max-w-3xl mx-auto">
          <div className="bg-white rounded-lg mt-20 mb-10 p-6 shadow-xl border transform transition-transform duration-300 ease-in-out">
            <h2 className="text-lg font-semibold mb-4 text-center">
              Add New Student
            </h2>
            <form onSubmit={handleSubmit} className="mx-auto">
              <div className="grid grid-cols-2 gap-4">
                {/* Inputs for all fields */}
                <div>
                  <label htmlFor="studentId" className="block mb-2">
                    Student ID
                  </label>
                  <input
                    type="text"
                    id="studentId"
                    name="studentId"
                    value={formData.studentId}
                    onChange={handleChange}
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="registrationDate" className="block mb-2">
                    Registration Date
                  </label>
                  <input
                    type="date"
                    id="registrationDate"
                    name="registrationDate"
                    value={formData.registrationDate}
                    onChange={handleChange}
                    className={inputStyle}
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
                    value={formData.firstName}
                    onChange={handleChange}
                    className={inputStyle}
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
                    value={formData.middleName}
                    onChange={handleChange}
                    className={inputStyle}
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
                    value={formData.lastName}
                    onChange={handleChange}
                    className={inputStyle}
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
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor=" age" className="block mb-2">
                    Age
                  </label>
                  <input
                    type="text"
                    id=" age"
                    name=" age"
                    value={formData.age}
                    onChange={handleChange}
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor=" sex" className="block mb-2">
                    Sex
                  </label>
                  <input
                    type="text"
                    id=" sex"
                    name=" sex"
                    value={formData.sex}
                    onChange={handleChange}
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor=" nationality" className="block mb-2">
                    Nationality
                  </label>
                  <input
                    type="text"
                    id=" nationality"
                    name=" nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor=" hometown" className="block mb-2">
                    Hometown
                  </label>
                  <input
                    type="text"
                    id=" hometown"
                    name=" hometown"
                    value={formData.hometown}
                    onChange={handleChange}
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor=" parentGuardian" className="block mb-2">
                    Parent/Guardian
                  </label>
                  <input
                    type="text"
                    id=" parentGuardian"
                    name=" parentGuardian"
                    value={formData.parentGuardian}
                    onChange={handleChange}
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor=" address" className="block mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    id=" address"
                    name=" address"
                    value={formData.address}
                    onChange={handleChange}
                    className={inputStyle}
                  />
                </div>

                <div>
                  <label htmlFor="  occupation" className="block mb-2">
                    Occupation
                  </label>
                  <input
                    type="text"
                    id="  occupation"
                    name="  occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                    className={inputStyle}
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
                    id="  religiousDenomination"
                    name="  religiousDenomination"
                    value={formData.religiousDenomination}
                    onChange={handleChange}
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor=" houseNumber" className="block mb-2">
                    House Number
                  </label>
                  <input
                    type="text"
                    id=" houseNumber"
                    name=" houseNumber"
                    value={formData.houseNumber}
                    onChange={handleChange}
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor=" phoneNumber" className="block mb-2">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id=" phoneNumber"
                    name=" phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className={inputStyle}
                  />
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

Basic8Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default Basic8Form;
