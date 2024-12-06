import React, { useState } from "react";
import BlogCard from "../../../../Components/BlogCard/BlogCard";
import img1 from "../../../../../public/Kerala.png";
import img2 from "../../../../../public/Sri Lanka.png";
const Blogdestinationguid_Section = () => {
  const blogData = [
    {
      image: img1,
      title: "Sri Lanka",
      date: "11 Dec 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.psumconsectetur adipiscing elit",
    },
    {
      image: img2,
      title: "Kerala",
      date: "November 15, 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros...Read more",
    },
    {
      image: img1,
      title: "Sri Lanka",
      date: "December 2, 2024",
      description:
        "Lorem ipsum dolor sit amet, consecteturconsectetur adipiscing elit ",
    },
  ];
  const [expandedCard, setExpandedCard] = useState(null);

  const handleToggle = (id) => {
    setExpandedCard(expandedCard === id ? null : id); // Toggle the clicked card's expansion
  };
  return (
      <>
         

     
          
          <div className="bg-[#fffff0]">
         <div className="container mx-auto  p-14">
         
          <h1 className="text-4xl font-bold text-[#F49D2A] text-center mt-10 mb-14 relative">
          Destination Guid
  <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-14px] w-[10%] border-b-2 border-[#F49D2A]"></span>
</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
       
      {blogData.map((blog, index) => (
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

export default Blogdestinationguid_Section;
