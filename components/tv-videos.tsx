"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY } from "../app/utilities";
import styles from "../styles/movie-videos.module.css";

export default function Trailer({ tvShowId }: { tvShowId: string }) {
  const [trailerUrl, setTrailerUrl] = useState<string>("");

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/tv/${tvShowId}/videos`, {
          params: {
            api_key: API_KEY,
            language: "ko-KR",
          },
        });
        const trailers = response.data.results;
        if (trailers.length > 0) {
          const trailer = trailers.find((trailer: any) => trailer.type === "Trailer");
          if (trailer) {
            setTrailerUrl(`https://www.youtube.com/embed/${trailer.key}`);
          }
        }
      } catch (error) {
        console.error("Failed to fetch trailer", error);
      }
    };

    fetchTrailer();
  }, [tvShowId]);

  return (
    <div className={styles.container}>
      {trailerUrl ? (
        <iframe
          src={trailerUrl}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <p>No trailer available</p>
      )}
    </div>
  );
}
