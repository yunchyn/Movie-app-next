import TvShow from "./tv";
import styles from "../styles/home.module.css";
import { makeImagePath } from "../app/utilities";

interface TvProps {
  id: string;
  poster_path: string;
  name: string;
}

interface TvSetProps {
  title: string;
  tvs: TvProps[];
}

export const TvSet = ({ title, tvs }: TvSetProps) => {
  return (
    <div className={styles.movieSet}>
      <div className={styles.title}>{title}</div>
      <div className={styles.container}>
        {tvs.map((movie) => (
          <TvShow
            key={movie.id}
            id={movie.id}
            poster_path={makeImagePath(movie?.poster_path || "")}
            title={movie.name}
          />
        ))}
      </div>
    </div>
  );
};
