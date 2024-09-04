import { API_KEY, BASE_PATH, makeImagePath } from "../app/utilities";
import styles from "../styles/movie-info.module.css";

export async function getMovie(id: string) {
  const response = await fetch(`${BASE_PATH}/movie/${id}?api_key=${API_KEY}&language=ko-KR`);
  return response.json();
}

export async function getCast(id: string) {
  const response = await fetch(`${BASE_PATH}/movie/${id}/credits?api_key=${API_KEY}&language=ko-KR`);
  const data = await response.json();
  return data.cast;
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  const casts = await getCast(id);

  return (
    <div>
      <div className={styles.container}>
        <img
          src={makeImagePath(movie?.poster_path || "")}
          className={styles.poster}
          alt={movie.title}
        />
        <div className={styles.info}>
          <h1 className={styles.title}>{movie.title}</h1>
          <p>
            {movie.release_date.substring(0, 4)} · ⭐{movie.vote_average.toFixed(1)} · {movie.runtime} minutes
          </p>
          <p className={styles.overview}>&nbsp;{movie.overview}</p>
          <div className={styles.imgList}>
            <img
              className={styles.flag}
              src={`https://flagsapi.com/${movie.origin_country[0]}/flat/32.png`}
            />
            <img
              className={styles.production}
              src={makeImagePath(movie.production_companies[0].logo_path || "")}
            />
          </div>
          <a
            href={`https://www.themoviedb.org/movie/${id}`}
            target={"_blank"}
          >
            Show more &rarr;
          </a>
        </div>
      </div>
      <div className={styles.cast}>
        {casts.map((cast) => (
          <div
            key={cast.cast_id}
            className={styles.profile}
          >
            <img
              src={makeImagePath(cast.profile_path || "")}
              alt={cast.name}
            />
            {cast.name}
            <p className={styles.name}>{cast.character}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
