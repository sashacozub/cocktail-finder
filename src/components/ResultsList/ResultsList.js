import React, { useState } from 'react';
import './ResultsList.css';

const ResultsList = (props) => {
  const [isModalOn, setIsModalOn] = useState(true);

  if (props.isLoading) {
    return (
      <section className='results-ctr'>
        <h2>Loading...</h2>
      </section>
    );
  }

  return (
    <section className='results-ctr'>
      <h2>Cocktails found: {props.results.length}</h2>
      <ul>
        {props.results.map((result) => {
          return (
            <li key={result.id}>
              <h3>{result.name}</h3>
              <img src={result.photo} alt={result.name} />
            </li>
          );
        })}
      </ul>
      {isModalOn && (
        <div className='modal'>
          <h1>MODAL</h1>
        </div>
      )}
    </section>
  );
};

export default ResultsList;
