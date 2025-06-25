import React from "react";

const NewsLetter = () => {
  return (
    <div className="md:py-30">
      <section className="bg-base-100 py-16 px-4" id="newsletter">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Subscribe to our Newsletter
          </h2>
          <p className=" mb-8">
            Stay updated with our latest events, activities, and community news.
          </p>

          <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-2/3 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="submit"
              className="bg-orange-500 text-black px-6 py-3 rounded-lg hover:bg-white border border-orange-500 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default NewsLetter;
