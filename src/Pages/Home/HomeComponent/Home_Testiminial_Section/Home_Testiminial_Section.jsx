import img from "/HomeImg/homeimg1.webp";
import SecoundaryTitle from "../../../../Components/SecoundaryTitle/SecoundaryTitle";

const Home_Testiminial_Section = () => {
  return (
    <section className="py-10 md:py-20 bg-ivory-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-9 gap-8 md:gap-16 items-center p-5">
          {/* Image Section */}
          <div className="col-span-5 flex justify-center">
            <img
              src={img}
              alt="Testimonial"
              className="w-full h-auto max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl  shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="col-span-4 flex justify-center items-center">
            <div>
              <SecoundaryTitle head_title={"TESTIMONIALS OF SATISFACTION"} />
              <p className="text-black font-inter text-[16px] sm:text-[18px] md:text-[20px] lg:text-[25px] xl:text-[32px] font-normal leading-relaxed mt-5">
                The best measure to our services comes from our customers. Keep
                an eye out as our travellers share their stories. We'll be
                sharing feedback from our travellers here shortly, so you can
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
