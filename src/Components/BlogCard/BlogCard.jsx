/* eslint-disable react/prop-types */


const BlogCard = ({ image, title, date, description, isExpanded, onToggle }) => {
  const truncatedDescription = description.slice(0, 150); // Truncate description to 150 chars

  return (
    <div className="bg-text-primary border rounded overflow-hidden shadow   ">
      {/* Image Section */}
      <img className="      xl:h-[340px] xl:w-[525px]  w-full h-auto object-cover aspect-[16/9] md:aspect-[4/3] xl:aspect-[3/3]" src={image} alt={title} />

      <div className="p-3 xl:p-6">
          {/* Date */}
          <div className=" text-black text-sm uppercase font-normal tracking-wide leading-6">
          {date}
        </div>
        {/* Title */}
        <h4 className="text-green font-semibold text-lg leading-6 truncate">{title}</h4>

      

        {/* Description */}
        <div className="mt-2 text-gray-600 text-md">
          {isExpanded ? description : `${truncatedDescription}...`}
          <button
            onClick={onToggle}
            className="text-primary font-semibold ml-1"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
