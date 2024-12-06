import React from "react";
import img1 from "../../../../../public/Frame 775.png";
import img2 from "../../../../../public/Frame 770.png";
import img3 from "../../../../../public/Frame 750.png";
import img4 from "../../../../../public/Zanzibar.png";
import ImageOverlayCard from "../../../../Components/ImageOverlayCard/ImageOverlayCard";
import GridItem from "../../../../Components/GridItem/GridItem";

const PrimeDestination_Section = () => {
  return (
    <>
      <div>
        <div className="container mx-auto ">
          <h1 className="text-4xl font-bold text-[#F49D2A] text-center mt-5 mb-10">
            Prime Destination
          </h1>
        </div>
        <div>
          <div className="container mx-auto ">
            <h1 className="mb-2 mt-5 mb-5 text-2xl font-bold text-[#F49D2A]">
              Africa 
            </h1>
            <div className=" grid grid1 md:grid-cols-3 ">
              {" "}
              <ImageOverlayCard
                imgSrc={img1}
                title="Egypt"
                description="Come and see the show!"
              />
              <ImageOverlayCard
                imgSrc={img4}
                title="Morocho"
                description="Come and see the show!"
              />
              <ImageOverlayCard
                imgSrc={img1}
                title="zanzibar"
                description="Come and see the show!"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="container mx-auto  space-y-8">
            <h1 className="mb-2 mt-5 text-2xl font-bold text-[#F49D2A]">
              Asia
            </h1>
            {/* First Row: Single Full-Width Column */}
            <div className="grid grid-cols-1">
              <GridItem
                imgSrc={img2}
                title="Full-Width Content"
                description="This spans the entire width of the grid."
              />
            </div>

            {/* Second Row: Three Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <GridItem
                imgSrc={img2}
                title="Column 1"
                description="This is the first column."
                title_link={"oman"}
              />
              <GridItem
                imgSrc="https://via.placeholder.com/800x600"
                title="Column 2"
                description="This is the second column."
              />
              <GridItem
                imgSrc="https://via.placeholder.com/800x600"
                title="Column 3"
                description="This is the third column."
              />
            </div>
          </div>
        </div>

        <div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default PrimeDestination_Section;
