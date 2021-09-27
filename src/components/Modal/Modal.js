import React from 'react';
import './Modal.css';

const Modal = (props) => {
  const cocktail = props.selectedCocktail;
  const ingredients = cocktail.ingredients;
  const measurements = cocktail.measurements;

  return (
    <div className='modal'>
      <div className='cocktail-info'>
        <button className='close-modal-btn' onClick={props.handleModalClosing}>
          X
        </button>
        <h2>{cocktail.name}</h2>
        <img src={cocktail.photo} alt={cocktail.name} />
        <div className='cocktail-description'>
          <p>
            <strong>Glass:</strong> {cocktail.glass}
          </p>
          <p>
            <strong>Procedure:</strong> {cocktail.procedure}
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
