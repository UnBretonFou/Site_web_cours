const submitbutton = document.getElementById("submitbutton");
submitbutton.addEventListener("click", function() {
  const letter = document.getElementById("letter").value;
  const API_URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`;

  fetch(API_URL)
    .then(response => response.json())
    .then(data => {
      const cocktails = data.drinks;
      let cocktailsHTML = "";
      cocktails.forEach(cocktail => {
        cocktailsHTML += `
        <html>
          <head>
            <meta charset="UTF-8" />
            <link rel="stylesheet" href="../style/recherchelettre2.css"/>
          </head>
          <body>
            <h2>${cocktail.strDrink}</h2>
            <img src=${cocktail.strDrinkThumb}>
            <h3>Ingredients:</h3>
            <ul class="ingredients">
            `;
        for (let i = 1; i <= 15; i++) {
          if (cocktail[`strIngredient${i}`]) {
            cocktailsHTML += `<li>${cocktail[`strIngredient${i}`]}</li>`;
          }
        }
        cocktailsHTML += `
            </ul>
            <h3>Instructions:</h3>
            <p>${cocktail.strInstructions}</p>
          </body>
        `;
      });
      document.write(cocktailsHTML);
    });
});
