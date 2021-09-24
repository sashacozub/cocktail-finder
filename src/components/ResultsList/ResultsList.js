import React, { useState } from 'react';
import './ResultsList.css';

const ResultsList = (props) => {
  const [isModalOn, setIsModalOn] = useState(false);
  const [selectedCocktail, setSelectedCocktail] = useState({});

  const handleModalOpening = (e) => {
    const clickedCocktail = props.results.filter((result) => {
      return result.name === e.target.alt;
    });
    setSelectedCocktail(clickedCocktail[0]);
    setIsModalOn(true);
  };

  const handleModalClosing = () => {
    setIsModalOn(false);
  };

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
              <img
                src={result.photo}
                alt={result.name}
                onClick={handleModalOpening}
              />
            </li>
          );
        })}
      </ul>

      {isModalOn && (
        <div className='modal'>
          <div className='cocktail-info'>
            <button className='close-modal-btn' onClick={handleModalClosing}>
              X
            </button>
            <h2>{selectedCocktail.name}</h2>
            <img src={selectedCocktail.photo} alt={selectedCocktail.name} />
            <div className='cocktail-description'>
              <p>
                <strong>Glass:</strong> {selectedCocktail.glass}
              </p>
              <p>
                <strong>Procedure:</strong> {selectedCocktail.procedure}
              </p>
              <p>
                <strong>Ingredients:</strong>
              </p>
              <p>{selectedCocktail.ingredients.ingredient_1}</p>
              <p>{selectedCocktail.ingredients.ingredient_2}</p>
              <p>{selectedCocktail.ingredients.ingredient_3}</p>
              <p>{selectedCocktail.ingredients.ingredient_4}</p>
              <p>{selectedCocktail.ingredients.ingredient_5}</p>
              <p>{selectedCocktail.ingredients.ingredient_6}</p>
              <p>{selectedCocktail.ingredients.ingredient_7}</p>
              <p>{selectedCocktail.ingredients.ingredient_8}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ResultsList;
