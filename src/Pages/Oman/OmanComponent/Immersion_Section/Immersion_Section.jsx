
import img from '../../../../../public/image 80.png';
const Immersion_Section = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-8">
            <div className="">
              <div>
                <div className="bg-green-800">
                  <p className="text-white text-2xl font-bold px-5 py-1">
                    Immersion in Cultural Oman - 8 Nights – 9 Days{' '}
                  </p>
                </div>
                <div className='leading-10'>
                    <h1>From $2525/person in sharing twin/double room
                    </h1>
                    <p>Immersion in Cultural Oman itinerary is the deep cultural immersion combined with exclusive and authentic Omani experiences that offer a rare glimpse into the traditional life and heritage of Oman.</p>

                    <strong>Highlights:</strong>
                    <p>  <strong>Exclusive Cultural Encounters:</strong> From visiting the Sidab Women's Group to learning about traditional Omani handicrafts and enjoying a meal at a local's home, your clients will engage in authentic interactions with local communities that most tourists don't get to experience</p>
                    <p>  <strong>
                    Spectacular Landscapes and Off-Road Adventures: </strong>The journey through Wadi Bani Auf, ...Read more</p>

                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="">
              <img src={img} alt=""  className='h-96'/>{' '}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Immersion_Section;
