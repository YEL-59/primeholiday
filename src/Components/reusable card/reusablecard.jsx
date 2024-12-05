import React from 'react';

const ReusableCard = ({ img, countryname, packeg }) => {
  return (
    <div className="relative max-w-xl rounded-lg overflow-hidden h-[25rem] shadow-lg bg-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <img src={img} alt={countryname} className="w-full h-full object-cover" />
      <div className="absolute bottom-0 w-full bg-green-800 p-4">
        <div className="flex justify-between items-center text-white">
          <div>
            <h2 className="text-xl font-semibold">{countryname}</h2>
            <p className="text-sm">{packeg}</p>
          </div>
          <div>
            <p className="text-sm py-1 px-4 bg-yellow-500 text-black rounded-lg font-semibold cursor-pointer hover:bg-yellow-400">
              View
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReusableCard;
