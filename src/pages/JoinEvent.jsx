import { use, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";

const JoinEvent = () => {
  useEffect(() => {
    document.title = "Neighborly | JoinedEvent";
  }, []);
  const { user } = use(AuthContext);
  const [joinedEvents, setJoinedEvents] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(
          `https://a11-server-gamma.vercel.app/joined-events?email=${user.email}`
        )
        .then((res) => {
          const sorted = res.data.sort(
            (a, b) => new Date(a.eventDate) - new Date(b.eventDate)
          );
          setJoinedEvents(sorted);
        });
    }
  }, [user]);

  return (
    <div className="max-w-[1280px] mx-auto pb-10 px-5">
      <h2 className="text-3xl text-center font-bold pt-4 pb-10">
        My Joined Events
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {joinedEvents.map((event) => (
          <div key={event._id} className="border p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{event.eventTitle}</h3>
            <p className="text-gray-500">
              {" "}
              Date:{" "}
              {new Date(event.eventDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p>Description: {event.eventDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JoinEvent;
