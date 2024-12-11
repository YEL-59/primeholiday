const ReusableCard = ({ img, countryname, packeg, price }) => {
  return (
    <div className="relative w-full  overflow-hidden shadow-lg h-[20rem] md:h-[30.5rem] bg-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <img src={img} alt={countryname} className="w-full h-full object-cover" />
      <div className="absolute bottom-0 w-full bg-green p-4">
        <div className="flex justify-between items-center text-ivory-white">
          <div>
            <h2 className="text-[15px] xl:text-xl font-semibold text-start text-text-primary font-montserrat uppercase tracking-[0.895px] leading-[164%]">
              {countryname}
            </h2>
            <p className="text-[12px] xl:text-xl font-normal text-start text-text-primary font-montserrat  tracking-[0.895px] leading-[164%]">
              {packeg} <span className="font-bold">$ {price}</span>
            </p>
          </div>
          <div>
            <p className="text-md py-1 md:py-2 px-5 bg-primary text-ivory-white  font-semibold cursor-pointer hover:bg-primary">
              View
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReusableCard;
