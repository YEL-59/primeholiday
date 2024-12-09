



import bgImage from '../../../../../public/DestinationImg/destinationimg5.webp'
import SectionHeader from '../../../../Components/SectionHeader/SectionHeader';


const DestinationHome_Section = () => {
  return (
    <>
      <header
        className="relative flex items-center justify-center h-[100vh]  bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
      
        <div
          className="relative z-30 p-5 text-6xl font-semibold  text-primary text-center  rounded-xl"
        >
      <h1 className='text-[96px] font-salvager '>Oman</h1>
        <p className='text-4xl text-white'>Beauty Has an Address</p>



        <p className=' max-w-6xl leading-10 p-5 bg-gray-600 text-white text-[26px] opacity-80 mt-20  rounded-md '>Discover the enchanting Beauty of Oman, a destination where ancient heritage meets stunning natural landscapes. Known for its warm hospitality and rich cultural tapestry, Oman offers travelers a unique blend of experiences.
        </p>
        </div>
      </header>


 
    </>
  );
};

export default DestinationHome_Section
