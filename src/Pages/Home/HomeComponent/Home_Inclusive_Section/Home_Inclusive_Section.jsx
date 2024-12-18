import img from "../../../../../src/assets//HomeImg/homeimg1.webp";
import SecoundaryTitle from "../../../../Components/SecoundaryTitle/SecoundaryTitle";

const Home_Inclusive_Section = () => {
  return (
    <div className="container mx-auto px-5 md:px-10">
      <div className="grid lg:grid-cols-9 items-start gap-10 md:gap-16 py-10 md:py-20">
        {/* Text Section */}
        <div className="lg:col-span-4">
          <SecoundaryTitle head_title={"COMMITMENT TO EXCELLENCE"} />
          <p className="text-black font-inter text-start  text-sm md:text-base xl:text-lg 2xl:text-3xl font-normal leading-[1.64] tracking-[0.85px] mt-5 2xl:max-w-xl">
            At PHD, we are committed to transforming each holiday into a
            memorable experience, prioritizing our clients' comfort, enjoyment,
            and peace of mind from start to finish. When you travel with Prime
            Holiday Destinations, you're not just exploring a new place, you're
            embarking on a journey crafted with passion, experience, and a
            commitment to excellence.
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:col-span-5">
          <img
            src={img}
            alt="Commitment to Excellence"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto shadow-lg "
          />
        </div>
      </div>
    </div>
  );
};

export default Home_Inclusive_Section;
