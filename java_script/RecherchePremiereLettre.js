///////////// FND ANIME //////////////



///////////// VERSION 3 //////////////
const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function() {
  const letter = document.getElementById("letter").value;
  const API_URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`;

  fetch(API_URL)
    .then(response_3 => response_3.json())
    .then(data_3 => {
      const cocktails = data_3.drinks;
      let cocktailsHTML = "";
      cocktailsHTML += `
        <table>
          <tr>
            <th>Nom du Cocktail</th>
            <th class="img-cocktail">Images du Cocktail</th>
            <th>Ingrédients</th>
            <th class="ingr-cocktail">Instructions</th>
          </tr>
      `;
      for (let i = 0; i < cocktails.length; i++) {
        let cocktail = cocktails[i];
        let ingredientsHTML = "";
        for (let j = 1; j <= 15; j++) {
          let ingredient = cocktail[`strIngredient${j}`];
          if (ingredient) {
            ingredientsHTML += `<li>${ingredient}</li>`;
          }
        }
        cocktailsHTML += `
          <html>
            <head>
              <meta charset="UTF-8" />
              <link rel="stylesheet" href="../style/recherchelettre.css"/>
            </head>
            <body>
              <tr>
                <td class="name-cocktail">${cocktail.strDrink}</td>
                <td><img class="img-cocktail" src=${cocktail.strDrinkThumb}></td>
                <td><ul>${ingredientsHTML}</ul></td>
                <td class="ingr-cocktail">${cocktail.strInstructions}</td>
              </tr>
            <script src="../java_script/RecherchePremiereLettre.js"></script>
            </body>
          </html>      
        `;
      }
      cocktailsHTML += `</table>`;
      document.write(cocktailsHTML);
    });
});
///////////// VERSION 3 //////////////


///////////// VERSION 2 //////////////
// const submitbutton = document.getElementById("submitbutton");
// submitbutton.addEventListener("click", function() {
//   const letter = document.getElementById("letter").value;
//   const API_URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`;

//   fetch(API_URL)
//     .then(response => response.json())
//     .then(data => {
//       const cocktails = data.drinks;
//       let cocktailsHTML = "";
//       for (let i = 0; i < cocktails.length; i++) {
//         let cocktail = cocktails[i];
//         let ingredientsHTML = "";
//         for (let j = 1; j <= 15; j++) {
//           let ingredient = cocktail[`strIngredient${j}`];
//           if (ingredient) {
//             ingredientsHTML += `<li>${ingredient}</li>`;
//           }
//         }
//         cocktailsHTML += `
//         <html>
//           <head>
//             <meta charset="UTF-8" />
//             <link rel="stylesheet" href="../style/recherchelettre.css"/>
//           </head>
//           <body>
//             <div id="cocktail-container">
//               <div class="cocktail">
//                 <h2>${cocktail.strDrink}</h2>
//                 <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}"/>
//                 <ul>${ingredientsHTML}</ul>
//                 <p>${cocktail.strInstructions}</p>
//               </div>
//             </div>
//           </body>
//         </html>
//       `;
//       }
      
//       document.write(cocktailsHTML);
//     });
// });
///////////// VERSION 2 //////////////


///////////// VERSION 1 //////////////
// // fonction renvoyant tous les cocktails commençant par la lettre choisie par l'utilisateur
// const submitbutton = document.getElementById("submitbutton");
// submitbutton.addEventListener("click", function() {
//   const letter = document.getElementById("letter").value;
//   const API_URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`;

//   fetch(API_URL)
//     .then(response => response.json())
//     .then(data => {
//       const cocktails = data.drinks;
//       let cocktailsHTML = "";
//       cocktails.forEach(cocktail => {
//         // Création de la nouvelle page affichant tous les cocktails concernés (comme une page html mais elle est dans le javascript !)
         cocktailsHTML += `
        <html>
          <head>
            <meta charset="UTF-8" />
            <link rel="stylesheet" href="../style/recherchelettre2.css"/>
        </head>
        <body>
          <img src=${cocktail.strDrinkThumb}>
          <h2>${cocktail.strDrink}</h2>
          <h3>Ingredients:</h3>
          <ul class="ingredients"></ul>
          <h3>Instructions:</h3>
          <p>${cocktail.strInstructions}</p>
        </body>
        `;
//       });
//       document.write(cocktailsHTML);
//     });
// });
///////////// VERSION 1 //////////////