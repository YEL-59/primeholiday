
import img from "../../../../assets/AboutusImg/qatar.webp";
import img1 from "../../../../assets/AboutusImg/malaisia.webp";
import img2 from "../../../../assets/AboutusImg/srilanka.webp";
import ReusableCard from "../../../../Components/reusable card/reusablecard";

const AboutUscard = () => {
  const data = [
    {
      img: img1,
      countryname: 'Oman',
      packeg: '7 days from ',
      price: '1475'
    },
    {
      img: img,
      countryname: 'Oman',
      packeg: '7 days from ',
      price: '1475'
    },
    {
      img: img2,
      countryname: 'Oman',
      packeg: '7 days from ',
      price: '1475'
    },
  ];
  return (
    <div className="bg-ivory-white">
      <div className="container mx-auto pb-10 p-5 ">
        <h1 className="text-primary font-montserrat text-4xl text-center mb-16 font-semibold leading-[124%] tracking-[-0.64px]">Destinations you'll love</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {data.map((item, index) => (
            <ReusableCard
              key={index}
              img={item.img}
              countryname={item.countryname}
              packeg={item.packeg}
              price={item.price}
            />
          ))}






        </div>
      </div>
    </div>
  );
};

export default AboutUscard;
