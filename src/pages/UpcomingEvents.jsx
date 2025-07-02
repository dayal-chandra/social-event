import React, { useEffect, useState, useCallback } from "react";
import { useLoaderData } from "react-router";
import EventCard from "../components/EventCard";

const UpcomingEvents = () => {
  useEffect(() => {
    document.title = "Neighborly | Upcoming Events";
  }, []);

  const events = useLoaderData();
  const [sortedEvents, setSortedEvents] = useState([]);
  const [sortOption, setSortOption] = useState("date-asc");

  const handleSort = useCallback(
    (option) => {
      const sorted = [...events];

      if (option === "date-asc") {
        sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
      } else if (option === "date-desc") {
        sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
      } else if (option === "name-asc") {
        sorted.sort((a, b) => a.title.localeCompare(b.title));
      } else if (option === "name-desc") {
        sorted.sort((a, b) => b.title.localeCompare(a.title));
      }

      setSortedEvents(sorted);
    },
    [events]
  );

  useEffect(() => {
    handleSort(sortOption);
  }, [events, sortOption, handleSort]);

  return (
    <div className="max-w-[1280px] mx-auto px-5 pb-10">
      <h1 className="text-3xl font-bold text-center py-5">Upcoming Events</h1>

      <div className="flex justify-end mb-5">
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border px-3 py-2 rounded focus:outline-orange-500"
        >
          <option value="date-asc">Date (Oldest First)</option>
          <option value="date-desc">Date (Newest First)</option>
          <option value="name-asc">Name (A-Z)</option>
          <option value="name-desc">Name (Z-A)</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {sortedEvents.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
