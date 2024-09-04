import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";
import { getMovies, getMoviesByGenre, makeImagePath } from "../utilities";

export const metadata = {
  title: "Home",
};

// async function getMovies() {
//   // await new Promise((resolve) => setTimeout(resolve, 1000));
//   const response = await fetch(API_URL);
//   const json = await response.json();
//   return json;
// }

export const MovieSet = ({ title, movies, styles, makeImagePath }) => {
  return (
    <div className={styles.movieSet}>
      <div className={styles.title}>{title}</div>
      <div className={styles.container}>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            poster_path={makeImagePath(movie?.poster_path || "")}
            title={movie.title}
          />
        ))}
      </div>
    </div>
  );
};

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
        styles={styles}
        makeImagePath={makeImagePath}
      />
      <MovieSet
        title="신나는 음악 영화"
        movies={MusicMovies}
        styles={styles}
        makeImagePath={makeImagePath}
      />
      <MovieSet
        title="설레는 로맨스 영화"
        movies={RomanceMovies}
        styles={styles}
        makeImagePath={makeImagePath}
      />
      <MovieSet
        title="박진감 넘치는 드라마"
        movies={DramaMovies}
        styles={styles}
        makeImagePath={makeImagePath}
      />
    </>
  );
}
