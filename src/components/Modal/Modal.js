import React from 'react';
import './Modal.css';

const Modal = ({ selectedCocktail, handleModalClosing }) => {
  const cocktail = selectedCocktail;
  const { ingredients, measurements, name, photo, glass, procedure } = cocktail;

  return (
    <div className='modal'>
      <div className='cocktail-info'>
        <button className='close-modal-btn' onClick={handleModalClosing}>
          <strong>X</strong>
        </button>
        <h2>{name}</h2>
        <img className='modal-img' src={photo} alt={name} />
        <div className='cocktail-description'>
          <p>
            <strong>Glass:</strong> {glass}
          </p>
          <p>
            <strong>Procedure:</strong> {procedure}
          </p>
          <p>
            <strong>Ingredients:</strong>
          </p>
          <ul>
            <li>
              {measurements.measure_1} {ingredients.ingredient_1}
            </li>
            <li>
              {measurements.measure_2} {ingredients.ingredient_2}
            </li>
            <li>
              {measurements.measure_3} {ingredients.ingredient_3}
            </li>
            <li>
              {measurements.measure_4} {ingredients.ingredient_4}
            </li>
            <li>
              {measurements.measure_5} {ingredients.ingredient_5}
            </li>
            <li>
              {measurements.measure_6} {ingredients.ingredient_6}
            </li>
            <li>
              {measurements.measure_7} {ingredients.ingredient_7}
            </li>
            <li>
              {measurements.measure_8} {ingredients.ingredient_8}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modal;
