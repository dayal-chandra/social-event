import React, { use, useEffect } from "react";
import { Link, useLoaderData, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";

const EventDetails = () => {
  useEffect(() => {
    document.title = "Neighborly | EventDetails";
  }, []);
  const { user } = use(AuthContext);
  const locationPath = useLocation();
  const navigate = useNavigate();

  const {
    _id,
    title,
    location,
    description,
    eventDate,
    eventType,
    photo,
    email,
  } = useLoaderData();

  const readableDate = new Date(eventDate).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const handleJoinEvent = (e) => {
    const joinedEvent = {
      eventId: _id,
      userEmail: user.email,
      eventTitle: title,
      eventLocation: location,
      eventType: eventType,
      eventDate: eventDate,
      eventDescription: description,
      joinedAt: new Date(),
    };

    axios
      .post("https://a11-server-gamma.vercel.app/joined-event", joinedEvent)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Thanks for Joining the Event.");
          navigate(
            `${locationPath.state ? locationPath.state : "/joined-events"}`
          );
        } else if (res.data.message === "Already joined") {
          toast.warning("You have already joined this event.");
        } else {
          toast.error("Something went wrong.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="pb-10 px-5">
      <h1 className="text-3xl font-bold text-center py-10">Event Details</h1>
      <div className="card w-full md:w-1/2 mx-auto bg-base-100 shadow-sm border border-orange-500">
        <figure>
          <img
            className=" h-[200px] md:h-[380px] w-full object-cover"
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
          <p>
            {" "}
            <span className="text-[16px] font-semibold">Description: </span>
            {description}
          </p>
          <p className="text-gray-500">Author Email: {email}</p>

          <div className="card-actions justify-end">
            {/* <Link to={`/event-details/${_id}`}>
              
            </Link> */}
            <button
              onClick={handleJoinEvent}
              className="btn w-full my-5 bg-orange-500 text-black"
            >
              Join Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
