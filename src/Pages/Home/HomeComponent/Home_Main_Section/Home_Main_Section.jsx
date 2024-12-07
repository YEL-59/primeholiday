import React, { useEffect, useRef } from 'react';
import Navbar from '../../../../Components/Navbar/Navbar';

const Home_Main_Section = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const ensureVideoPlays = () => {
      if (videoRef.current && videoRef.current.paused) {
        videoRef.current.play().catch((error) => {
          console.error('Video playback interrupted:', error);
        });
      }
    };

    // Ensure video is always playing
    ensureVideoPlays();

    // Re-check video playback status periodically
    const interval = setInterval(ensureVideoPlays, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="relative">
      {/* Navbar */}
      <Navbar />

      <header className="relative flex items-center justify-center h-[90vh]  overflow-hidden">
        {/* Overlay Text */}
        <div className="relative z-30 p-5 text-2xl text-white  bg-opacity-50 rounded-xl">
          <div>
            <h1 className="text-5xl font-bold text-[#F49D2A]">Your All-Inclusive Journey Starts Here</h1>
            <p className="max-w-lg text-center font-bold mx-auto mt-5 mb-5">
              The Essence of a Holiday is to Enrich our lives and create lasting memories
            </p>
          </div>
        </div>

        {/* Background Video */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover z-10"
        >
          <source
            src="../../../../../public//1820193-uhd_3840_2160_30fps (2).mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </header>
    </div>
  );
};

export default Home_Main_Section;
