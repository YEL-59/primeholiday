import Destination_Home_Section from "./DestinationComponent/Destination_Home_Section/Destination_Home_Section";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import PrimeDestination_Section from "./DestinationComponent/PrimeDestination_Section/PrimeDestination_Section";

const Destination = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },

    { label: "Destination", href: "/destination" },
  ];
  return (
    <>
      <div>
        <Destination_Home_Section />

        <Breadcrumb items={breadcrumbItems} />

        <div className="relative mb-10">
          {/* Background */}
          <div className="absolute inset-0 bg-text-primary -z-10"></div>

          {/* Content */}
          <div className="relative z-10">
            <PrimeDestination_Section />
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;
