import React from "react";
import MainHeading from "../MainHeading/MainHeading"; // Assuming this is your heading component

const SectionHeader = ({ backgroundImage, title, sub_title, height }) => {
  return (
    <header
      className={`relative flex items-center justify-center bg-cover bg-center z-0`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: height || "100vh", 
      }}
    >
      <div className="container mx-auto h-full flex flex-col items-center justify-center">
        <MainHeading head_title={title} sub_title={sub_title}  />
      </div>
    </header>
  );
};

export default SectionHeader;
