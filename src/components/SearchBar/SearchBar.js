import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
  const [term, setTerm] = useState('');

  const handleChange = ({ target }) => {
    setTerm(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSearch(term);
    setTerm('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={term}
        placeholder='Search for a cocktail...'
        className='input-field'
        onChange={handleChange}
      />
      <input type='submit' value='&#128269;' className='submit-btn' />
    </form>
  );
};

export default SearchBar;
