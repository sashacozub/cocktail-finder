import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ResultsList from '../ResultsList/ResultsList';
import cocktailsTemp from './temp';
import './App.css';

const App = () => {
  const [searchResults, setSearchResults] = useState(cocktailsTemp);

  const handleSearch = (term) => {
    console.log(term);
  };

  return (
    <main className='main-container'>
      <div className='header-ctr'>
        <h1>Cocktail Finder</h1>
        <SearchBar handleSearch={handleSearch} />
      </div>
      <ResultsList results={searchResults} />
      <footer>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, veniam.
        </p>
      </footer>
    </main>
  );
};

export default App;
