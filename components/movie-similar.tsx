import { API_URL } from "../app/constants";
import Movie from "./movie";
import styles from "../styles/home.module.css";

async function getSimilar(id: string) {
  //   throw new Error("something broke!");
  const response = await fetch(`${API_URL}/${id}/similar`);
  return response.json();
}

export default async function MovieSimilars({ id }: { id: string }) {
  const similars = await getSimilar(id);
  return (
    <div>
      <p className={styles.title}>Recommended</p>
      <div className={styles.container}>
        {similars.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            poster_path={movie.poster_path}
            title={movie.title}
          />
        ))}
      </div>
    </div>
  );
}
