import React from "react";

const Gallery = () => {
  const images = [
    { id: 1, src: "/img1.jpg", alt: "Tree Plantation Event" },
    { id: 2, src: "/img2.jpg", alt: "Children Education Program" },
    { id: 3, src: "/img3.jpg", alt: "Road Cleaning Drive" },
    { id: 4, src: "/img4.jpg", alt: "Food Distribution" },
    { id: 5, src: "/img5.jpg", alt: "Beach Cleanup" },
    { id: 6, src: "/img6.jpg", alt: "Community Health Camp" },
  ];

  return (
    <section className="px-4 py-10 bg-base-100" id="gallery">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Event Gallery</h2>
        <p className="mb-10">
          A glimpse into our recent social service activities.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
