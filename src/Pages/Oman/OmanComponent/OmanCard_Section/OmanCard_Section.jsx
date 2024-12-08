
import reusablecard from './../../../../Components/reusable card/reusablecard';
import ReusableCard from './../../../../Components/reusable card/reusablecard';
import MainTitle from '../../../../Components/MainTitle/MainTitle';


const OmanCard_Section = () => {
  const data = [
    {
      img: '../../../../../public/Frame 775.png',
      countryname: 'Oman',
      packeg: '7 days from $1475',
    },
    {
        img: '../../../../../public/Frame 775.png',
        countryname: 'Oman',
        packeg: '7 days from $1475',
      },
      {
        img: '../../../../../public/Frame 775.png',
        countryname: 'Oman',
        packeg: '7 days from $1475',
      },
  ];
  return (
    <>
      <div>
        <div>

       <div className='mt-5 mb-5'>
       <MainTitle head_title={"Destinations you'll love"} />
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

export default OmanCard_Section;
