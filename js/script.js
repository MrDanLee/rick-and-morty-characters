/*
  1. json personajes hecho
  2. HTML personajes hecho
  3. CSS personajes hecho
  4. JS salto entre páginas
  5. CSS páginas extra
*/


document.addEventListener("DOMContentLoaded", () => {
  fetchPersonajes();
})

const personajesLista = document.getElementById('character-list')

function renderPaginaPersonajes (personajesData) {
  const personajesDisplay = personajesData.map(personaje => {
      const template = `
        <li>
          <img src="${personaje.image}" alt="${personaje.name}">
          <h3>Name: ${personaje.name}</h3>
          <h3>Species: ${personaje.species}</h3>
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
  .then((personajes) => {
    renderPaginaPersonajes(personajes.results);
  })
  .catch((error) => {
    console.log('Error: No se pueden obtener los personajes.')
  })
}





