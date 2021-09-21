import React from 'react';
import './ResultsList.css';

const ResultsList = (props) => {
  return (
    <section className='results-ctr'>
      <h2>Results: </h2>
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
    </section>
  );
};

export default ResultsList;
