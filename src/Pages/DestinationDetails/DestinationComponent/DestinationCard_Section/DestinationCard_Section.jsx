

import ReusableCard from '../../../../Components/reusable card/reusablecard';
import MainTitle from '../../../../Components/MainTitle/MainTitle';
import img from '../../../../../src/DestinationImg/destinationimg1.webp'
import img1 from '../../../../../src/DestinationImg/destinationimg2.webp'
import img2 from '../../../../../src/DestinationImg/destinationimg3.webp'
const DestinationCard_Section = () => {
  const data = [
    {
      img: img,
      countryname: 'Oman',
      packeg: '7 days from $1475',
    },
    {
      img: img1,
      countryname: 'Oman',
      packeg: '7 days from $1475',
    },
    {
      img: img2,
      countryname: 'Oman',
      packeg: '7 days from $1475',
    },
  ];
  return (
    <>
      <div>
        <div>

          <div className='mt-5 mb-5'>
            <MainTitle head_title={"All-Inclusive ground packages"} />
          </div>

          <div>
            <div className="container mx-auto grid grid-cols-3 gap-5 mb-10 mt-10">
              {data.map((item, index) => (
                <ReusableCard
                  key={index}
                  img={item.img}
                  countryname={item.countryname}
                  packeg={item.packeg}
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
