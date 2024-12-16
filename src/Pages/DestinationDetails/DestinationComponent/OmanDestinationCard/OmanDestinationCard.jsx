

import ReusableCard from '../../../../Components/reusable card/reusablecard';
import MainTitle from '../../../../Components/MainTitle/MainTitle';
import img from "../../../../../src/assets/DestinationImg/cultureimg.jpg";
import img1 from "../../../../../src/assets/DestinationImg/essen.jpg";
import img2 from "../../../../../src/assets/DestinationImg/luxyry.jpg";
import SecoundaryTitle from '../../../../Components/SecoundaryTitle/SecoundaryTitle';
const DestinationCard_Section = () => {
  const data = [
    {
      img: img,
      countryname: 'Immersion in Cultural Oman',
      packeg: '9 Days From ',
      price: '2525'
    },
    {
      img: img1,
      countryname: 'Essence of Oman',
      packeg: '10 Days From ',
      price: '2835'
    },
    {
      img: img2,
      countryname: 'Luxury Oman',
      packeg: '7 Days From ',
      price: '3765'
    },
  ];
  return (
    <>
      <div >
        <div>

          <div className='flex justify-center py-10'>
            {/* <SecoundaryTitle head_title={"All-Inclusive ground packages"} /> */}
            <h1 className='text-primary font-montserrat text-4xl text-center mb-16 font-semibold leading-[124%] tracking-[-0.64px]'>All-Inclusive ground packages</h1>
          </div>

          <div>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  mb-10">
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
      </div>
    </>
  );
};

export default DestinationCard_Section;
