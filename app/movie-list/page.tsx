import { MovieSet } from "../../components/movie-set";
import { getMovieList, makeImagePath } from "../utilities";

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
      />
    </>
  );
}
