import { useEffect, useState } from "react";

import img1 from "/BlogImg/DamiBlogimg1.webp";
import img2 from "/BlogImg/DamiBlogimg2.webp";
import BlogSection from "../BlogSection/BlogSection";

const BlogPage = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchData = async () => {
      const data = [
        {
            heading: "Travel Tips",
            blogData: [
              {
                id: 1,
                image: img2,
                title: "Thailand",
                date: "1 Jan 2025",
                description: "Experience the beautiful beaches of Thailand.",
              },
              {
                id: 2,
                image: img1,
                title: "Japan",
                date: "25 Dec 2024",
                description: "Discover the rich culture of Japan.",
              },
              {
                id: 3,
                image: img2,
                title: "Maldives",
                date: "10 Feb 2025",
                description: "Relax and unwind at the Maldives islands.",
              },
            ],
          },
        {
          heading: "Destination Guid",
          blogData: [
            {
              id: 1,
              image: img1,
              title: "Sri Lanka",
              date: "11 Dec 2024",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
              id: 2,
              image: img2,
              title: "Kerala",
              date: "November 15, 2024",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
              id: 3,
              image: img1,
              title: "Sri Lanka",
              date: "December 2, 2024",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
          ],
        },
        {
          heading: "Holiday Inspirations",
          blogData: [
            {
              id: 1,
              image: img2,
              title: "Thailand",
              date: "1 Jan 2025",
              description: "Experience the beautiful beaches of Thailand.",
            },
            {
              id: 2,
              image: img1,
              title: "Japan",
              date: "25 Dec 2024",
              description: "Discover the rich culture of Japan.",
            },
            {
              id: 3,
              image: img2,
              title: "Maldives",
              date: "10 Feb 2025",
              description: "Relax and unwind at the Maldives islands.",
            },
          ],
        },
       
      ];
      setSections(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {sections.map((section, index) => (
        <BlogSection key={index} sectionData={section} />
      ))}

      <div className="bg-green p-4 text-text-primary font-bold text-center text-xl">
        <h1>Load More</h1>
      </div>
    </div>
  );
};

export default BlogPage;
