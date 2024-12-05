import React, { useEffect, useRef } from 'react';
import Navbar from '../../../../Components/Navbar/Navbar';


const Home_Main_Section = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const ensureVideoPlays = () => {
      if (videoRef.current && videoRef.current.paused) {
        videoRef.current.play().catch((error) => {
          console.error("Video playback interrupted:", error);
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
    <div>
      <header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
        {/* Navbar */}
        <Navbar />
        
        {/* Overlay Text */}
        <div className="relative z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
                  <div>
                      <h1 className='text-5xl font-bold'>Your All-Inclusive Journey Starts Here</h1>
                      <p className='max-w-lg text-center mx-auto mt-5 mb-5'>The Essence of a Holiday is to Enrich our lives and create lasting menories</p>
         </div>
        </div>
        
        {/* Background Video */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
          <source
            src="https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </header>
    </div>
  );
};

export default Home_Main_Section;
