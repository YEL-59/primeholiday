import { Link } from "react-router-dom";
import img1 from "../../../../assets//DestinationImg/egypt.png";
import img2 from "../../../../assets/DestinationImg/morocco.png";
import img3 from "../../../../assets/DestinationImg/zinzaber.jpg";
import img4 from "../../../../assets/DestinationImg/oman.jpg";
import img5 from "../../../../assets/DestinationImg/kerala.jpg";
import img6 from "../../../../assets/DestinationImg/qatart.jpg";
import img7 from "../../../../assets/DestinationImg/srilanka.jpg";
import ImageOverlayCard from "../../../../Components/ImageOverlayCard/ImageOverlayCard";

const PrimeDestination_Section = () => {
  const destinations = [
    {
      type: "region",
      id: "region-africa",
      region: "Africa",
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
        {
          id: "card-4",
          imgSrc: img4,
          title: "Oman",
          description: "Beauty Has a Address",
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
          title: "Sri Lanka",
          description: "You'll Come Back for More",
          url: "Srilanka",
        },
      ],
    },
    {
      type: "fixedDiv",
      id: "fixed-div-asia",
      imgSrc: img5,
      title: "Kerala",
      description: "God's Own Country",
      region: "Asia",
      url:"Kerala"
    },
  ];

  return (
    <div>
      <div className="container mx-auto">
        <h1 className="text-2xl md:text-5xl font-montserrat font-semibold leading-10 text-primary text-center py-20  uppercase tracking-wide">
          Prime Destinations
        </h1>
      </div>

      {/* First 3 Cards */}
      {destinations.map((item) => {
        if (item.type === "region") {
          return (
            <div key={item.id} className="container mx-auto space-y-8">
              <h1 className="mb-3 mt-5 text-3xl font-montserrat font-semibold text-primary">
                {item.region}
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {item.items.slice(0, 3).map((regionItem) => (
                  <Link
                    to={`/destination/${regionItem.url}`}
                    key={regionItem.id}
                    state={{
                      imgSrc: regionItem.imgSrc,
                      description: regionItem.description,
                    }}
                  >
                    <ImageOverlayCard
                      imgSrc={regionItem.imgSrc}
                      title={regionItem.title}
                      description={regionItem.description}
                    />
                  </Link>
                ))}
              </div>
            </div>
          );
        }
        return null; // In case the item type is not recognized
      })}

      {/* Fixed Div  */}
      {destinations.map((item) => {
        if (item.type === "fixedDiv") {
          return (
            <div key={item.id} className="container mx-auto relative mt-10 mb-10">
              <h1 className="mb-3 mt-5 text-3xl font-montserrat font-semibold text-primary">
                {item.region}
              </h1>
              <div className="relative">
               <Link  to={`/destination/${item.url}`}  state={{
                      imgSrc: item.imgSrc,
                      description: item.description,
                    }}> <img
                  src={item.imgSrc}
                  className="h-[555px] w-full object-cover aspect-[16/9] md:aspect-[4/3] lg:aspect-[3/3]"
                  alt={item.title}
                />
                <div className="absolute -mt-[130px] p-4 w-full flex flex-col justify-end text-ivory-white rounded bg-[rgba(0,0,0,0.35)] bg-opacity-0 z-10">
                  <div className="text-center text-ivory-white  p-4">
                    <h2 className="text-xl xl:text-4xl uppercase font-medium">
                      {item.title}
                    </h2>
                    <p className="text-lg uppercase">{item.description}</p>
                  </div>
                </div></Link>
              </div>
            </div>
          );
        }
        return null;
      })}

      {/* Remaining Cards */}
      {destinations.map((item) => {
        if (item.type === "region") {
          return (
            <div key={item.id} className="container mx-auto space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {item.items.slice(3).map((regionItem) => (
                  <Link
                    to={`/destination/${regionItem.url}`}
                    key={regionItem.id}
                    state={{
                      imgSrc: regionItem.imgSrc,
                      description: regionItem.description,
                    }}
                  >
                    <ImageOverlayCard
                      imgSrc={regionItem.imgSrc}
                      title={regionItem.title}
                      description={regionItem.description}
                    />
                  </Link>
                ))}
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default PrimeDestination_Section;
