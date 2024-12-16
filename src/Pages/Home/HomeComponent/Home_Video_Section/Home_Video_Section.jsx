import { useState } from "react";
import videoThumbnail from "../../../../../src/assets/homevideo.png";
import homevideo from "../../../../../src/assets/HomeImg/homevideo.mp4";

const Home_Video_Section = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useState(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${videoThumbnail})`,
      }}
    >
      {/* Video Container */}
      <div className="relative w-[82%] h-[78%]  shadow-lg rounded-lg overflow-hidden ">
        {/* Video Element */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src={homevideo}
          preload="metadata"
          onClick={isPlaying ? handlePause : handlePlay}
        ></video>

        {/* Play Button */}
        {!isPlaying && (
          <div
            className="absolute inset-0 flex items-center justify-center  cursor-pointer"
            onClick={handlePlay}
          >
            <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-5.197-3.74A1 1 0 008 8.306v7.388a1 1 0 001.555.832l5.197-3.74a1 1 0 000-1.664z"
                />
              </svg>
            </button>
          </div>
        )}

        {/* Hover Play/Pause Buttons */}
        {isPlaying && (
          <div
            className="absolute inset-0 flex items-center justify-center cursor-pointer opacity-0 hover:opacity-50 bg-black bg-opacity-50"
            onClick={handlePause}
          >
            <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 9v6m4-6v6"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home_Video_Section;
