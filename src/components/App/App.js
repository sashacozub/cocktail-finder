import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ResultsList from '../ResultsList/ResultsList';
import Cocktails from '../../utils/Cocktails';
import './App.css';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleSearch('');
  }, []);

  const handleSearch = async (term) => {
    setLoading(true);
    Cocktails.getData(term).then((response) => {
      setSearchResults(response);
      setLoading(false);

      if (response.length === 0) {
        console.log('nothing here');
      }
    });
  };

  return (
    <main className='main-container'>
      <div className='header-ctr'>
        <h1>Cocktail Finder &#127864;</h1>
        <SearchBar handleSearch={handleSearch} />
      </div>
      <ResultsList results={searchResults} isLoading={loading} />
      <footer>
        <p>Attention! Alcohol may cause damage to health.</p>
      </footer>
    </main>
  );
};

export default App;
