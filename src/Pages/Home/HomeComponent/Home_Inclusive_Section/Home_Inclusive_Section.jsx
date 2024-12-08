
import img from "/homeimg2.webp";
import SecoundaryTitle from "../../../../Components/SecoundaryTitle/SecoundaryTitle";

const Home_Inclusive_Section = () => {
  return (
    <>
      {" "}
      <div>
        <div className="container mx-auto">
          <div className="lg:w-3/3 mx-auto grid md:grid-cols-9 gap-16 my-10 md:my-20 p-1">
            <div className="md:col-span-4">
              <div>
                <SecoundaryTitle head_title={"COMMITMENT TO EXCELLENCE"} />
                <p className="text-[#191A19] font-inter text-[32px] font-normal leading-[1.64] tracking-[0.85px] mt-5 max-w-xl">
                  At PHD, we are committed to transforming each holiday into a
                  memorable experience, prioritizing our clients' comfort,
                  enjoyment, and peace of mind from start to finish. When you
                  travel with prime Holiday Destinations, you're not just
                  exploring a new place, you're embarking on a journey crafted
                  with passion, experience, and a commitment to excellence.
                </p>
              </div>
            </div>
            <div className="md:col-span-5">
              <img
                src={img}
                alt=""
                className="h-[809px] w-[839px] rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home_Inclusive_Section;
