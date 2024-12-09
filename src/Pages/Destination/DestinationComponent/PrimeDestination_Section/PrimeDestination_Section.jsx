
import { Link } from "react-router-dom";
import img1 from "../../../../../public/DestinationImg/destinationimg1.webp";
import img2 from "../../../../../public/DestinationImg/destinationimg2.webp";
import img3 from "../../../../../public/DestinationImg/destinationimg3.webp";
import img4 from "../../../../../public/DestinationImg/destinationimg4.webp";
import ImageOverlayCard from "../../../../Components/ImageOverlayCard/ImageOverlayCard";

const PrimeDestination_Section = () => {
  const destinations = [
    {
      id: "region-africa",
      region: "Africa",
      items: [
        {
          id: "card-1",
          imgSrc: img1,
          title: "Egypt",
          description: "The Gift of the Nile",
          url: "egypt",
        },
        {
          id: "card-2",
          imgSrc: img2,
          title: "Morocho",
          description: "Land of Light",
          url: "morocco",
        },
        {
          id: "card-3",
          imgSrc: img3,
          title: "Zanzibar",
          description: "Spice Island",
          url: "zanzibar",
        },
      ],
    },
    {
      id: "region-asia",
      region: "Asia",
      items: [
        {
          id: "card-4",
          imgSrc: img1,
          title: "Oman",
          description: "Beauty has an address",
          url: "Oman",
        },
        {
          id: "card-5",
          imgSrc: img2,
          title: "Qatar",
          description: "Experience the World Beyond",
          url: "Qatar",
        },
        {
          id: "card-6",
          imgSrc: img3,
          title: "Sri lanka",
          description: "You'll Come Back for More",
          url: "Srilanka",
        },
      ],
    },
  ];

  const fixedDiv = {
    id: "fixed-div-asia",
    imgSrc: img4,
    title: "Special Asia Destination",
    description: "God's Own Country",
  };

  return (
    <div>
      <div className="container mx-auto">
        <h1 className="text-6xl font-semibold leading-10 text-primary text-center p-20">
          Prime Destination
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
              <Link to={`/destination/${item.url}`} key={item.id}>
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
              <img
                src={fixedDiv.imgSrc}
                className="h-[555px] w-full"
                alt={fixedDiv.title}
              />
              <div className="absolute -mt-[130px] p-4 w-full flex flex-col justify-end text-ivory-white rounded bg-[rgba(0,0,0,0.35)] bg-opacity-0 z-10">
                <h2 className="text-4xl uppercase font-medium px-4 pb-1 z-10 text-center ">
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
