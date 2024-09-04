import { API_KEY, BASE_PATH, makeImagePath } from "../app/utilities";
import styles from "../styles/movie-info.module.css";

export async function getTVShow(id: string) {
  const response = await fetch(`${BASE_PATH}/tv/${id}?api_key=${API_KEY}&language=ko-KR`);
  return response.json();
}

export async function getTVCast(id: string) {
  const response = await fetch(`${BASE_PATH}/tv/${id}/credits?api_key=${API_KEY}&language=ko-KR`);
  const data = await response.json();
  return data.cast;
}

export default async function TVShowInfo({ id }: { id: string }) {
  const tvShow = await getTVShow(id);
  const casts = await getTVCast(id);

  return (
    <div>
      <div className={styles.container}>
        <img
          src={makeImagePath(tvShow?.poster_path || "")}
          className={styles.poster}
          alt={tvShow.name}
        />
        <div className={styles.info}>
          <h1 className={styles.title}>{tvShow.name}</h1>
          <p>
            {tvShow.first_air_date.substring(0, 4)} · ⭐{tvShow.vote_average.toFixed(1)} · {tvShow.number_of_episodes}{" "}
            에피소드
          </p>
          <p className={styles.overview}>&nbsp;{tvShow.overview}</p>
          <div className={styles.imgList}>
            <img
              className={styles.flag}
              src={`https://flagsapi.com/${tvShow.origin_country[0]}/flat/32.png`}
            />
            <img
              className={styles.production}
              src={makeImagePath(tvShow.production_companies[0]?.logo_path || "")}
            />
          </div>
          <a
            href={`https://www.themoviedb.org/tv/${id}`}
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
