import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { toast } from "react-toastify";

const AddEventForm = ({ onClose }) => {
  const [values, setValues] = useState({
    title: "",
    description: "",
    start: "",
    end: "",
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
      .post("http://localhost:3002/events", values)
      .then((res) => {
        console.log(res);
        // Show success toast
        toast.success("Event added successfully!");
        // Reset form fields
        setValues({
          title: "",
          description: "",
          start: "",
          end: "",
          status: "",
        });
      })
      .catch((err) => console.log(err));
  };

  const handleCancel = () => {
    onClose();
    setValues({
      title: "",
      description: "",
      start: "",
      end: "",
      status: "",
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-800 bg-opacity-80">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="relative w-full max-w-3xl mx-auto">
          <div className="bg-white rounded-lg mt-20 mb-10 p-6 shadow-xl border transform transition-transform duration-300 ease-in-out">
            <h2 className="text-lg font-cdbold mb-4 text-center">
              Add New Event
            </h2>
            <form onSubmit={handleSubmit} className="mx-auto">
              <div className="grid grid-cols-2 gap-4">
                {/* Inputs for all fields */}
                <div>
                  <label htmlFor="title" className="block mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={values.title}
                    onChange={handleChange}
                    className={inputStyle}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="description" className="block mb-2">
                    Description
                  </label>
                  <input
                    type="textarea"
                    id="description"
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                    className={inputStyle}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="start" className="block mb-2">
                    Start Date
                  </label>
                  <input
                    type="date"
                    id="start"
                    name="start"
                    value={values.start}
                    onChange={handleChange}
                    className={inputStyle}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="end" className="block mb-2">
                    End Date
                  </label>
                  <input
                    type="date"
                    id="end"
                    name="end"
                    value={values.end}
                    onChange={handleChange}
                    className={inputStyle}
                    required
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
                    required
                  >
                    <option value="" className="text-gray-500">
                      Select
                    </option>
                    <option value="completed">Completed</option>
                    <option value="pending">Pending</option>
                    <option value="cancelled">Cancelled</option>
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

AddEventForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default AddEventForm;
