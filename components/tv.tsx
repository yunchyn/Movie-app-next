"use client";
import Link from "next/link";
import styles from "../styles/movie.module.css";
import { useRouter } from "next/navigation";

interface ITvProps {
  title: string;
  id: string;
  poster_path: string;
}
export default function TvShow({ title, id, poster_path }: ITvProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/tvshows/${id}`);
  };
  return (
    <div className={styles.movie}>
      <img
        src={poster_path}
        alt={title}
        onClick={onClick}
      />
      <Link
        prefetch
        href={`/tvshows/${id}`}
      >
        {title}
      </Link>
    </div>
  );
}
