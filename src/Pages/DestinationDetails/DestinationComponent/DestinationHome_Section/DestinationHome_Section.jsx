import { useLocation, useParams } from 'react-router-dom';
import bgImage from '../../../../../public/DestinationImg/Omanbg.png';

const DestinationHome_Section = () => {
  const { destinationName } = useParams();
  const location = useLocation();
  const { imgSrc,description } = location.state || {};

  return (
    <>
       <header
        className="relative flex items-center justify-center h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${imgSrc || bgImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gray-800 opacity-30 backdrop-blur-lg"></div>
        <div className="relative z-30 flex flex-col justify-around items-center w-full h-full">
          {/* Top Content */}
          <div className="p-5 text-center mt-40">
            <h1 className="text-5xl  md:text-5xl lg:text-[96px] font-salvager text-primary ">
              {destinationName}
            </h1>
            <p className="text-xl  md:text-xl xl:text-6xl text-ivory-white mt-14 ">
            {description || "Beauty Has an Address"}
            </p>
          </div>

          {/* Bottom Content */}
          <div className="w-full flex justify-center  p-4">
            <p className="max-w-lg sm:max-w-2xl md:max-w-5xl leading-6 sm:leading-8 lg:leading-10 p-5 bg-gray-700 text-ivory-white font-medium text-sm sm:text-lg md:text-xl lg:text-[26px] opacity-80 rounded-md z-10">
              Discover the enchanting beauty of Oman, a destination where ancient heritage meets stunning natural landscapes. Known for its warm hospitality and rich cultural tapestry, Oman offers travelers a unique blend of experiences.
            </p>
          </div>
        </div>
      </header>
    </>
  );
};

export default DestinationHome_Section;
