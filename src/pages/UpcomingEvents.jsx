import React, { useEffect } from "react";
import { useLoaderData } from "react-router";
import EventCard from "../components/EventCard";

const UpcomingEvents = () => {
  useEffect(() => {
    document.title = "Neighborly | UpcomingEvents";
  }, []);

  const events = useLoaderData();

  return (
    <div className="max-w-[1280px] mx-auto px-5 pb-10">
      <h1 className="text-3xl font-bold text-center py-5">Upcoming Events</h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {events.map((event, index) => (
          <EventCard key={index} event={event}></EventCard>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
