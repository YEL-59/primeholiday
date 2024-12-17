const IncludesExcludesStep = ({ includes, excludes }) => (
    <>
      <div className="bg-green py-3 mb-3 grid grid-cols-12 justify-center  space-x-10">
       
        <div className="font-semibold text-center col-span-6 text-lg text-ivory-white  uppercase">Includes</div>
  
        
        <div className="font-semibold text-center col-span-6  text-lg text-ivory-white  uppercase">Excludes</div>
      </div>
  
      <div className="flex flex-col md:flex-row gap-5">
        {/* Includes Section */}
        <div className="md:w-1/2 p-4">
          <div className=" border-r-2 border-green">
            <ul className="list-disc pl-5">
              {includes.map((item, i) => (
                <li key={i} className="font-normal text-lg flex justify-start items-center">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
  
        {/* Excludes Section */}
        <div className="md:w-1/2 p-4">
          <div className="">
            <ul className="list-disc pl-5">
              {excludes.map((item, i) => (
                <li key={i} className="font-normal text-lg flex justify-start items-center">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
  
  export default IncludesExcludesStep;
  