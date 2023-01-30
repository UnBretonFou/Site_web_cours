// fonction renvoyant tous les cocktails commençant par la lettre choisie par l'utilisateur
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
        // Création de la nouvelle page affichant tous les cocktails concernés (comme une page html mais elle est dans le javascript !)
        cocktailsHTML += `
        <html>
          <head>
            <meta charset="UTF-8" />
            <link rel="stylesheet" href="../style/recherchelettre2.css"/>
        </head>
        <body>
          <p>${cocktail.strDrink}</p>
          <img src=${cocktail.strDrinkThumb}>
          <h2>${cocktail.strDrink}</h2>
          <h3>Ingredients:</h3>
          <ul class="ingredients"></ul>
          <h3>Instructions:</h3>
          <p>${cocktail.strInstructions}</p>
        </body>
        `;
      });
      document.write(cocktailsHTML);
    });
});