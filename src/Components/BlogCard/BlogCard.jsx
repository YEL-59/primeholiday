import React from 'react';

const BlogCard = ({ image, title, date, description, isExpanded, onToggle }) => {
  const truncatedDescription = description.slice(0, 150); // Truncate description to 150 chars

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-2xl h-[450px] min-w-[400px] max-w-[350px] ">
      {/* Image Section */}
      <img className="h-72 w-full object-cover object-end" src={image} alt={title} />

      <div className="p-6">
        {/* Title */}
        <h4 className="mt-2 font-semibold text-lg leading-tight truncate">{title}</h4>

        {/* Date */}
        <div className="mt-1 text-gray-600 text-xs uppercase font-semibold tracking-wide">
          {date}
        </div>

        {/* Description */}
        <div className="mt-2 text-gray-600 text-sm">
          {isExpanded ? description : `${truncatedDescription}...`}
          <button
            onClick={onToggle}
            className="text-yellow-500 font-semibold ml-1"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
