import { API_URL } from "../app/constants";
import styles from "../styles/movie-info.module.css";

export async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export async function getCast(id: string) {
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  const casts = await getCast(id);
  return (
    <div>
      <div className={styles.container}>
        <img
          src={movie.poster_path}
          className={styles.poster}
          alt={movie.title}
        />
        <div className={styles.info}>
          <h1 className={styles.title}>{movie.title}</h1>
          <p>
            {movie.release_date.substring(0, 4)} · ⭐{movie.vote_average.toFixed(1)} · {movie.runtime} minutes
          </p>
          <p>{movie.overview}</p>
          <div className={styles.imgList}>
            <img
              className={styles.flag}
              src={`https://flagsapi.com/${movie.origin_country[0]}/flat/32.png`}
            />
            <img
              className={styles.production}
              src={movie.production_companies[0].logo_path}
            />
          </div>
          <a
            href={movie.homepage}
            target={"_blank"}
          >
            Show more &rarr;
          </a>
        </div>
      </div>
      <div className={styles.cast}>
        {casts.map((cast) => (
          <div className={styles.profile}>
            <img src={cast.profile_path} />
            {cast.name}
            <p className={styles.name}>{cast.character}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
