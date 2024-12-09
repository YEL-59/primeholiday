
import bgImage from '/staticimg.webp'; 
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
          {
            "title": "Your Data Rights",
            "subtitle": "Under UK GDPR, you have the following rights:"
          },
          {
            "title": "Sharing Your Information",
            "subtitle": "We may share your data with:",
            "bottomTitle": "To exercise any of these rights, contact us at [Your Contact Email].",
            "ulList": [
              "Access: Request a copy of your personal data.",
              "Correction: Request correction of inaccurate data.",
              "Deletion: Request deletion of your data under certain conditions.",
              "Object: Object to the processing of your data.",
              "Data portability: Request transfer of your data to another service provider.",
           
              
            ]
          },
          {
            "title": "Cookies Policy",
            "subtitle": "We use cookies to improve your experience on our website. Cookies are small files stored on your device that help us track user behavior and preferences.",
            "bottomTitle": " Managing Cookies: You can manage or disable cookies through your browser settings. However, disabling essential cookies may affect the functionality of our website.",
            "ulList": [
              "Essential cookies: Necessary for website functionality (e.g., login or booking features).",
              "Performance cookies: Gather information about how visitors use the site to help us improve it.",
              "Marketing cookies: Track browsing habits to show relevant ads.",
         
           
              
            ]
          },
          {
            "title": "Third-Party Links",
            "subtitle": "Our website may contain links to third-party sites. We are not responsible for the privacy practices of these external websites."
          },
          {
            "title": "Security",
            "subtitle": "We implement appropriate technical and organizational measures to safeguard your personal data. However, no transmission over the internet is 100% secure, and we cannot guarantee the security of your data transmitted to our site."
          },
          {
            "title": "Changes to this Policy",
            "subtitle": "We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated effective date."
          },
          {
            "title": " Contact Us",
             "subtitle": "If you have any questions or concerns regarding this Privacy Policy, please contact us at:",
            "ulList": [
              "Email: contact@primeholidaydestinations.com",
             
         
           
              
            ]
          },
      ];
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
       
        { label: 'Privacy Policy',href: '/privacy'}, 
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
          <div className="bg-ivory-white p-6">
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