import { useParams } from "react-router-dom";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import DestinationHome_Section from "./DestinationComponent/DestinationHome_Section/DestinationHome_Section";
import DestinationCard_Section from "./DestinationComponent/OmanDestinationCard/OmanDestinationCard";
import Immersion_Section from "./DestinationComponent/Immersion_Section/Immersion_Section";
import DestinationSteper_Section from "./DestinationComponent/DestinationSteper_Section/DestinationSteper_Section";
import AboutUscard from "../AboutUs/AboutUsComponent/AboutUsCard/AboutUscard";


const DestinationDetails = () => {
  const { destinationName } = useParams();
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Destinations', href: '/destination' },
    { label: destinationName, href: `/destination/${destinationName}` },
  ];
  return (
    <>
      <div className="bg-ivory-white">
        <DestinationHome_Section />


        <Breadcrumb items={breadcrumbItems} />
        <DestinationCard_Section />
        <Immersion_Section />
        <DestinationSteper_Section />
        <AboutUscard />




      </div>



    </>
  )
}

export default DestinationDetails