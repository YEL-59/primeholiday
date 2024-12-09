

const TermsCondition = ({ sections }) => {
  // Helper function to format text with bold keywords
   const formatListItem = (text) => {
    if (text.includes(":")) {
      const [boldPart, ...rest] = text.split(":");
      return (
        <>
          <strong>{boldPart}:</strong>
          {rest.join(":")}
        </>
      );
    }
    return text; // No bold formatting if no colon is present
  };

  return (
    <div>
      {sections.map((section, index) => (
        <div key={index} className="mb-6">
         {section.title && (
      <h2 className="text-xl font-bold text-gray-800 mb-2">
        {`${index + 1}. ${section.title}`}
      </h2>
    )}
          {section.subtitle && (
            <p className="text-gray-700 text-lg font-medium leading-relaxed mb-4">{section.subtitle}</p>
          )}
        
          {section.ulList && (
            <ul className="ms-4 list-disc list-inside text-gray-700 mb-4">
              {section.ulList.map((item, idx) => (
                <li key={idx} className="leading-relaxed text-lg font-normal mb-1">
                  {formatListItem(item)}
                </li>
              ))}
            </ul>
          )}
            {section.bottomTitle && (
            <p className="text-gray-600 text-lg mb-2">{section.bottomTitle}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default TermsCondition;
