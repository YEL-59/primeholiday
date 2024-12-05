import React from 'react'
import bgImage from '../../../public/image 87.png'; 
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';
import termscondition from '../../Components/termscondition/termscondition'
import Termscondition from '../../Components/termscondition/termscondition';
import Footer from '../../Components/Footer/Footer';
const Cancellation = () => {
    const termsData = [
        {
            title: " Payment Options",
            bottomTitle: "We offer two payment methods:",
            ulList: [
              "Bank Transfer: Payment via BACS to our business account.",
              "Correction: Request correction of inaccurate data.",
              "Deletion: Request deletion of your data under certain conditions.",
              "Object: Object to the processing of your data.",
              "Data portability: Request transfer of your data to another service provider.",
            ],
          },
          {
            title: "Data Processing",
            bottomTitle: "We process data for purposes such as:",
            ulList: [
              "Providing services to you.",
              "Improving our offerings and user experience.",
              "Complying with legal obligations.",
            ],
          },
      ];
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
       
        { label: 'Terms & Conditions' }, 
      ];
  return (
      <>
          
          <div>
          <header
        className="relative flex items-center justify-center h-[60vh]  bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div
          className="relative z-30 p-5 text-6xl font-semibold text-[#F49D2A]  rounded-xl"
        >
         Cancellation and Refund
        </div>
      </header>
          </div>
          <div>
              <Breadcrumb items={breadcrumbItems}/>
          </div>



          <div>
          <div className="bg-[#fffff0] p-6">
      <div className="container mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">  Cancellation and Refund Policy</h1>
            <p>At Prime Holiday Destinations (PHD), we aim to provide a flexible and fair cancellation and refund policy to meet the needs of our travelers while maintaining a smooth booking experience. Please review the terms below, which apply to all bookings made with us.
            </p>
        {termsData.map((section, index) => (
            <Termscondition
              key={index}
              title={`${index + 1}. ${section.title}`}
              bottomTitle={section.bottomTitle}
              ulList={section.ulList}
            />
          ))}
      </div>
    </div>
          </div>
      
      
      <Footer/>
      
      </>
  )
}

export default Cancellation