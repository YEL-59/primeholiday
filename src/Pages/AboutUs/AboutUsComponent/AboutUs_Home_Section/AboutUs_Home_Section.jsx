import bgImage from "../../../../../public/Ytrees.png";
import MainHeading from "../../../../Components/MainHeading/MainHeading";

import Navbar from "../../../../Components/Navbar/Navbar";
const AboutUs_Home_Section = () => {
  return (
    <>
      <header
         className="relative flex items-center justify-center h-[100vh] bg-cover bg-center z-0"
         style={{
           backgroundImage: `url(${bgImage})`,
           backgroundSize: 'cover', // Ensure it covers the area
           backgroundPosition: 'center center', // Align the image in the center
          //  backgroundAttachment: 'fixed', 
         }}
      >
        <Navbar />
        <div>
          <MainHeading head_title={"About Us"}/>
        </div>
      </header>
    </>
  );
};

export default AboutUs_Home_Section;
