import { MovieSet } from "../(home)/page";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";
import { getMovieList, getMovies, getMoviesByGenre, getTvShows, makeImagePath } from "../utilities";

export const metadata = {
  title: "Movie-list",
};

export default async function TvList() {
  const movies = await getMovieList();
  return (
    <>
      <MovieSet
        title="영화"
        movies={movies}
        styles={styles}
        makeImagePath={makeImagePath}
      />
    </>
  );
}
