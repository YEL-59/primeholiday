import React from "react";

const Termscondition = ({ title, content, bottomTitle, ulList }) => {
  // Helper function to format text with bold keywords
  const formatListItem = (text) => {
    const [boldPart, ...rest] = text.split(":");
    return (
      <>
        <strong>{boldPart}:</strong>
        {rest.join(":")}
      </>
    );
  };
  return (
    <>
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-700 leading-relaxed">{content}</p>

        {/* {title && <h2 className="text-lg font-semibold text-gray-800 mb-4">{title}</h2>} */}
        {bottomTitle && <p className="text-gray-600 mb-2">{bottomTitle}</p>}
        {ulList && (
          <ul className="list-disc list-inside text-gray-700">
            {ulList.map((item, index) => (
              <li key={index} className="leading-relaxed mb-1">
                {formatListItem(item)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Termscondition;
