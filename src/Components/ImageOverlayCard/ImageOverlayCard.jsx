

const ImageOverlayCard = ({ imgSrc, title, description }) => {
  return (
    <div className="relative max-w-lg rounded shadow border p-2 -z-10">
      <img src={imgSrc} alt={title} className="rounded w-full" />
      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-transparent opacity-80 text-white rounded">
        <h2 className="text-lg font-bold px-4 pb-1">{title}</h2>
        <p className="text-sm px-4 pb-2">{description}</p>
      </div>
    </div>
  );
};

export default ImageOverlayCard;
