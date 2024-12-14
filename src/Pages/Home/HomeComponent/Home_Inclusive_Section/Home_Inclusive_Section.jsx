import img from "/HomeImg/homeimg1.webp";
import SecoundaryTitle from "../../../../Components/SecoundaryTitle/SecoundaryTitle";

const Home_Inclusive_Section = () => {
  return (
    <div className="container mx-auto px-5 md:px-10">
      <div className="grid lg:grid-cols-9 items-center gap-10 md:gap-16 py-10 md:py-20">
        {/* Text Section */}
        <div className="lg:col-span-4">
          <SecoundaryTitle head_title={"COMMITMENT TO EXCELLENCE"} />
          <p className="text-black font-inter text-sm md:text-base xl:text-lg 2xl:text-3xl font-normal leading-tight tracking-wide mt-5 2xl:max-w-xl">
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
            className="w-full h-auto max-h-[500px] md:max-h-[600px] lg:max-h-[700px] object-cover rounded-md shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home_Inclusive_Section;
