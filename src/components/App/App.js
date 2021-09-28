import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ResultsList from '../ResultsList/ResultsList';
import Cocktails from '../../utils/Cocktails';
import './App.css';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [gotResults, setGotResults] = useState(true); // Display "no results found" if false.
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    handleSearch(''); // Preload cocktails.
  }, []);

  const handleSearch = async (term) => {
    setSearchTerm(term);
    setLoading(true);
    Cocktails.getData(term).then((response) => {
      setSearchResults(response);
      setLoading(false);
      response.length === 0 ? setGotResults(false) : setGotResults(true);
    });
  };

  return (
    <main className='main-container'>
      <div className='header-ctr'>
        <h1>Cocktail Finder &#127864;</h1>
        <SearchBar handleSearch={handleSearch} />
      </div>
      <ResultsList
        results={searchResults}
        isLoading={loading}
        gotResults={gotResults}
        searchTerm={searchTerm}
      />
      <footer>
        <p>Attention! Alcohol may cause damage to health.</p>
      </footer>
    </main>
  );
};

export default App;
