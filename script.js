// Je crée les variables qui permettent de récupérer les input de l'utilisateur
const inputQuote = document.getElementById("citation");
const inputAuthor = document.getElementById("auteur");
const submit = document.getElementById("form");
const resultSubmit = document.getElementById("quote-list");

// Je veux qu'au clic, la citation s'affiche en HTML
submit.addEventListener("submit", function (e) {
  // Pour que la page ne se recharge pas à chaque citation ajoutée
  e.preventDefault();
  // Je veux ajouter la citation et l'auteur saisis par l'utilisateur
  resultSubmit.innerHTML += `<div class="quote">
        <p class="text">${inputQuote.value}</p>
        <p class="author">${inputAuthor.value}</p>
      </div>
`;
});
