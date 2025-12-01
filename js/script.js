/*
  1. json personajes
  2. HTML personajes
  3. CSS personajes 
  4. JS salto entre páginas
  5. CSS páginas extra
*/


document.addEventListener("DOMContentLoaded", () => {

})
const elementos = document.getElementById('elementos');

function renderPaginaPersonajes (personajesData) {
  const personajesDisplay = personajesData.map(personaje => {
      const template = `
        <div>
          <img src="${personaje.image}" alt="${personaje.name}">
          <p>${personaje.image}</p>
          <p>${personaje.species}</p>
        </div>
      `;
      return template;
    }).join("")
    elementos.innerHTML = personajesDisplay;
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


fetchPersonajes();



