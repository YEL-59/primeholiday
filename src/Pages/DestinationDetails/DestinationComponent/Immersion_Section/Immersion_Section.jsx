import img from "../../../../../src/assets/HomeImg/homeimg1.webp";

const Immersion_Section = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Left Column */}
          <div className="lg:col-span-1">
            <div className="">
              <div>
                <div className="bg-green">
                  <p className="text-white text-lg md:text-lg   font-bold px-5 py-2">
                    Immersion in Cultural Oman - 8 Nights – 9 Days{" "}
                  </p>
                </div>
                <div className="p-5 flex flex-col space-y-4 max-w-4xl">
                  <h1 className="text-lg md:text-xl text-black font-semibold leading-6">
                    From $2525/person in sharing twin/double room
                  </h1>
                  <p className="leading-6  text-black">
                    Immersion in Cultural Oman itinerary is the deep cultural
                    immersion combined with exclusive and authentic Omani
                    experiences that offer a rare glimpse into the traditional
                    life and heritage of Oman.
                  </p>

                  <strong className="text-green text-lg">Highlights:</strong>
                  <ul className="list-disc list-inside space-y-5">
                    <li>
                      <strong className="text-black">
                        Exclusive Cultural Encounters:
                      </strong>{" "}
                      From visiting the Sidab
                      <p>
                        {" "}
                        Women's Group to learning about traditional Omani
                        handicrafts and enjoying a meal at a local's home, your
                        clients will engage in authentic interactions with local
                        communities that most tourists don't get to experience.
                      </p>
                    </li>
                    <li>
                      <strong className="text-black">
                        Spectacular Landscapes and Off-Road Adventures:
                      </strong>{" "}
                      The journey through Wadi Bani Auf,{" "}
                      <span className="text-primary">...Read more.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column with Image */}
          <div className="lg:col-span-1">
            <div className="">
              <img
                src={img}
                alt="Cultural Oman"
                className="w-full h-[300px] md:h-[506px]  object-cover aspect-[16/9] md:aspect-[4/3] lg:aspect-[3/3] "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Immersion_Section;
