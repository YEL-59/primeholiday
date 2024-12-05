
import bgImage from '../../../../../public/Ytrees.png'; 
const AboutUs_Home_Section = () => {
  return (
      <>
      
      <header
        className="relative flex items-center justify-center h-[60vh]  bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div
          className="relative z-30 p-5 text-6xl font-semibold text-[#F49D2A]  rounded-xl"
        >
         About US
        </div>
      </header>
      </>
  )
}

export default AboutUs_Home_Section