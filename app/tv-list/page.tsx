import TvShow from "../../components/tv";
import styles from "../../styles/home.module.css";
import { getTvShows, makeImagePath } from "../utilities";

export const metadata = {
  title: "Tv-list",
};

export const TvSet = ({ title, tvs, styles, makeImagePath }) => {
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

export default async function TvList() {
  const TvShows = await getTvShows();
  return (
    <>
      <TvSet
        title="TV 프로그램"
        tvs={TvShows}
        styles={styles}
        makeImagePath={makeImagePath}
      />
    </>
  );
}
