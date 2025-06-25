import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import DatePicker from "react-datepicker";
import {
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
} from "react-router";
import axios from "axios";
import { toast } from "react-toastify";

const UpdateEvent = () => {
  useEffect(() => {
    document.title = "Neighborly | UpdateEvent";
  }, []);
  const { user } = use(AuthContext);
  const { id } = useParams();
  const locationPath = useLocation();
  const navigate = useNavigate();

  const eventData = useLoaderData();
  const { _id, title, description, location, eventDate, eventType, photo } =
    eventData.find((event) => event._id == id);

  const [startDate, setStartDate] = useState(new Date(eventDate));
  const today = new Date();

  const handleUpdateEvent = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedEvent = Object.fromEntries(formData.entries());

    if (!startDate) {
      toast.warning("Please select a valid future date");
      return;
    }

    axios
      .put(
        `https://a11-server-gamma.vercel.app/update-event/${_id}`,
        updatedEvent
      )
      .then((res) => {
        if (res.data.modifiedCount) {
          toast.success("Event Details Updated Successfully.");
        }
        navigate(
          `${locationPath.state ? locationPath.state : "/upcoming-events"}`
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <section className="p-6 bg-base-100">
        <form
          onSubmit={handleUpdateEvent}
          className="container flex flex-col mx-auto space-y-12 bg-base-100 border border-orange-500 rounded-2xl"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6  ">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="text-3xl font-bold">Update Your Event Data</p>
              <p className="">Update event data if needed.</p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label>Event Title</label>
                <input
                  type="text"
                  name="title"
                  defaultValue={title}
                  placeholder="Event title"
                  className="w-full rounded-md text-xs input"
                  required
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label>Thumbnail Image URL</label>
                <input
                  type="url"
                  name="photo"
                  defaultValue={photo}
                  placeholder="Thumbnail URL"
                  className="w-full rounded-md text-xs input"
                  required
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label>Location</label>
                <input
                  type="text"
                  name="location"
                  defaultValue={location}
                  placeholder="Location"
                  className="w-full rounded-md text-xs input"
                  required
                />
              </div>
              <div className="col-span-full">
                <label>Description</label>
                <textarea
                  type="text"
                  name="description"
                  defaultValue={description}
                  placeholder="Description"
                  className="w-full rounded-md text-xs input h-20 pt-2"
                  required
                />
              </div>

              <div className="col-span-full sm:col-span-2">
                <label>Author Email</label>
                <input
                  type="email"
                  placeholder="Author Email"
                  name="email"
                  value={user ? user.email : ""}
                  readOnly
                  className="w-full rounded-md text-xs input"
                />
              </div>

              <div className="col-span-full sm:col-span-2">
                <label className="block">Event Type</label>
                <select
                  id="eventType"
                  name="eventType"
                  className="select select-bordered w-full text-sm"
                  required
                  defaultValue={eventType}
                >
                  <option disabled value="">
                    Select an event type
                  </option>
                  <option value="Road Cleaning">Road Cleaning</option>
                  <option value="Tree Planting">Tree Planting</option>
                  <option value="Educational Workshop">
                    Educational Workshop
                  </option>
                  <option value="Donation Drive">Donation Drive</option>
                </select>
              </div>

              <div className="col-span-full sm:col-span-2">
                <label className="block">Event Date</label>
                <div className="w-full">
                  <DatePicker
                    id="eventDate"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    minDate={today}
                    placeholderText="Select a future date"
                    className="w-full input text-xs "
                  />
                </div>
              </div>

              <div className="col-span-full">
                <input
                  type="submit"
                  value="Update Event"
                  className="btn w-full bg-orange-500 text-black"
                />
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default UpdateEvent;
