import img from "/HomeImg/homeimg1.webp";
import SecoundaryTitle from "../../../../Components/SecoundaryTitle/SecoundaryTitle";

const Home_Testiminial_Section = () => {
  return (
    <>
      <div>
        <div className="container mx-auto">
          <div className="lg:w-3/3 mx-auto grid md:grid-cols-9 gap-16 my-10 md:my-20 p-1">
            <div className="md:col-span-5">
              <img src={img} alt="" className="h-[809px] w-[834px] " />
            </div>
            <div className="md:col-span-4 flex justify-center items-center">
              <div>
                <SecoundaryTitle head_title={"TESTIMONIALS OF SATISFACTION"} />
                <p className="text-black font-inter text-[32px] font-normal leading-[1.64] tracking-[0.85px] mt-16 max-w-xl">
                  The best measure to our services comes from our customers.
                  Keep an eye out as our travellers share their stories. We'll
                  be sharing feedback from our travellers here shortly, so you
                  can see what makes PHD unique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home_Testiminial_Section;
