// import peliculas from './peliculas.js';

// function generoPeliculas(idGenero) {
//   return peliculas.filter((pelicula) => pelicula.genre_ids.includes(idGenero));
// }

// const peliculasAccion = generoPeliculas(28);
// const peliculasThriller = generoPeliculas(53);
// const peliculasAventura = generoPeliculas(12);

// const contenedorAccion = document.getElementById('genero-28');
// let htmlAccion = '';

// peliculasAccion.forEach((pelicula) => {
//   htmlAccion += `
//     <div class="pelicula-card">
//       <img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt="${pelicula.title}">
//       <h3>${pelicula.title}</h3>
//     </div>
//   `;
// });

// contenedorAccion.innerHTML = htmlAccion;

// const contenedorThriller = document.getElementById('genero-53');
// let htmlThriller = '';

// peliculasThriller.forEach((pelicula) => {
//   htmlThriller += `
//     <div class="pelicula-card">
//       <img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt="${pelicula.title}">
//       <h3>${pelicula.title}</h3>
//     </div>
//   `;
// });

// contenedorThriller.innerHTML = htmlThriller;

// const contenedorAventura = document.getElementById('genero-12');
// let htmlAventura = '';

// peliculasAventura.forEach((pelicula) => {
//   htmlAventura += `
//       <div class="pelicula-card">
//       <img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt="${pelicula.title}">
//       <h3>${pelicula.title}</h3>
//     </div>

//     `;
// });

// contenedorAventura.innerHTML = htmlAventura;

// Refactorización del código para mejorar la legibilidad y mantener el principio DRY (Don't Repeat Yourself)
import peliculas from './peliculas.js';

// 1. Función para filtrar películas por género
const obtenerPeliculasPorGenero = (idGenero) =>
  peliculas.filter((pelicula) => pelicula.genre_ids.includes(idGenero));

// 2. Función pura para generar la plantilla HTML de una tarjeta
const crearTarjetaPelicula = (pelicula) => `
  <div class="pelicula-card">
    <img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt="${pelicula.title}">
    <h3>${pelicula.title}</h3>
  </div>
`;

// 3. Configuración centralizada de los géneros y sus contenedores DOM
const configuracionGeneros = [
  { idGenero: 28, contenedorId: 'genero-28' },
  { idGenero: 53, contenedorId: 'genero-53' },
  { idGenero: 12, contenedorId: 'genero-12' },
];

// 4. Renderizado dinámico aplicando el principio DRY (Don't Repeat Yourself)
configuracionGeneros.forEach(({ idGenero, contenedorId }) => {
  const contenedor = document.getElementById(contenedorId);

  if (!contenedor) return; // Validación de seguridad si el contenedor no existe en el DOM

  const peliculasFiltradas = obtenerPeliculasPorGenero(idGenero);

  // Transformamos el array de objetos en un único string HTML de forma limpia
  contenedor.innerHTML = peliculasFiltradas.map(crearTarjetaPelicula).join('');
});
