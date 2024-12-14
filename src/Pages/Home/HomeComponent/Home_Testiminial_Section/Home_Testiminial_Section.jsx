import img from "/HomeImg/homeimg1.webp";
import SecoundaryTitle from "../../../../Components/SecoundaryTitle/SecoundaryTitle";

const Home_Testiminial_Section = () => {
  return (
    <section className="py-10 md:py-20 bg-ivory-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-9 gap-8 md:gap-16 items-center">
          {/* Image Section */}
          <div className="md:col-span-5 flex justify-center">
            <img
              src={img}
              alt="Testimonial"
              className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto shadow-lg rounded-lg"
            />
          </div>

          {/* Text Section */}
          <div className="md:col-span-4 flex justify-center items-center">
            <div>
              <SecoundaryTitle head_title={"TESTIMONIALS OF SATISFACTION"} />
              <p className="text-black font-inter text-sm md:text-base xl:text-lg 2xl:text-4xl font-normal leading-tight tracking-wide mt-5 2xl:max-w-xl">
                The best measure to our services comes from our customers. Keep
                an eye out as our travelers share their stories. We'll be
                sharing feedback from our travelers here shortly, so you can
                see what makes PHD unique.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home_Testiminial_Section;
