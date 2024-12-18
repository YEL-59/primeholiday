import bgImage from "../../../../../src/assets/BlogImg/blogbg.webp";
import SectionHeader from "../../../../Components/SectionHeader/SectionHeader";

const Blog_Home_Section = () => {
  return (
    <>
      <div className=" ">
        <SectionHeader
          backgroundImage={bgImage}
          title={"Explore Our Blogs"}
          sub_title={"Expert Holiday Tips and Guides"}
          
        />
      </div>
    </>
  );
};

export default Blog_Home_Section;
