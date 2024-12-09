import bgImage from "/staticimg.webp";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";

import Termscondition from "../../Components/termscondition/termscondition";

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
    {
      title: "Refund Policy",
      bottomTitle:
        "Refunds depend on the timing of the cancellation, as follows:",
      ulList: [
        "30 days or more before departure: Full refund, minus a $50 administration fee.",
        "29 – 22 days before departure: 50% refund, minus a $50 administration fee.",
        "21 days or less before departure: No refund will be issued.",
      ],
    },
  ];
  const breadcrumbItems = [
    { label: "Home", href: "/" },

    { label: "Cancellation and Refund", href: "/cancellation" },
  ];
  return (
    <>
      <div>
        <SectionHeader
          backgroundImage={bgImage}
          title={"Cancellation and Refund Policy"}
          height={"60vh"}
        />
      </div>
      <div>
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <div>
        <div className="bg-text-primary p-6">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              {" "}
              Cancellation and Refund Policy
            </h1>
            <p className="text-lg mb-5">
              At Prime Holiday Destinations (PHD), we aim to provide a flexible
              and fair cancellation and refund policy to meet the needs of our
              travelers while maintaining a smooth booking experience. Please
              review the terms below, which apply to all bookings made with us.
            </p>

            <Termscondition sections={termsData} />

            <div>
              <strong>Note:</strong>
              <p className="max-w-xl text-sm text-gray-900">
                All refunds are subject to a $50 administration fee. The
                Cancellation & Refund Policy is subject to change without prior
                notice.
              </p>
              <p className="max-w-xl text-sm text-gray-900 mt-5">
                For any questions or further clarifications, feel free to
                contact us. We’re here to make your holiday planning as seamless
                and enjoyable as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cancellation;
