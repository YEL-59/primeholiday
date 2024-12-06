

const ImageOverlayCard = ({ imgSrc, title, description }) => {
  return (
    <div className="relative w-3/4 rounded shadow border  -z-10">
      <img src={imgSrc} alt={title} className="rounded w-full" />
      {/* Overlay Text */}
      <div className="absolute -mt-[70px] w-full flex flex-col justify-end text-white rounded bg-black bg-opacity-50 z-10">
  <h2 className="text-lg font-bold px-4 pb-1 z-10 text-center">{title}</h2>
  <p className="text-sm px-4 pb-2 text-center">{description}</p>
</div>

    </div>
  );
};

export default ImageOverlayCard;
