const Cocktails = {
  async getData(term) {
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${term}`
      );
      if (!response.ok) {
        throw new Error('Request failed');
      } else {
        const jsonResponse = await response.json();
        if (!jsonResponse.drinks) {
          return [];
        }
        // console.log(jsonResponse.drinks);
        return jsonResponse.drinks.map((drink) => {
          return {
            id: drink.idDrink,
            photo: drink.strDrinkThumb,
            name: drink.strDrink,
            glass: drink.strGlass,
            procedure: drink.strInstructions,
            ingredients: {
              ingredient_1: drink.strIngredient1,
              ingredient_2: drink.strIngredient2,
              ingredient_3: drink.strIngredient3,
              ingredient_4: drink.strIngredient4,
              ingredient_5: drink.strIngredient5,
              ingredient_6: drink.strIngredient6,
              ingredient_7: drink.strIngredient7,
              ingredient_8: drink.strIngredient8,
            },
            measurements: {
              measure_1: drink.strMeasure1,
              measure_2: drink.strMeasure2,
              measure_3: drink.strMeasure3,
              measure_4: drink.strMeasure4,
              measure_5: drink.strMeasure5,
              measure_6: drink.strMeasure6,
              measure_7: drink.strMeasure7,
              measure_8: drink.strMeasure8,
            },
          };
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
};

export default Cocktails;
