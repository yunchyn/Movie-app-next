import { API_KEY, BASE_PATH, makeImagePath } from "../app/utilities";
import styles from "../styles/home.module.css";
import TvShow from "./tv";

async function getSimilarTVShows(id: string) {
  const response = await fetch(`${BASE_PATH}/tv/${id}/similar?api_key=${API_KEY}&language=ko-KR&page=1`);
  const data = await response.json();
  return data.results;
}

export default async function TVShowSimilars({ id }: { id: string }) {
  const similars = await getSimilarTVShows(id);

  if (!Array.isArray(similars) || similars.length === 0) {
    return <div>No similar TV shows found.</div>;
  }

  return (
    <div>
      <p className={styles.title}>더 찾아보기</p>
      <div className={styles.container}>
        {similars.map((tvShow) => (
          <TvShow
            key={tvShow.id}
            id={tvShow.id}
            poster_path={makeImagePath(tvShow?.poster_path || "")}
            title={tvShow.name}
          />
        ))}
      </div>
    </div>
  );
}
