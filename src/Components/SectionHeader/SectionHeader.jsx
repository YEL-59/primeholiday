
import MainHeading from "../MainHeading/MainHeading"; // Assuming this is your heading component

const SectionHeader = ({ backgroundImage, title, sub_title, height }) => {
  return (
    <header
      className={`relative flex items-center justify-center bg-cover bg-center z-0  `}
      style={{
        background: `linear-gradient(0deg, rgba(1, 1, 1, 0.35) 0%, rgba(1, 1, 1, 0.35) 100%), url(${backgroundImage}) lightgray 0px -638px / 100% 236.453% no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: height || "100vh", 
      }}
    >
        {/* <div className="absolute inset-0 bg-black opacity-40 z-0"></div> */}
      <div className="container mx-auto h-full flex flex-col items-center justify-center text-ivory-white z-10">
        <MainHeading head_title={title} sub_title={sub_title}  />
      </div>
    </header>
  );
};

export default SectionHeader;
