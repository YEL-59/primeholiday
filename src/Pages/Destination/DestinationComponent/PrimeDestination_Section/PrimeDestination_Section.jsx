
import { Link } from "react-router-dom";
import img1 from "../../../../../public/DestinationImg/egypt.png";
import img2 from "../../../../../public/DestinationImg/morocco.png";
import img3 from "../../../../../public/DestinationImg/zinzaber.jpg";
import img4 from "../../../../../public/DestinationImg/oman.jpg";
import img5 from "../../../../../public/DestinationImg/kerala.jpg";
import img6 from "../../../../../public/DestinationImg/qatart.jpg";
import img7 from "../../../../../public/DestinationImg/srilanka.jpg";
import ImageOverlayCard from "../../../../Components/ImageOverlayCard/ImageOverlayCard";

const PrimeDestination_Section = () => {
  const destinations = [
    {
      id: "region-africa",
      region: "Asia",
      items: [
        {
          id: "card-1",
          imgSrc: img1,
          title: "Egypt",
          description: "The Gift of the Nile",
          url: "Egypt",
        },
        {
          id: "card-2",
          imgSrc: img2,
          title: "Morocco",
          description: "Land of Light",
          url: "Morocco",
        },
        {
          id: "card-3",
          imgSrc: img3,
          title: "Zanzibar",
          description: "Spice Island",
          url: "Zanzibar",
        },
      ],
    },
    {
      id: "region-asia",
      // region: "Asia",
      items: [
        {
          id: "card-4",
          imgSrc: img4,
          title: "Oman",
          description: "Beauty has an address",
          url: "Oman",
        },
        {
          id: "card-5",
          imgSrc: img6,
          title: "Qatar",
          description: "Experience the World Beyond",
          url: "Qatar",
        },
        {
          id: "card-6",
          imgSrc: img7,
          title: "Sri lanka",
          description: "You'll Come Back for More",
          url: "Srilanka",
        },
      ],
    },
  ];

  const fixedDiv = {
    id: "fixed-div-asia",
    imgSrc: img5,
    title: "Kerala",
    description: "God's Own Country",
    region: "Asia",
  };

  return (
    <div>
      <div className="container mx-auto">
        <h1 className="text-2xl md:text-5xl font-semibold leading-10 text-primary text-center p-2 py-5">
        Prime Destinations
        </h1>
      </div>

      {destinations.map((destination) => (
        <div key={destination.id} className="container mx-auto space-y-8">
          {/* Region Title */}
          <h1 className="mb-5 mt-5 text-4xl font-montserrat font-semibold text-primary">
            {destination.region}
          </h1>

          {/* First Grid of Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {destination.items.map((item) => (
              <Link to={`/destination/${item.url}`} key={item.id}  state={{ imgSrc: item.imgSrc ,description: item.description }}>
                <ImageOverlayCard
                  imgSrc={item.imgSrc}
                  title={item.title}
                  description={item.description}
                />
              </Link>
            ))}
          </div>

          {/* Render Fixed Div Content Between Regions */}
          {destination.id === "region-africa" && (
            <div className="relative mt-10">
               <h1 className="mb-5 mt-5 text-4xl font-montserrat font-semibold text-primary">
            {destination.region}
          </h1>
              <img
                src={fixedDiv.imgSrc}
                className="h-[555px] w-full  object-cover aspect-[16/9] md:aspect-[4/3] lg:aspect-[3/3]"
                alt={fixedDiv.title}
              />
              <div className="absolute -mt-[130px] p-4 w-full flex flex-col justify-end text-ivory-white rounded bg-[rgba(0,0,0,0.35)] bg-opacity-0 z-10">
                <h2 className="text-xl xl:text-4xl uppercase font-medium px-4 pb-1 z-10 text-center ">
                  {fixedDiv.title}
                </h2>
                <p className="text-lg uppercase px-4 pb-2 text-center">
                  {fixedDiv.description}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PrimeDestination_Section;
