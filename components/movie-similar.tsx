import { API_KEY, BASE_PATH, makeImagePath } from "../app/utilities";
import Movie from "./movie";
import styles from "../styles/home.module.css";

async function getSimilar(id: string) {
  const response = await fetch(`${BASE_PATH}/movie/${id}/similar?api_key=${API_KEY}&language=ko-KR&page=1`);
  const data = await response.json();
  return data.results;
}

export default async function MovieSimilars({ id }: { id: string }) {
  const similars = await getSimilar(id);

  if (!Array.isArray(similars) || similars.length === 0) {
    return <div>No similar movies found.</div>;
  }

  return (
    <div>
      <p className={styles.title}>더 찾아보기</p>
      <div className={styles.container}>
        {similars.map((movie) => (
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
}
