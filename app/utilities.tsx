// export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

export const API_KEY = "5592f31cecd09b16dbdc86e298b1bbff";
export const BASE_PATH = "https://api.themoviedb.org/3";

// interface IMovie {
//   backdrop_path: string;
//   poster_path: string;
//   title: string;
//   overview: string;
//   id: number;
//   key: string;
// }

// export interface IGetMoviesResult {
//   dates: {
//     maximum: string;
//     minimum: string;
//   };
//   page: number;
//   results: IMovie[];
//   total_pages: number;
//   total_results: number;
// }

export function getMovies() {
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}&language=ko-KR`)
    .then((response) => response.json())
    .then((data) => data.results);
}

export function getMoviesByGenre(genreId) {
  return fetch(`${BASE_PATH}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&language=ko-KR`)
    .then((response) => response.json())
    .then((data) => data.results);
}

export function getMovieList() {
  return fetch(`${BASE_PATH}/movie/popular?api_key=${API_KEY}&language=ko-KR`)
    .then((response) => response.json())
    .then((data) => data.results);
}

export function getTvShows() {
  return fetch(`${BASE_PATH}/tv/popular?api_key=${API_KEY}&language=ko-KR`)
    .then((response) => response.json())
    .then((data) => data.results);
}

export function makeImagePath(id: string, format?: string) {
  return `https://image.tmdb.org/t/p/${format ? format : "original"}/${id}`;
}

export function makeVideoPath(id: string) {
  return `http://api.themoviedb.org/3/movie/${id}/videos`;
}

export async function searchMovies(query) {
  const response = await fetch(
    `${BASE_PATH}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&language=ko-KR`
  );
  const json = await response.json();
  return json.results || [];
}
