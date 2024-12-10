import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const ProfileCalendar = () => {
  const localizer = momentLocalizer(moment);

  // Events State
  const [events, setEvents] = useState([
    {
      title: "Design Session",
      start: new Date(2024, 10, 1, 10, 0),
      end: new Date(2024, 10, 1, 11, 0),
      color: "#FF6B6B",
    },
    {
      title: "Development Sprint",
      start: new Date(2024, 10, 3, 12, 0),
      end: new Date(2024, 10, 3, 13, 0),
      color: "#4ECDC4",
    },
    {
      title: "Team Meeting",
      start: new Date(2024, 10, 6, 14, 0),
      end: new Date(2024, 10, 6, 15, 0),
      color: "#1A535C",
    },
  ]);

  // Modal State
  const [showModal, setShowModal] = useState(false);

  // New Event State
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
    color: "#3174ad",
  });

  // Event Style
  const eventStyleGetter = (event) => {
    const backgroundColor = event.color || "#3174ad";
    return {
      style: {
        backgroundColor,
        borderRadius: "5px",
        color: "white",
        padding: "5px",
        fontSize: "0.9rem",
      },
    };
  };

  // Handle Adding Event
  const handleAddEvent = () => {
    const { title, start, end, color } = newEvent;

    if (title && start && end) {
      const newEventEntry = {
        title,
        start: new Date(start),
        end: new Date(end),
        color,
      };

      setEvents([...events, newEventEntry]);
      setNewEvent({ title: "", start: "", end: "", color: "#3174ad" });
      setShowModal(false);
    } else {
      alert("Please fill out all fields before adding an event.");
    }
  };

  return (
    <div className=" rounded-lg shadow-md px-48 py-8 bg-[#f5effb]">
      {/* Styled Header */}
      <div className="bg-gradient-to-r from-purple-400 to-purple-600 text-white mx-auto py-2 rounded-md shadow-sm w-[30%] text-center mb-12">
        <h2 className="text-3xl font-merriweather">Mon Calendrier</h2>
      </div>

      {/* Add Event Button */}
      <button
        className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
        onClick={() => setShowModal(true)}
      >
        Ajouter un événement
      </button>

      {/* Calendar */}
      <div className="mt-4">
        {events.length > 0 ? (
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            eventPropGetter={eventStyleGetter}
            popup
          />
        ) : (
          <p className="text-center text-gray-500">Aucun événement programmé.</p>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
            <h3 className="text-xl font-semibold mb-4">Ajouter un nouveau événement</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Titre de l'événement
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  value={newEvent.title}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, title: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                Date et heure de début
                </label>
                <input
                  type="datetime-local"
                  className="w-full p-2 border rounded-md"
                  value={newEvent.start}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, start: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                Date et heure de fin
                </label>
                <input
                  type="datetime-local"
                  className="w-full p-2 border rounded-md"
                  value={newEvent.end}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, end: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                Couleur de l'événement
                </label>
                <input
                  type="color"
                  className="w-full p-2 border rounded-md"
                  value={newEvent.color}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, color: e.target.value })
                  }
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                  onClick={() => setShowModal(false)}
                >
                   Annuler
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                  onClick={handleAddEvent}
                >
                  Ajouter un événement
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileCalendar;
