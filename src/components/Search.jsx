import React from "react";

function Search({ onSearchChange }) {
  const handleChange = (e) => {
    //Pass the current input value to parent for filtering
    onSearchChange(e.target.value);
  };

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleChange}
        value=""
      />
    </div>
  );
}

export default Search;