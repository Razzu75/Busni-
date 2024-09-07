import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const YoutubeCarousel = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    "_Ny8xilM3bU",
    "kJQP7kiw5Fk",
    "3JZ_D3ELwOQ",
    "V-_O7nl0Ii0",
    "tAGnKpE4NCI",
    "2Vv-BfVoq4g",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: "unslick", // Turn off slick carousel for mobile
      },
    ],
  };

  const handleThumbnailClick = (video) => {
    setActiveVideo(video);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        {activeVideo && (
          <div className="mb-4 w-full aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-60 rounded-lg"
              src={`https://www.youtube.com/embed/${activeVideo}`}
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
        <div className="hidden md:block">
          <Slider {...settings}>
            {videos.map((video, index) => (
              <div key={index} className="p-2">
                <div
                  className="aspect-w-1 aspect-h-1 cursor-pointer bg-gray-200 rounded-lg overflow-hidden"
                  onClick={() => handleThumbnailClick(video)}
                >
                  <iframe
                    className="w-full h-60"
                    src={`https://www.youtube.com/embed/${video}`}
                    title={`YouTube video ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="block md:hidden">
          <div className="flex overflow-x-scroll gap-4">
            {videos.map((video, index) => (
              <div
                key={index}
                className="min-w-64 aspect-w-1 aspect-h-1 cursor-pointer bg-gray-200 rounded-lg overflow-hidden flex-shrink-0"
                onClick={() => handleThumbnailClick(video)}
              >
                <iframe
                  className="w-full h-60"
                  src={`https://www.youtube.com/embed/${video}`}
                  title={`YouTube video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeCarousel;
