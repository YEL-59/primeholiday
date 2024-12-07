import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

const Breadcrumb = ({ items }) => {
  // Get the current path using useLocation
  const location = useLocation();

  return (
    <div className="bg-[#135029] text-white text-start h-20 flex items-center">
      <div className="container mx-auto px-4">
        <nav className="text-xl font-medium">
          <ol className="list-none p-0 inline-flex justify-center">
            {items.map((item, index) => (
              <li key={index} className="flex items-center">
                {/* Compare href with current pathname */}
                <span
                  className={`${
                    item.href && location.pathname === item.href
                      ? 'text-[#F49D2A]' // Active page color
                      : 'text-white'
                  }`}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:underline"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </span>
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
