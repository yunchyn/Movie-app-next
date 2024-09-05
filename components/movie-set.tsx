import Movie from "./movie";
import styles from "../styles/home.module.css";
import { makeImagePath } from "../app/utilities";

interface MovieProps {
  id: string;
  poster_path: string;
  title: string;
}

interface MovieSetProps {
  title: string;
  movies: MovieProps[];
}

export const MovieSet = ({ title, movies }: MovieSetProps) => {
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
