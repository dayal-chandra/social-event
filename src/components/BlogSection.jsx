import React from "react";

const BlogSection = () => {
  const blogs = [
    {
      title: "5 Ways to Connect with Your Community",
      excerpt:
        "Looking to meet new people? Here are five simple ways to get involved in neighborhood events and grow your network.",
      author: "Emily Carter",
      date: "July 1, 2025",
    },
    {
      title: "Why Local Events Matter More Than Ever",
      excerpt:
        "Discover how attending local events strengthens community bonds and supports mental well-being.",
      author: "Michael Green",
      date: "June 24, 2025",
    },
    {
      title: "Hosting Your First Event with Neighborly",
      excerpt:
        "Thinking about organizing a meetup? Here’s a step-by-step guide to planning your first successful Neighborly event.",
      author: "Sophie Walker",
      date: "June 15, 2025",
    },
  ];

  return (
    <section className=" py-16">
      <div className="max-w-[1280px] mx-auto px-5">
        <h2 className="text-3xl font-bold text-center mb-8">
          Latest from Our Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow  transition hover:scale-105 hover:shadow-[0_0_15px_#F97316]"
            >
              <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
              <p className=" mb-4">{blog.excerpt}</p>
              <div className="text-sm">
                By <span className="font-medium">{blog.author}</span> |{" "}
                {blog.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
