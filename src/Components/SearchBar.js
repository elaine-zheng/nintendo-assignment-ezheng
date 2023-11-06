import React, { useState } from "react";
import '../Styles/SearchBar.css';
import { sections } from "../constants";
import Modal from "./Modal";
import SearchResults from "./SearchResults";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function searchPages(query) {
    const results = [];
    for (const page of sections) {
      if ((page.content.toLowerCase()).includes(query)) {
        results.push(page);
      }
    }
    return results;
  }

  const handleSearch = () => {
    const results = searchPages(searchQuery);
    setSearchResults(results);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="search">
      <img src = "/searchicon.png" alt="search icon" className="searchIcon"/>
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">Search All</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
      <SearchResults results={searchResults}/>
      </Modal>
    </div>
  );
}
export default SearchBar;
