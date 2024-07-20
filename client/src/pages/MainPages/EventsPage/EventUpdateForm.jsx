import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const EventUpdateForm = () => {
  const { customID } = useParams();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    status: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3002/events/view/" + customID)
      .then((res) => {
        console.log(res);
        setValues({
          title: res.data[0].title,
          description: res.data[0].description,
          startDate: res.data[0].startDate,
          endDate: res.data[0].endDate,
          status: res.data[0].status,
        });
      })
      .catch((err) => console.log(err));
  }, [customID]);

  const handleUpdate = (event) => {
    event.preventDefault();
    axios
      .put("http://localhost:3002/events/update/" + customID, values)
      .then((res) => {
        console.log(res);
        toast.success("Event updated successfully!");
        navigate("/EventsList");
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
                  />
                </div>
                <div>
                  <label htmlFor="description" className="block mb-2">
                    Description
                  </label>
                  <input
                    type="text"
                    id="description"
                    name="description"
                    value={values.description}
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
                  <label htmlFor="endDate" className="block mb-2">
                    End Date
                  </label>
                  <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={values.endDate}
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
                    <option value="completed">Completed</option>
                    <option value="pending">Pending</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
              </div>
              <div className="col-span-full mt-6 flex justify-center font-bold">
                <Link
                  to="/EventsList"
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

export default EventUpdateForm;
