



import bgImage from '../../../../../public/Oman.png';

const OmanHome_Section = () => {
  return (
    <>
      <header
        className="relative flex items-center justify-center h-[70vh]  bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div
          className="relative z-30 p-5 text-6xl font-semibold text-[#F49D2A] text-center  rounded-xl"
        >
        Oman
        <p className='text-4xl text-white'>Beauty Has an Address</p>



        <p className=' max-w-xl p-3 bg-gray-600 text-white text-sm opacity-80 mt-20  rounded-md '>Discover the enchanting Beauty of Oman, a destination where ancient heritage meets stunning natural landscapes. Known for its warm hospitality and rich cultural tapestry, Oman offers travelers a unique blend of experiences.
        </p>
        </div>
      </header>
    </>
  );
};

export default OmanHome_Section
