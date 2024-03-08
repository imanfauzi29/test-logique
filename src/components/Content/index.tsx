import MusicCard from "../MusicCard";
import { MusicResponseTypes } from "../../types/music.types";

interface ContentProps {
  data?: MusicResponseTypes[];
  searchTitle?: string;
}

const Content = ({ data, searchTitle }: ContentProps) => {
  return (
    <>
      {/* content  */}
      <div className="pt-5 px-4 space-y-6">
        <div className="inline-flex w-full justify-center items-center">
          <span>Search result for:&nbsp;</span>
          <h2 className="text-xl font-bold text-purple-600">{searchTitle}</h2>
        </div>

        {/* list music  */}
        <div className="flex flex-col gap-4">
          {data && data.map((item, i) => <MusicCard key={i} {...item} />)}
        </div>
      </div>
    </>
  );
};

export default Content;
