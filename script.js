// Etape 4
// Je crée les variables qui permettent de récupérer les input de l'utilisateur
const inputQuote = document.getElementById("citation");
const inputAuthor = document.getElementById("auteur");
const submit = document.getElementById("form");
const resultSubmit = document.getElementById("quote-list");
const quoteCount = document.getElementById("count");
let count = 0;

submit.addEventListener("submit", function (e) {
  // Pour que la page ne se recharge pas à chaque citation ajoutée
  e.preventDefault();
  const text = inputQuote.value;
  const author = inputAuthor.value;
  addQuote(text, author);
  // Afficher dans la console
  // console.log(text, author);
});

// Etape 5
// Je veux afficher les citations saisies directement sur la page
function addQuote(quote, author) {
  // Créer la citation
  const quoteParagraphe = document.createElement("p");
  quoteParagraphe.classList.add("text"); // Ajouter de la classe
  quoteParagraphe.textContent = quote; // Insérer le texte de la citation

  // Créer l'auteur
  const authorParagraphe = document.createElement("p");
  authorParagraphe.classList.add("author");
  authorParagraphe.textContent = author;

  // Créer la div input
  const inputContainer = document.createElement("div");
  inputContainer.classList.add("quote");
  inputContainer.appendChild(quoteParagraphe); // Ajouter la citation dans la div l'élément parent
  inputContainer.appendChild(authorParagraphe); // Ajouter l'auteur dans la div l'élément parent

  // Afficher toute la div en HTML
  resultSubmit.appendChild(inputContainer);

  // Incrémenter le compteur
  count += 1;

  // Modifier la valeur du compteur
  quoteCount.innerText = count;
}

// Je veux qu'au clic, la citation s'affiche en HTML
// submit.addEventListener("submit", function (e) {
//   // Pour que la page ne se recharge pas à chaque citation ajoutée
//   e.preventDefault();
//   // Je veux ajouter la citation et l'auteur saisis par l'utilisateur
//   resultSubmit.innerHTML += `<div class="quote">
//         <p class="text">${inputQuote.value}</p>
//         <p class="author">${inputAuthor.value}</p>
//       </div>
// `;
// });
