import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import Immersion_Section from "./OmanComponent/Immersion_Section/Immersion_Section";
import OmanCard_Section from "./OmanComponent/OmanCard_Section/OmanCard_Section";
import OmanDestinationCard from "./OmanComponent/OmanDestinationCard/OmanDestinationCard";
import OmanHome_Section from "./OmanComponent/OmanHome_Section/OmanHome_Section";
import OmanSteper_Section from "./OmanComponent/OmanSteper_Section/OmanSteper_Section";



const Oman = () => {
    const breadcrumbItems = [
        { label: 'Home', href: '/' },

        { label: 'Destination' },
      ];
  return (
      <>
          <div>
            <OmanHome_Section/>


              <Breadcrumb items={breadcrumbItems} />
              <OmanCard_Section/>
              <Immersion_Section/>
              <OmanSteper_Section/>
              <OmanDestinationCard/>


              {/* <div className='mb-10'>
                  <PrimeDestination_Section/>
              </div> */}
             
          </div>



      </>
  )
}

export default Oman