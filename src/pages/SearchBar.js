import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange, category }) => {
  return (
    <input
      type="text"
      placeholder={`Search ${category}...`}
      value={searchTerm}
      onChange={(event) => onSearchChange(event.target.value)}
      className="form-control mb-3"
    />
  );
};

export default SearchBar;
