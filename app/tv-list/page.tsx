import { TvSet } from "../../components/tv-set";
import { getTvShows } from "../utilities";

export const metadata = {
  title: "Tv-list",
};

export default async function TvList() {
  const TvShows = await getTvShows();
  return (
    <>
      <TvSet
        title="TV 프로그램"
        tvs={TvShows}
      />
    </>
  );
}
