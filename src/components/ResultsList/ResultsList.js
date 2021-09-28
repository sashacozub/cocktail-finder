import React, { useState, useEffect } from 'react';
import './ResultsList.css';
import Modal from '../Modal/Modal';

const ResultsList = (props) => {
  const [isModalOn, setIsModalOn] = useState(false);
  const [selectedCocktail, setSelectedCocktail] = useState({}); // Selected coktail for modal.

  useEffect(() => {
    isModalOn
      ? (document.body.style.overflow = 'hidden') // Prevent background scroll when modal open.
      : (document.body.style.overflow = 'unset');
  }, [isModalOn]);

  const handleModalOpening = (e) => {
    const clickedCocktail = props.results.filter((result) => {
      return result.name === e.target.alt;
    });
    setSelectedCocktail(clickedCocktail[0]);
    setIsModalOn(true);
  };

  const handleModalClosing = (e) => {
    // console.log(e);
    if (
      e.target.className === 'modal' ||
      e.target.className === 'close-modal-btn' ||
      e.target.parentElement.className === 'close-modal-btn'
    ) {
      setIsModalOn(false);
      setSelectedCocktail({});
    }
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
      <ul className='cocktail-boxes-ctr'>
        {props.gotResults === false && (
          <h3>
            Couldn't find any results for "{props.searchTerm}"
            <br /> Please try another name!
          </h3>
        )}
        {props.results.map((result) => {
          return (
            <li key={result.id} className='cocktail-box'>
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
        <Modal
          selectedCocktail={selectedCocktail}
          handleModalClosing={handleModalClosing}
        />
      )}
    </section>
  );
};

export default ResultsList;
