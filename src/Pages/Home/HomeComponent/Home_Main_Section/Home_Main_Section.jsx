import { useEffect, useRef } from "react";

import "../../../../../src/App.css";
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
    <div className="relative">
      <header className="relative flex items-center justify-center h-[100vh]  overflow-hidden">
        {/* Overlay Text */}
        <div className="relative z-30 p-5 text-white  bg-opacity-50 rounded-xl">
          <div>
            <h1 className="text-primary text-center font-salvager text-[5px] xl:text-[96px] font-normal leading-[1.24] tracking-[-1.92px]">
              Your All-Inclusive Journey Starts Here
            </h1>

            <p className="text-ivory-white text-center font-montserrat text-[44px] font-bold leading-[1] tracking-[-1.28px] max-w-4xl mx-auto mt-5 mb-5">
              <span className="text-[64px] font-bold">&ldquo;</span>
              The Essence of a Holiday is to Enrich our lives and create lasting
              memories
              <span className="text-[64px] font-bold">&rdquo;</span>
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
            src="../../../../../public/1820193-uhd_3840_2160_30fps (2).mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </header>
    </div>
  );
};

export default Home_Main_Section;
