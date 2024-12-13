import { useEffect, useRef } from "react";

import "../../../../../src/App.css";

import homeBannerVideo from '../../../../assets/video/homebgvideo.mp4'
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
      <header className="relative flex items-center justify-center h-[50vh] md:h-[70vh] lg:h-[85vh] xl:h-[100vh]  overflow-hidden">
        {/* Overlay Text */}
        <div className="container mx-auto relative z-30 p-5 text-white  bg-opacity-50 rounded-xl mt-10 md:mt-0">
          <div>
            <h1 className="text-primary text-center font-salvager sm:text-[40px] md:text-[50px] lg:text-[70px] xl:text-[70px] 2xl:text-[96px] font-bold md:font-normal leading-[1.24] tracking-wide md:tracking-[-1.92px]">
            Your All-Inclusive Journey Starts Here
            </h1>

            <p className="text-ivory-white text-center font-montserrat text-[18px] md:text-[25px] lg:text-[30px] xl:text-[38px] 2xl:text-[44px] font-bold leading-[40px]  2xl:leading-[1] tracking-[-1.28px] max-w-xl xl:max-w-4xl mx-auto mt-5 mb-5">
              <span className="text-[20px] md:text-[64px] font-bold">&ldquo;</span>
              The Essence of a Holiday is to Enrich Our Lives and Create Lasting Memories
              <span className="text-[20px] md:text-[64px] font-bold">&rdquo;</span>
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
            src={homeBannerVideo}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </header>
    </div>
  );
};

export default Home_Main_Section;
