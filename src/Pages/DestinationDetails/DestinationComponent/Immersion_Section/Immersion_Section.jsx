
import img from "../../../../../public/homeimg1.webp";
const Immersion_Section = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-8">
            <div className="">
              <div>
                <div className="bg-green">
                  <p className="text-white text-2xl font-bold px-5 py-1">
                    Immersion in Cultural Oman - 8 Nights – 9 Days{' '}
                  </p>
                </div>
                <div className="p-5 flex flex-col space-y-4 max-w-4xl">
  <h1 className="text-xl text-black font-semibold leading-">From $2525/person in sharing twin/double room</h1>
  <p className="leading-10 text-gray-800">
    Immersion in Cultural Oman itinerary is the deep cultural immersion combined with exclusive and
    authentic Omani experiences that offer a rare glimpse into the traditional life and heritage of Oman.
  </p>

  <strong className="text-green text-lg">Highlights:</strong>
  <ul className="list-disc list-inside space-y-5">
    <li>
      <strong className="text-black ">Exclusive Cultural Encounters:</strong> From visiting the Sidab Women's Group to learning
      about traditional Omani handicrafts and enjoying a meal at a local's home, your clients will engage in
      authentic interactions with local communities that most tourists don't get to experience.
    </li>
    <li>
      <strong className="text-black ">Spectacular Landscapes and Off-Road Adventures:</strong> The journey through Wadi Bani Auf,
     <span className="text-primary"> ...Read more.</span>
    </li>
  </ul>
</div>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="">
              <img src={img} alt=""  className='h-[506px] w-full'/>{' '}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Immersion_Section;
