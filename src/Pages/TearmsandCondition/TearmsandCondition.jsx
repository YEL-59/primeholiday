
import bgImage from '../../../public/image 87.png';
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';
import SectionHeader from '../../Components/SectionHeader/SectionHeader';
import termscondition from '../../Components/termscondition/termscondition'
import Termscondition from '../../Components/termscondition/termscondition';

const TearmsandCondition = () => {
    const termsData = [
        {
          title: "Introduction",
          content: `Welcome to Prime Holiday Destinations ("we", "our", "us"). By using our website and purchasing our holiday packages, you agree to be bound by these Terms and Conditions. Please read them carefully before proceeding with any booking. If you do not agree with any part of these terms, please do not use our services.`,
        },
        {
            title: " Definitions",
            content: `"Client", "you", or "your" refers to the person using our services.
"Holiday package" refers to the travel-related services provided by Prime Holiday Destinations, including but not limited to transportation, accommodation, and excursions.
`,
          },
        {
          title: "Booking and Payment",
          content: `All bookings are subject to availability and are not confirmed until full payment has been received. Payments can be made via credit card, bank transfer, or other methods specified on our website.`,
        },

        {
            title: "Pricing",
            content: `All prices listed on our website are in US Dollars and inclusive of taxes unless otherwise specified.
Prices may be subject to change due to factors beyond our control, such as currency fluctuations or increased supplier costs. If there is a significant price change, we will notify you and give you the option to cancel or accept the revised price.
`,
        },
        {
            title: "Cancellations & Refunds",
            content: `By the Client: Cancellations must be submitted in writing. Refunds will be provided as per our cancellation policy, which varies depending on the package and time of cancellation. Please check our Cancellation & Refund Policy for more information.
By Prime Holiday Destinations: In the event of unforeseeable circumstances or low participant numbers, we reserve the right to cancel or modify the tour. In such cases, we will offer you a full refund or an alternative package.
`,
        },
        {
            title: "Travel Insurance",
            content: `It is the client’s responsibility to obtain adequate travel insurance that covers cancellation, medical expenses, lost luggage, and other potential risks. We strongly recommend that you purchase travel insurance at the time of booking.
`,
        },
        {
            title: "Health & Travel Documentation",
            content: `Clients are responsible for ensuring they meet all visa and health requirements for their chosen destination.
It is your responsibility to provide accurate information and documents. We will not be held liable for any failure to obtain necessary visas or vaccinations.
`,
        },
        {
            title: "Changes to Your Booking",
            content: `If you wish to make any changes to your booking after confirmation, we will do our best to accommodate your request, subject to availability. Amendments may incur additional costs.
`,
        },
        {
            title: "Force Majeure",
            content: `Prime Holiday Destinations will not be held liable for any failure to fulfill obligations due to events beyond our control, including but not limited to natural disasters, pandemics, strikes, or government restrictions. In such cases, no refund will be provided, but we will work to reschedule your travel plans where possible.
`,
        },
        {
            title: "Liability",
            content: `We make every effort to ensure that all services provided during your holiday are of high quality and meet our standards. However, we are not responsible for any third-party service failures (such as airlines, hotels, or local operators).
Our liability for any claims, including personal injury or death, is limited to the value of the holiday package booked.
`,
        },
        {
            title: "Complaints",
            content: `If you encounter any issues during your holiday, please inform us immediately, and we will do our best to resolve them. Complaints must be submitted in writing within 14 days of your return.
`,
        },
        {
            title: "Privacy",
            content: `We respect your privacy and handle your personal information in accordance with our Privacy Policy. Your data will only be used for the purposes of fulfilling your booking and improving our services. Your personal information will not be passed to third party.
Please check our Privacy Policy for more information.
`,
        },
        {
            title: "Amendments to Terms & Conditions",
            content: `Prime Holiday Destinations reserves the right to amend these Terms & Conditions at any time. The latest version will always be available on our website. It is your responsibility to review these Terms periodically.
`,
        },
        {
            title: "Governing Law",
            content: `These Terms & Conditions are governed by and construed in accordance with the laws of [Your Country], and any disputes will be subject to the exclusive jurisdiction of the courts in the United Kingdom.

`,
          },
        {
            title: "Contact Information",
            content: `For any queries related to these Terms & Conditions, please contact us at:
Email: contact@primeholidaydestinations.com
`,
          },
      ];
    const breadcrumbItems = [
        { label: 'Home', href: '/' },

        { label: 'Terms & Conditions',href: '/terms-and-conditions'  },
      ];
  return (
      <>

          <div>
         

      <SectionHeader  
      backgroundImage={bgImage}
      title={' Terms & Condition'}
      height={'60vh'}
      />
          </div>
          <div>
              <Breadcrumb items={breadcrumbItems}/>
          </div>



          <div>
          <div className="bg-text-primary p-6">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
        
            <Termscondition
             sections={termsData}
            />
         
      </div>
    </div>
          </div>


    

      </>
  )
}

export default TearmsandCondition