/* eslint-disable react/prop-types */

import { useState } from "react";
import BlogCard from "../../../../Components/BlogCard/BlogCard";



const BlogSection = ({ sectionData }) => {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleToggle = (id) => {
    setExpandedCard(expandedCard === id ? null : id); // Toggle the clicked card's expansion
  };

  return (
    <>
      <div className="bg-ivory-white px-5 md:px-0">
        <div className="container mx-auto py-5 xl:py-10 ">
          <h1 className="font-montserrat text-[20px] xl:text-[40px] font-semibold leading-[124%] uppercase text-primary text-center  mb-5 relative">
            {sectionData.heading}
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-14px] w-[10%] border-b-[3px] border-[#DFE1E6]"></span>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-5">
            {sectionData.blogData.map((blog) => (
              <BlogCard
                key={blog.id}
                image={blog.image}
                title={blog.title}
                date={blog.date}
                description={blog.description}
                isExpanded={expandedCard === blog.id}
                onToggle={() => handleToggle(blog.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSection;
