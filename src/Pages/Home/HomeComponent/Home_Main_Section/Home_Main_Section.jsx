import { useEffect, useRef } from "react";
import "../../../../../src/App.css";
import homeBannerVideo from "../../../../assets/video/homebgvideo.mp4";
import AppostiIcon from "../../../../assets/Icons/AppostiIcon";

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
      <header className="relative flex items-center justify-center h-[55vh] md:h-[70vh] lg:h-[85vh] xl:h-[100vh] overflow-hidden">
        {/* Overlay Text */}
        <div className="container mx-auto relative z-30 p-5 text-white bg-opacity-50 rounded-xl mt-10">
          <div>
            {/* Title */}
            <h1 className="text-primary text-center font-salvager text-[24px] sm:text-[26px] md:text-[50px] lg:text-[70px] xl:text-[70px] 2xl:text-[96px] font-bold md:font-normal leading-[1.24] tracking-wide md:tracking-[-1.92px]">
              Your All-Inclusive Journey Starts Here
            </h1>

            {/* Subtitle */}
            <p className="relative custom-p text-ivory-white text-center font-montserrat font-bold leading-[1.2] tracking-[-1px] mx-auto mb-5 px-4 sm:px-0"
              style={{ maxWidth: "52rem" }}
            >
              {/* SVG Icon */}
              <span className="flex justify-start items-center mb-2 ">
                <AppostiIcon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
              </span>

              {/* Subtitle Text */}
              <span className="block text-[clamp(16px,4vw,18px)] sm:text-[20px] md:text-[25px] lg:text-[30px] xl:text-[38px] 2xl:text-[44px]">
                The Essence of a Holiday is to Enrich
              </span>
              <span className="block text-[clamp(16px,4vw,18px)] sm:text-[20px] md:text-[25px] lg:text-[30px] xl:text-[38px] 2xl:text-[44px]">
                Our Lives and Create Lasting Memories.
              </span>
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
          <source src={homeBannerVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </header>
    </div>
  );
};

export default Home_Main_Section;
