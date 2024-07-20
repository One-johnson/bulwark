import { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from "axios";
import { toast } from "react-toastify";

const localizer = momentLocalizer(moment);

const CalendarPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/events/")
      .then((res) => setEvents(res.data))
      .catch((err) => {
        console.error(err);
        toast.error("Failed to load events");
      });
  }, []);

  const handleSelectEvent = (event) => {
    alert(`Event: ${event.title}\nDescription: ${event.description}`);
  };

  const handleSelectSlot = ({ start, end }) => {
    const title = prompt("New Event name");
    if (title) {
      const newEvent = { start, end, title };
      setEvents([...events, newEvent]);
      // Save event to server
      axios.post("http://localhost:3002/events/", newEvent).catch((err) => {
        console.error(err);
        toast.error("Failed to add event");
      });
    }
  };

  return (
    <div className="p-4 mt-20 px-10 ml-60">
      <h2 className="text-3xl font-bold mb-4 text-violet-800 ">School Calendar</h2>
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
    </div>
  );
};

export default CalendarPage;
