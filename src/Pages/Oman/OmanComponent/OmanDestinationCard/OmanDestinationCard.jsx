import React from 'react';
import reusablecard from './../../../../Components/reusable card/reusablecard';
import ReusableCard from './../../../../Components/reusable card/reusablecard';

const OmanDestinationCard = () => {
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
          <h1 className="text-center text-2xl font-bold">
            Destinations you'll love
          </h1>

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

export default OmanDestinationCard;
