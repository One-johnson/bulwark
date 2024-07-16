import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const TeacherUpdateForm = () => {
  const { customID } = useParams();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    fullName: "",
    dateOfBirth: "",
    gender: "",
    nationality: "",
    phone: "",
    email: "",
    address: "",
    qualifications: "",
    experience: "",
    position: "",
    startDate: "",
    salary: "",
    emergencyContact: "",
    status: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3002/teachers/view/" + customID)
      .then((res) => {
        console.log(res);
        setValues({
          fullName: res.data[0].fullName,
          dateOfBirth: res.data[0].dateOfBirth,
          gender: res.data[0].gender,
          nationality: res.data[0].nationality,
          phone: res.data[0].phone,
          email: res.data[0].email,
          address: res.data[0].address,
          qualifications: res.data[0].qualifications,
          experience: res.data[0].experience,
          position: res.data[0].position,
          startDate: res.data[0].startDate,
          salary: res.data[0].salary,
          emergencyContact: res.data[0].emergencyContact,
          status: res.data[0].status,
        });
      })
      .catch((err) => console.log(err));
  }, [customID]);

  const handleUpdate = (event) => {
    event.preventDefault();
    axios
      .put("http://localhost:3002/teachers/update/" + customID, values)
      .then((res) => {
        console.log(res);
        toast.success("Teacher updated successfully!");
        navigate("/TeachersList");
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const inputStyle =
    "border-2 border-gray-300 rounded-lg w-full py-2 px-3 focus:outline-none focus:border-violet-800 transition duration-300 focus:border-2 hover:border-gray-500 hover:border-2";

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-300 bg-opacity-75">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="relative w-full max-w-3xl mx-auto">
          <div className="bg-white rounded-lg mt-20 mb-10 p-6 shadow-xl border transform transition-transform duration-300 ease-in-out">
            <h2 className="text-lg font-semibold mb-4 text-center">
              Update Teacher
            </h2>
            <form onSubmit={handleUpdate} className="mx-auto">
              <div className="grid grid-cols-2 gap-4">
                {/* Inputs for all fields */}
                <div>
                  <label htmlFor="fullName" className="block mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={values.fullName}
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
                    value={values.dateOfBirth}
                    onChange={handleChange}
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="gender" className="block mb-2">
                    Gender
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={values.gender}
                    onChange={handleChange}
                    className={inputStyle}
                  >
                    <option value="" className="text-gray-500">
                      Select
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="nationality" className="block mb-2">
                    Nationality
                  </label>
                  <input
                    type="text"
                    id="nationality"
                    name="nationality"
                    value={values.nationality}
                    onChange={handleChange}
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2">
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={values.address}
                    onChange={handleChange}
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="qualifications" className="block mb-2">
                    Qualifications
                  </label>
                  <input
                    type="text"
                    id="qualifications"
                    name="qualifications"
                    value={values.qualifications}
                    onChange={handleChange}
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="experience" className="block mb-2">
                    Experience
                  </label>
                  <input
                    type="text"
                    id="experience"
                    name="experience"
                    value={values.experience}
                    onChange={handleChange}
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="position" className="block mb-2">
                    Position
                  </label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={values.position}
                    onChange={handleChange}
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="startDate" className="block mb-2">
                    Start Date
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={values.startDate}
                    onChange={handleChange}
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="salary" className="block mb-2">
                    Salary
                  </label>
                  <input
                    type="text"
                    id="salary"
                    name="salary"
                    value={values.salary}
                    onChange={handleChange}
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="emergencyContact" className="block mb-2">
                    Emergency Contact
                  </label>
                  <input
                    type="text"
                    id="emergencyContact"
                    name="emergencyContact"
                    value={values.emergencyContact}
                    onChange={handleChange}
                    className={inputStyle}
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
                  >
                    <option value="" className="text-gray-500">
                      Select
                    </option>
                    <option value="full-time">Full-time</option>
                    <option value="part-time">Part-time</option>
                    <option value="contract">Contract</option>
                  </select>
                </div>
              </div>
              <div className="col-span-full mt-6 flex justify-center font-bold">
                <Link
                  to="/TeachersList"
                  className="mr-4 text-white bg-red-600 py-2 px-4 rounded font-bold hover:bg-red-700 transition-colors duration-300"
                >
                  CLOSE
                </Link>
                <button
                  type="submit"
                  className="mr-4 bg-green-600 text-white px-8 py-1 rounded-md hover:bg-green-700 transition-colors duration-300 text-center"
                >
                  UPDATE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherUpdateForm;
