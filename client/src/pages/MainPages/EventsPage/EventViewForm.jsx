import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EventViewForm = () => {
  const { customID } = useParams();

  const [events, setEvents] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:3002/events/view/" + customID)
      .then((res) => {
        console.log(res);
        setEvents(res.data[0]);
      })
      .catch((err) => console.log(err));
  }, [customID]);

  if (!events.customID) {
    return <div>Loading...</div>;
  }

  const inputStyle =
    "border-2 border-gray-300 rounded-lg w-full py-2 px-3 focus:outline-none bg-gray-200";
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-800 bg-opacity-75">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="relative w-full max-w-3xl mx-auto">
          <div className="bg-white rounded-lg mt-20 mb-10 p-6 shadow-xl border transform transition-transform duration-300 ease-in-out">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Event Details
            </h2>
            <form className="mx-auto">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="customID" className="block mb-2">
                    Event ID
                  </label>
                  <input
                    type="text"
                    id="customID"
                    name="customID"
                    value={events.customID}
                    readOnly
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="title" className="block mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={events.title}
                    readOnly
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
                    value={events.description}
                    readOnly
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="start" className="block mb-2">
                    Start Date
                  </label>
                  <input
                    type="text"
                    id="start"
                    name="start"
                    value={events.start}
                    readOnly
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="end" className="block mb-2">
                    End Date
                  </label>
                  <input
                    type="text"
                    id="end"
                    name="end"
                    value={events.end}
                    readOnly
                    className={inputStyle}
                  />
                </div>

                <div>
                  <label htmlFor="status" className="block mb-2">
                    Status
                  </label>
                  <input
                    type="text"
                    id="status"
                    name="status"
                    value={events.status}
                    readOnly
                    className={inputStyle}
                  />
                </div>
              </div>
            </form>

            <div className="mt-8 text-center">
              <Link
                to="/EventsList"
                className="mr-4 text-white bg-blue-700 py-2 px-4 rounded-md font-bold hover:bg-blue-500 transition duration-300"
              >
                BACK
              </Link>
              <Link
                to={`/events/edit/${events.customID}`}
                className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-md transition duration-300"
              >
                EDIT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventViewForm;
