import React from "react";
import { Link } from "react-router";

const EventCard = ({ event }) => {
  const { _id, title, location, eventDate, eventType, photo } = event;

  const readableDate = new Date(eventDate).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div>
      <div className="card bg-base-100 shadow-sm border border-orange-500">
        <figure>
          <img
            className="h-[200px] w-full object-cover"
            src={photo}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{title}</h2>
          <p>
            <span className="text-[16px] font-semibold">Location: </span>
            {location}
          </p>
          <p>
            {" "}
            <span className="text-[16px] font-semibold">Date: </span>
            {readableDate}
          </p>
          <p>
            {" "}
            <span className="text-[16px] font-semibold">Event Type: </span>
            {eventType}
          </p>
          <div className="card-actions justify-end">
            <Link to={`/event-details/${_id}`}>
              <button className="btn bg-orange-500 text-black">
                View Event
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
