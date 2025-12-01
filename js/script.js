/*
  1. json personajes hecho
  2. HTML personajes hecho
  3. CSS personajes hecho
  4. JS salto entre páginas
  5. CSS páginas extra
*/

const charactersList = document.getElementById('character-list');

fetch("https://rickandmortyapi.com/api/character/?page=1")
.then(response => response.json())
.then(data => {
  const characters = data.results.map((character => {
    const template = `
      <li>
        <img src="${character.image}" alt="${character.name}">
        <h2>${character.name}</h2>
        <p>${character.species}</p>
      </li>
    `
    return template;  
  })).join("")
  charactersList.innerHTML = characters
  console.log('funciona');
})

/*
document.addEventListener("DOMContentLoaded", () => {
  fetchPersonajes();
})

const personajesLista = document.getElementById('character-list')

function renderPaginaPersonajes (personajesData) {
  const personajesDisplay = personajesData.map(personaje => {
      const template = `
        <li>
          <img src="${personaje.image}" alt="${personaje.name}">
          <h3><em>Name:</em> ${personaje.name}</h3>
          <h3><em>Species:</em> ${personaje.species}</h3>
        </li>
      `;
      return template;
    }).join("")
    personajesLista.innerHTML = personajesDisplay;
}

function fetchPersonajes () {
  fetch('https://rickandmortyapi.com/api/character')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Error: No se pudo completar la solicitud')
    }
    return response.json();
  })
  .then((data) => {
    renderPaginaPersonajes(data.results);
  })
  .catch((error) => {
    console.log('Error: No se pueden obtener los personajes.')
  })
}
*/




