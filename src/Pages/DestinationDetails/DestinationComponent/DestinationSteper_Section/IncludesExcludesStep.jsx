const IncludesExcludesStep = ({ includes, excludes }) => (
  <>
    {/* Header Section */}
    <div className="bg-green py-3 mb-3 grid grid-cols-2 md:grid-cols-12 gap-2 md:gap-10 text-center">
      <div className="font-semibold col-span-1 md:col-span-6 text-sm md:text-lg text-ivory-white uppercase">
        Includes
      </div>
      <div className="font-semibold col-span-1 md:col-span-6 text-sm md:text-lg text-ivory-white uppercase">
        Excludes
      </div>
    </div>

    {/* Content Section */}
    <div className="flex flex-col md:flex-row gap-5">
      {/* Includes Section */}
      <div className="md:w-1/2 p-4 border-b-2 md:border-b-0 md:border-r-2 border-green">
        <ul className="list-disc pl-5">
          {includes.map((item, i) => (
            <li
              key={i}
              className="font-normal text-sm md:text-base lg:text-lg flex items-start mb-2"
            >
              <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2 mt-1"></span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Excludes Section */}
      <div className="md:w-1/2 p-4">
        <ul className="list-disc pl-5">
          {excludes.map((item, i) => (
            <li
              key={i}
              className="font-normal text-sm md:text-base lg:text-lg flex items-start mb-2"
            >
              <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2 mt-1"></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </>
);

export default IncludesExcludesStep;
