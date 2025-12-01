/*
  1. json personajes hecho
  2. HTML personajes hecho
  3. CSS personajes hecho
  4. JS salto entre páginas
  5. CSS páginas extra
*/

const charactersList = document.getElementById('character-list');
const prevPage = document.getElementById('prev-page');
const nextPage = document.getElementById('next-page');
let currentPage = 1;
let finalPage = 40;

function getCharacters () {
  fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
  .then(response =>  {
    if (!response.ok) {
      throw new Error(`Error en la petición: ${response.status}`)
    }
    return response.json(); 
  })
  .then(data => {
    const characters = data.results.map((character => {
      finalPage = data.info.pages
      const template = `
        <li>
          <img src="${character.image}" alt="${character.name}">
          <h2><strong>Name: </strong>${character.name}</h2>
          <p><strong>Species: </strong>${character.species}</p>
        </li>
      `
      return template;  
    })).join("")
    charactersList.innerHTML = characters
    removeButton()
    console.log('estamos en la pagina', currentPage)
  })
  .catch(error => {
    charactersList.innerHTML = `<h3 class="error">${error}</h3>`;
  })
}

getCharacters();

prevPage.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--
    getCharacters()
  }   
})

nextPage.addEventListener('click', () => {
  if (currentPage < 42) {
    currentPage++
    getCharacters()
  }
})

function removeButton () {
  currentPage === 1 ? prevPage.classList.add("disabled") : prevPage.classList.remove("disabled")
  currentPage === finalPage ? nextPage.classList.add("disabled") : nextPage.classList.remove("disabled")
} 
 

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




