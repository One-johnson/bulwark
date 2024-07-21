import { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from "axios";
import Modal from "react-modal";

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

  const handleSelectSlot = ({ start, end }) => {
    const title = prompt("New Event name");
    if (title) {
      const newEvent = { start, end, title };
      setEvents([...events, newEvent]);
      // Save event to server
      axios
        .post("http://localhost:3002/events/", newEvent)
        .then((res) => {
          setEvents([...events, res.data]); // Add the event returned by the server
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

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
        onSelectSlot={handleSelectSlot}
      />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Event Details"
        className="fixed inset-0 flex items-center justify-center p-4 "
        overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-80 z-50"
      >
        {selectedEvent && (
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md mx-auto flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4 text-violet-800 text-center">
              Event Details
            </h2>
            <p className="mb-2 text-center">
              <strong className="font-medium">Event ID:</strong>{" "}
              {selectedEvent.customID}
            </p>
            <p className="mb-2 text-center">
              <strong className="font-medium">Title:</strong>{" "}
              {selectedEvent.title}
            </p>

            <p className="mb-2 text-center">
              <strong className="font-medium">Description:</strong>{" "}
              {selectedEvent.description}
            </p>
            <p className="mb-2 text-center">
              <strong className="font-medium">Start:</strong>{" "}
              {new Date(selectedEvent.start).toLocaleString()}
            </p>
            <p className="mb-2 text-center">
              <strong className="font-medium">End:</strong>{" "}
              {new Date(selectedEvent.end).toLocaleString()}
            </p>
            <p className="mb-4 text-center">
              <strong className="font-medium">Status:</strong>{" "}
              {selectedEvent.status}
            </p>
            <div className="flex justify-center w-full pt-4">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-opacity-50"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default CalendarPage;
