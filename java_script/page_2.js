function openForm() {
    document.getElementById("popupForm").style.display = "block";
}

function closeForm() {
    document.getElementById("popupForm").style.display = "none";
}


/* --- COKTAIL ALEATOIRE --- */
function openCocktailPopup() {
    // Ouvre une fenêtre pop-up
    const popup = window.open("", "Cocktail aléatoire", "height=500,width=500");
    
    // Effectue la requête API
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then(response => response.json())
      .then(data => {
        // Met à jour le contenu de la fenêtre pop-up avec les données de cocktail aléatoire
        popup.document.body.innerHTML = `
          <h1>${data.strDrink}</h1>
          <img src="${data.strDrinkThumb}" alt="${data.strDrink}">
          <p>Ingrédients: ${data.strIngredient1}, ${data.strIngredient2}, ...</p>
          <p>Instructions: ${data.strInstructions}</p>
        `;
      })
      .catch(error => console.error(error))
  }