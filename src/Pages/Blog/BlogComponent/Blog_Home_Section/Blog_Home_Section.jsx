import bgImage from "../../../../../src/assets/BlogImg/blogbg.webp";
import SectionHeader from "../../../../Components/SectionHeader/SectionHeader";

const Blog_Home_Section = () => {
  return (
    <>
      <div className=" ">
        {/* <SectionHeader
          backgroundImage={bgImage}
          title={"Explore Our Blogs"}
          sub_title={"Expert Holiday Tips and Guides"}
          
        /> */}
         <header
      className={`relative flex items-center justify-center bg-cover bg-center z-0 h-[55vh] sm:h-[60vh] md:h-[70vh]   `}
      style={{
        background: `linear-gradient(0deg, rgba(1, 1, 1, 0.35) 0%, rgba(1, 1, 1, 0.35) 100%), url(${bgImage}) lightgray 0px -638px / 100% 236.453% no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
       
      }}
    >
        {/* <div className="absolute inset-0 bg-black opacity-40 z-0"></div> */}
      <div className="container mx-auto h-full flex flex-col items-center justify-center text-ivory-white z-10">
      <div>
              <h1 className='text-primary text-center font-salvager text-[40px] md:text-[50px] xl:text-[85px] 2x:text-[96px] font-normal mt-24'> Explore Our Blogs</h1>

              <p className='text-text-primary text-center font-montserrat text-[15px] md:text-[20px] xl:text-[35px] font-bold leading-[1] md:tracking-[-1.28px] max-w-4xl mx-auto mt-5 '>Expert Holiday Tips and Guides</p>
          </div>
      </div>
    </header>
      </div>
    </>
  );
};

export default Blog_Home_Section;
