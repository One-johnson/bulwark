import { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from "axios";
import Modal from "react-modal";
import StatusTag from "../../Components/StatusTag";

// Set the root element for the modal
Modal.setAppElement("#root");

const localizer = momentLocalizer(moment);

const CalendarPage = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3002/events/")
      .then((res) => setEvents(res.data))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    setSelectedEvent(null);
  };

  const eventStyleGetter = (event) => {
    let bgColor;

    switch (event.status) {
      case "completed":
        bgColor = "green"; // Green-800
        break;
      case "upcoming":
        bgColor = "blue"; // Blue-800
        break;
      case "cancelled":
        bgColor = "red"; // Red-800
        break;
      case "postponed":
        bgColor = "indigo"; // Indigo-800
        break;
      default:
        bgColor = "gray"; // Gray-700
    }

    const style = {
      backgroundColor: bgColor,
      borderRadius: "10px",
      opacity: 0.8,
      color: "white",
      border: "0px",
      display: "block",
      textAlign: "center",
      fontWeight: "bold",
      padding: "5px",
    };
    return { style };
  };

  const statusColors = [
    { status: "Completed", color: "green" },
    { status: "Upcoming", color: "blue" },
    { status: "Cancelled", color: "red" },
    { status: "Postponed", color: "indigo" },
    { status: "Other", color: "gray" },
  ];

  return (
    <div className="p-4 mt-20 px-10 ml-60">
      <h2 className="text-3xl font-bold mb-4 text-violet-800">
        School Calendar
      </h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable
        onSelectEvent={handleSelectEvent}
        eventPropGetter={eventStyleGetter}
      />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Event Details"
        className="fixed inset-0 flex items-center justify-center p-4"
        overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-80 z-50"
      >
        {selectedEvent && (
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-lg mx-auto flex flex-col items-center px-14">
            <h2 className="text-2xl font-bold mb-6 text-violet-800 text-center">
              Event Details
            </h2>

            <div className="space-y-4">
              <hr />
              <p>
                <strong className="font-medium">Event ID:</strong>{" "}
                {selectedEvent.customID}
              </p>
              <hr />
              <p>
                <strong className="font-medium">Title:</strong>{" "}
                {selectedEvent.title}
              </p>
              <hr />
              <p>
                <strong className="font-medium">Description:</strong>{" "}
                {selectedEvent.description}
              </p>
              <hr />
              <p>
                <strong className="font-medium">Start:</strong>{" "}
                {new Date(selectedEvent.start).toLocaleString()}
              </p>
              <hr />
              <p>
                <strong className="font-medium">End:</strong>{" "}
                {new Date(selectedEvent.end).toLocaleString()}
              </p>
              <hr />
              <p>
                <strong className="font-medium">Status:</strong>{" "}
                <StatusTag status={selectedEvent.status} />
              </p>
              <hr />
            </div>

            <div className="flex justify-center w-full pt-4">
              <button
                onClick={handleCloseModal}
                className="py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 w-40"
              >
                CLOSE
              </button>
            </div>
          </div>
        )}
      </Modal>

      <div className="p-4 border bg-white pb-10 mt-1">
        <div className="flex justify-center space-x-10">
          {statusColors.map((item) => (
            <div key={item.status} className="flex items-center space-x-2">
              <span
                className="inline-block w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              ></span>
              <span>{item.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
