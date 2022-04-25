import React from 'react';

const Pagination = ({ totalPages, handleClick, page }) => {
  const pages = [...Array(totalPages).keys()].map(number => number + 1);

  return (
    <ul>
      {pages.map(number => (
        <li key={number}>
            <a
                key={number}
                href={`#${number}`}
                onClick={() => handleClick(number)}
                className={`${page === number && 'active'}`}
                >
                {number}
            </a>
        </li>
        
      ))}
    </ul>
  );
};

export default Pagination;