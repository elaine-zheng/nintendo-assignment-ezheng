import React from "react";

const SearchResults = ({ results }) => {
  return (
    <div className="search-results">
    <h2>Search Results</h2>
    {results.length > 0 ? (
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            <h3>{result.title}</h3>
            <p>{result.content}</p>
          </li>
        ))}
      </ul>
    ) : (
      <p>No results found.</p>
    )}
  </div>
);
}

export default SearchResults;
