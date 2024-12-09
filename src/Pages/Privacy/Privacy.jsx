
import bgImage from '../../../public/image 87.png'; 
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';
import SectionHeader from '../../Components/SectionHeader/SectionHeader';

import Termscondition from '../../Components/termscondition/termscondition';

const Privacy = () => {
    const termsData = [
      {
        "title": "Introduction",
        "subtitle": "Prime Holiday Destinations (\"we\", \"our\", or \"us\") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, and share your personal data when you visit our website or purchase holiday packages from us."
      },
      
        {
            title: "Information We Collect",
            subtitle: "We may collect the following personal information:",
            ulList: [
              "Personal details: Name, address, email, phone number, date of birth.",
              "Financial information: Payment details when you make a booking.",
              "Technical data: IP address, browser type, device information, location, and usage data through cookies and analytics tools.",
              
            ],
          },
          {
            title: "How We Use Your Information",
            subtitle: "We collect and use your data to:",
            ulList: [
              "Process bookings and provide the services you request.",
              "Communicate with you regarding your bookings.",
              "Send promotional material if you’ve subscribed to our newsletter.",
              "Analyze website usage and improve our services.",
            ],
          },
          {
            title: "Legal Basis for Processing",
            subtitle: "We process your data based on:",
            ulList: [
              "Contractual necessity: To fulfil your bookings.",
              "Legitimate interest: For marketing, improving our services, and ensuring website functionality.",
              "Consent: When you opt-in for marketing communications.",
              "Legal obligation: To comply with laws or regulatory requirements.",
            ],
          },
          {
            "title": "Sharing Your Information",
            "subtitle": "We may share your data with:",
            "bottomTitle": "We do not sell or rent your personal information to third parties.",
            "ulList": [
              "Service providers: Such as payment processors and travel operators.",
              "Regulatory bodies: When required by law.",
              
            ]
          },
      ];
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
       
        { label: 'Terms & Conditions' }, 
      ];
  return (
      <>
          
          <div>
         <SectionHeader 
         backgroundImage={bgImage}

         title={"Privacy"}
         height={'60vh'}
         
         />
          </div>
          <div>
              <Breadcrumb items={breadcrumbItems}/>
          </div>



          <div>
          <div className="bg-text-primary p-6">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-4"> Privacy Policy</h1>
        
            <Termscondition
              sections={termsData}
            />
        
      </div>
    </div>
          </div>
      
      
  
      
      </>
  )
}

export default Privacy