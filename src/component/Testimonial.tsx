import React, { useState } from "react";

const Testimonial: React.FC = () => {
  // Array of YouTube videos with captions
  const videos = [
    { id: 1, src: "https://www.youtube.com/embed/N-PI1VquHDs", caption: "Jada M." },
    { id: 2, src: "https://www.youtube.com/embed/yNbyUd2alyA", caption: "Alex T." },
    { id: 3, src: "https://www.youtube.com/embed/J3mfInWmHFw", caption: "Taylor A." },
    { id: 3, src: "https://www.youtube.com/embed/J3mfInWmHFw", caption: "Taylor A." },

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Handlers for navigation buttons
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };


  return (
    <div className="bg-black text-white py-16 px-4 md:px-12 relative">
      {/* Header Section */}
      <div className="text-center">
        <span className="text-[#0AAE55] uppercase tracking-wide text-sm">
          Reviews
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold mt-2">
          Can't script these stories...
        </h2>
        <p className="text-gray-400 mt-2">
          Hear directly from a few community members.
        </p>
      </div>

      {/* Video Slider */}
      <div className="mt-12 flex items-center justify-center relative overflow-hidden h-[300px] md:h-[400px]">

        {/* Video Display */}
        <div className="relative w-full h-full flex items-center justify-center">
          {videos.map((video, index) => {
            const isActive = index === currentIndex;
            const isLeft =
              index === (currentIndex === 0 ? videos.length - 1 : currentIndex - 1);
            const isRight =
              index === (currentIndex === videos.length - 1 ? 0 : currentIndex + 1);

            return (
              <div
                key={video.id}
                className={`absolute w-3/5 md:w-2/5 aspect-video bg-black border-4 border-[#0AAE55] rounded-xl overflow-hidden transition-all duration-700 ease-in-out ${
                  isActive
                    ? "opacity-100 scale-100 z-20"
                    : isLeft || isRight
                    ? "opacity-50 scale-90 blur-sm z-10"
                    : "opacity-0 scale-75 z-0"
                }`}
                style={{
                  transform: `translateX(${
                    isLeft ? "-120%" : isRight ? "120%" : "0"
                  })`,
                }}
              >
                <iframe
                  className="w-full h-full"
                  src={video.src}
                  title={`Testimonial ${video.caption}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            );
          })}
        </div>

        {/* Right Button */}
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-transparent border border-[#0AAE55] text-[#0AAE55] rounded-full p-3 z-10 shadow-lg"
          aria-label="Next Slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Caption */}
      <div className="text-center mt-4">
        <p className="text-lg font-medium">{videos[currentIndex].caption}</p>
      </div>
    </div>
  );
};

export default Testimonial;