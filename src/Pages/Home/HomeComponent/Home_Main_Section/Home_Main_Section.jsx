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
            <h1 className="text-primary text-center font-salvager text-3xl sm:text-4xl md:text-[50px] lg:text-[70px] xl:text-[70px] 2xl:text-[96px] font-bold md:font-normal leading-[1.24] tracking-wide md:tracking-[-1.92px]">
              Your All-Inclusive Journey Starts Here
            </h1>

            {/* Subtitle */}
            <div className="relative  text-ivory-white text-center font-montserrat text-[15px] sm:text-[18px] md:text-[25px] lg:text-[30px] xl:text-[38px] 2xl:text-[44px] font-bold leading-[30px] md:leading-[50px] 2xl:leading-[60px] tracking-[-1.28px] max-w-[28rem] lg:max-w-xl xl:max-w-[45rem] 2xl:max-w-[52rem] mx-auto mt-6 sm:mt-8 md:mt-16 lg:mt-20">

              <p className=" flex gap-2 lg:gap-5 items-start justify-center text-center ">  <AppostiIcon /> The Essence of a Holiday is to Enrich</p>
              <p className="text-center">Our Lives and Create Lasting Memories.</p>

            </div>




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
