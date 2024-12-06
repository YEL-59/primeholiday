import React from 'react';
import PropTypes from 'prop-types';

const Breadcrumb = ({ items }) => {
  return (
<div className="bg-[#135029] text-white text-start h-20 flex items-center">
  <div className="container mx-auto px-4">
    <nav className="text-xl font-medium">
      <ol className="list-none p-0 inline-flex justify-center">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.href ? (
              <a
                href={item.href}
                className="text-white hover:underline"
              >
                {item.label}
              </a>
            ) : (
              <span>{item.label}</span>
            )}
            {index < items.length - 1 && (
              <span className="mx-2">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  </div>
</div>

  );
};

// PropTypes for type-checking
Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string, // Optional: only for items with links
    })
  ).isRequired,
};

export default Breadcrumb;
