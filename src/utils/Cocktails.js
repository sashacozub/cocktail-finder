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
        return jsonResponse.drinks.map((drink) => {
          return {
            id: drink.idDrink,
            photo: drink.strDrinkThumb,
            name: drink.strDrink,
            glass: drink.strGlass,
            procedure: drink.strInstructions,
          };
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
};

export default Cocktails;
