import React, { use, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { FaCircleInfo, FaFilePen } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import axios from "axios";

const ManageEvent = () => {
  useEffect(() => {
    document.title = "Neighborly | ManageEvent";
  }, []);
  const { user } = use(AuthContext);

  const eventData = useLoaderData();
  const [events, setEvents] = useState(eventData);
  const addedEventByUser = events?.filter(
    (event) => event.email == user?.email
  );

  const handleDeleteEvent = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff0000",
      cancelButtonColor: "#f97316",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://a11-server-gamma.vercel.app/delete-event/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your event has been deleted.", "success");

              const remainingEvents = events.filter((eve) => eve._id !== id);
              setEvents(remainingEvents);
            } else {
              Swal.fire("Error!", "Event could not be deleted.", "error");
            }
          })
          .catch((err) => {
            console.error(err);
            Swal.fire("Error!", "Something went wrong.", "error");
          });
      }
    });
  };

  return (
    <div className="max-w-[1280px] mx-auto pb-10">
      <h1 className="text-4xl font-bold text-center py-10">
        Manage Your Event
      </h1>
      <div className="overflow-x-auto rounded-box border border-orange-500 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {addedEventByUser.map((singleEvent, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{singleEvent.title}</td>
                <td>{singleEvent.location}</td>
                <td>
                  <div className="flex justify-start items-center gap-5">
                    <Link to={`/event-details/${singleEvent._id}`}>
                      <button>
                        <FaCircleInfo size={25} />
                      </button>
                    </Link>
                    <Link to={`/update-event/${singleEvent._id}`}>
                      <button>
                        <FaFilePen size={25} />
                      </button>
                    </Link>
                    <button onClick={() => handleDeleteEvent(singleEvent._id)}>
                      <MdDelete size={25} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageEvent;
