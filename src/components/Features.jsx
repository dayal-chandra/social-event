import React from "react";

const Features = () => {
  return (
    <div className=" md:py-16">
      <section className="py-12 bg-base-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-base-100 rounded-lg border shadow">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-semibold mb-2">Create Events</h3>
              <p>Easily create and organize events for your local community.</p>
            </div>
            <div className="p-6 bg-base-100 rounded-lg border shadow">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-2">Join Events</h3>
              <p>Explore and join events to make a difference together.</p>
            </div>
            <div className="p-6 bg-base-100 rounded-lg border shadow">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-semibold mb-2">Local Discovery</h3>
              <p>Find events happening near you based on your location.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
