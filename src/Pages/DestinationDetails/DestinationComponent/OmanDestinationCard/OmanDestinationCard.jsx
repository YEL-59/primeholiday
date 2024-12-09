

import ReusableCard from '../../../../Components/reusable card/reusablecard';
import MainTitle from '../../../../Components/MainTitle/MainTitle';
import img from "../../../../../public/DestinationImg/cultureimg.jpg";
import img1 from "../../../../../public/DestinationImg/essen.jpg";
import img2 from "../../../../../public/DestinationImg/luxyry.jpg";
const DestinationCard_Section = () => {
  const data = [
    {
      img: img,
      countryname: 'Immersion in Cultural Oman',
      packeg: '9 Days From ',
      price:'2525'
    },
    {
        img:img1,
        countryname: 'Essence of Oman',
        packeg: '10 Days From ',
         price:'2835'
      },
      {
        img: img2,
        countryname: 'Luxury Oman',
        packeg: '7 Days From ',
         price:'3765'
      },
  ];
  return (
    <>
      <div >
        <div>

       <div className='mt-5 mb-5 '>
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
