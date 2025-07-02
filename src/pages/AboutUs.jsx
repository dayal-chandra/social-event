import React, { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    document.title = "Neighborly | About Us";
  }, []);

  return (
    <div className="max-w-[1280px] mx-auto px-5 py-16">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-orange-500 mb-8">
        About Neighborly
      </h1>

      {/* Intro Section */}
      <div className="text-center max-w-[800px] mx-auto mb-12">
        <p className="text-lg mb-4">
          At <span className="font-bold text-orange-500">Neighborly</span>, we
          believe in building stronger communities through real-life
          connections. Our platform helps you discover, create, and join social
          events happening right in your neighborhood.
        </p>
        <p>
          Whether it's a community meetup, workshop, or casual get-together —
          Neighborly makes it easy to stay connected with the people around you.
        </p>
      </div>

      {/* Mission, Vision, Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="border p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-bold text-orange-500 mb-4">
            Our Mission
          </h2>
          <p>
            To empower neighbors to connect, collaborate, and create lasting
            social bonds through local events.
          </p>
        </div>

        <div className="border p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-bold text-orange-500 mb-4">
            Our Vision
          </h2>
          <p>
            A world where every neighborhood feels like home — welcoming,
            vibrant, and socially connected.
          </p>
        </div>

        <div className="border p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-bold text-orange-500 mb-4">
            Our Values
          </h2>
          <p>
            Inclusivity, community, and meaningful connections. We believe
            everyone deserves to feel part of something local.
          </p>
        </div>
      </div>

      {/* Team Section - Optional */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-8">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-4">
            <img
              src="https://i.ibb.co/JNrqvmG/8221d27d-78f4-458f-b1f6-b58e24f0303e.webp"
              alt="Founder"
              className="mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">Alex Johnson</h3>
            <p className="text-gray-500">Founder & CEO</p>
          </div>

          <div className="p-4">
            <img
              src="https://i.ibb.co/hxF8pK5x/307c7754-f11e-4012-837c-c319b2412ee7.webp"
              alt="Developer"
              className="mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">Samantha Lee</h3>
            <p className="text-gray-500">Lead Developer</p>
          </div>

          <div className="p-4">
            <img
              src="https://i.ibb.co/cfWcfv6/a452db3f-6933-4628-a1b5-6db1cb873fbf.webp"
              alt="Community Manager"
              className="mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">David Kim</h3>
            <p className="text-gray-500">Community Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
