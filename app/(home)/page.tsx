import { MovieSet } from "../../components/movie-set";
import { getMovies, getMoviesByGenre } from "../utilities";

export const metadata = {
  title: "Home",
};

// async function getMovies() {
//   // await new Promise((resolve) => setTimeout(resolve, 1000));
//   const response = await fetch(API_URL);
//   const json = await response.json();
//   return json;
// }

export default async function HomePage() {
  const latestMovies = (await getMovies()).slice(0, 6);
  const MusicMovies = (await getMoviesByGenre(10402)).slice(0, 6);
  const RomanceMovies = (await getMoviesByGenre(10749)).slice(0, 6);
  const DramaMovies = (await getMoviesByGenre(18)).slice(0, 6);
  return (
    <>
      <MovieSet
        title="최신 영화 둘러보기"
        movies={latestMovies}
      />
      <MovieSet
        title="신나는 음악 영화"
        movies={MusicMovies}
      />
      <MovieSet
        title="설레는 로맨스 영화"
        movies={RomanceMovies}
      />
      <MovieSet
        title="박진감 넘치는 드라마"
        movies={DramaMovies}
      />
    </>
  );
}
