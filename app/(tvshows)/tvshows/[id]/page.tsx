import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import MovieSimilars from "../../../../components/movie-similar";
import TVShowInfo, { getTVShow } from "../../../../components/tv-info";
import TVShowSimilars from "../../../../components/tv-similar";
import Trailer from "../../../../components/tv-videos";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getTVShow(id);
  return {
    title: movie.title,
  };
}

export default async function TvDetail({ params: { id } }: IParams) {
  //   const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  //   return <h1>{movie.title}</h1>;
  return (
    <div>
      <Suspense fallback={<h1>Loading tv info</h1>}>
        <TVShowInfo id={id} />
      </Suspense>
      {/* <Suspense fallback={<h1>Loading movie videos</h1>}>
        <Trailer tvShowId={id} />
      </Suspense> */}
      <Suspense fallback={<h1>Loading tv similars</h1>}>
        <TVShowSimilars id={id} />
      </Suspense>
    </div>
  );
}
