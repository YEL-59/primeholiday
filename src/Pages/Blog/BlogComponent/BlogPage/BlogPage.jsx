import { useEffect, useState } from "react";

import img1 from "../../../../assets/BlogImg/DamiBlogimg1.webp";
import img2 from "../../../../assets/BlogImg/DamiBlogimg2.webp";
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
              description: "Experience the beautiful beaches of Thailand.Lorem ipsum dolor sit amet, consectetur adipiscing  ",
            },
            {
              id: 2,
              image: img1,
              title: "Japan",
              date: "25 Dec 2024",
              description: "Experience the beautiful beaches of Thailand.Lorem ipsum dolor sit amet, consectetur adipiscing ",
            },
            {
              id: 3,
              image: img2,
              title: "Maldives",
              date: "10 Feb 2025",
              description: "Experience the beautiful beaches of Thailand.Lorem ipsum dolor sit amet, consectetur adipiscing ",
            },
          ],
        },
        {
          heading: "Destination Guides",
          blogData: [
            {
              id: 1,
              image: img1,
              title: "Sri Lanka",
              date: "11 Dec 2024",
              description: "Experience the beautiful beaches of Thailand.Lorem ipsum dolor sit amet, consectetur adipiscing ",
            },
            {
              id: 2,
              image: img2,
              title: "Kerala",
              date: "November 15, 2024",
              description: "Experience the beautiful beaches of Thailand.Lorem ipsum dolor sit amet, consectetur adipiscing ",
            },
            {
              id: 3,
              image: img1,
              title: "Sri Lanka",
              date: "December 2, 2024",
              description: "Experience the beautiful beaches of Thailand.Lorem ipsum dolor sit amet, consectetur adipiscing ",
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
              description: "Experience the beautiful beaches of Thailand.Lorem ipsum dolor sit amet, consectetur adipiscing ",
            },
            {
              id: 2,
              image: img1,
              title: "Japan",
              date: "25 Dec 2024",
              description: "Experience the beautiful beaches of Thailand.Lorem ipsum dolor sit amet, consectetur adipiscing ",
            },
            {
              id: 3,
              image: img2,
              title: "Maldives",
              date: "10 Feb 2025",
              description: "Experience the beautiful beaches of Thailand.Lorem ipsum dolor sit amet, consectetur adipiscing ",
            },
          ],
        },

      ];
      setSections(data);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-ivory-white p-2 md:p-0">
      {sections.map((section, index) => (
        <BlogSection key={index} sectionData={section} />
      ))}

      <div className="bg-green p-4 mt-5 text-ivory-white font-bold text-center text-xl">
        <h1>Load more</h1>
      </div>
    </div>
  );
};

export default BlogPage;
