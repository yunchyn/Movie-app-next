import { API_URL } from "../app/constants";
import styles from "../styles/movie-videos.module.css";

async function getVideos(id: string) {
  //   throw new Error("something broke!");
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const video = (await getVideos(id))[1];
  return (
    <div className={styles.container}>
      {
        <iframe
          key={video.ud}
          src={`https://youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={video.name}
        />
      }
      {/* {videos.map((video) => (
        <iframe
          key={video.ud}
          src={`https://youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={video.name}
        />
      ))} */}
    </div>
  );
}
