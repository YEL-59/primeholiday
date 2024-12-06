
import bgImage from '../../../../../public/Ytrees.png';
import Navbar from '../../../../Components/Navbar/Navbar';
const AboutUs_Home_Section = () => {
  return (
      <>

      <header
        className="relative flex items-center justify-center h-[100vh]  bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <Navbar/>
        <div
          className="relative z-30 p-5 text-8xl font-semibold font-salvager   text-[#F49D2A]   text-center"
        >
         About US
        </div>
      </header>
      </>
  )
}

export default AboutUs_Home_Section