import peliculas from './peliculas.js';

function generoPeliculas(idGenero) {
  return peliculas.filter((pelicula) => pelicula.genre_ids.includes(idGenero));
}

const peliculasAccion = generoPeliculas(28);
const peliculasThriller = generoPeliculas(53);
const peliculasAventura = generoPeliculas(12);

const contenedorAccion = document.getElementById('genero-28');
let htmlAccion = '';

peliculasAccion.forEach((pelicula) => {
  htmlAccion += `
    <div class="pelicula-card">
      <img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt="${pelicula.title}">
      <h3>${pelicula.title}</h3>
    </div>
  `;
});

contenedorAccion.innerHTML = htmlAccion;

const contenedorThriller = document.getElementById('genero-53');
let htmlThriller = '';

peliculasThriller.forEach((pelicula) => {
  htmlThriller += `
    <div class="pelicula-card">
      <img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt="${pelicula.title}">
      <h3>${pelicula.title}</h3>
    </div>
  `;
});

contenedorThriller.innerHTML = htmlThriller;

const contenedorAventura = document.getElementById('genero-12');
let htmlAventura = '';

peliculasAventura.forEach((pelicula) => {
  htmlAventura += `
      <div class="pelicula-card">
      <img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt="${pelicula.title}">
      <h3>${pelicula.title}</h3>
    </div>

    `;
});

contenedorAventura.innerHTML = htmlAventura;
