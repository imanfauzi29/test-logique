import { useState } from "react";
import SearchMusic from "../components/SearchMusic";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import { cn } from "../utils/cn";
import { useInfiniteQuery } from "@tanstack/react-query";
import { searchMusic } from "../services";
import SearchPopover from "../components/SearchPopover";
import Button from "../components/ui/Button";

const Home = () => {
  const [showPopover, setShowPopover] = useState(false);

  const [musicQuery, setMusicQuery] = useState("");
  const [showList, setShowList] = useState(false);

  const { data, fetchNextPage, isLoading } = useInfiniteQuery({
    queryKey: ["music", musicQuery],
    /** Query */
    queryFn: async ({ pageParam }) =>
      searchMusic({ term: musicQuery, limit: pageParam }),
    /** Initial limit */
    initialPageParam: 4,
    /** Pagination to get more data */
    getNextPageParam: (lastPage) => lastPage.resultCount + 4,
    /** Don't fetch when music query is empty */
    enabled: !!musicQuery,
    /** Refetch on window focus */
    refetchOnWindowFocus: false,
  });

  /**
   * Handles updating the music query state when the
   * search input value changes.
   */
  const handleSearchMusic = (value: string) => {
    setMusicQuery(value);
    setShowList(true);
    setShowPopover(false);
  };

  const handleLoadMore = () => {
    fetchNextPage();
  };

  return (
    <>
      <div
        className={cn(
          "h-full w-full bg-linearColor fixed z-10 left-0 transition-all duration-700",
          showList ? "-translate-y-full" : ""
        )}
      >
        <div className="flex flex-col h-full justify-between items-center p-8 max-w-screen-sm mx-auto">
          <div></div>
          <img
            src="/logo.webp"
            srcSet="/logo@2x.webp 2x, /logo@3x.webp 3x"
            className="w-20"
          />
          <SearchMusic isLoading={isLoading} onSearch={handleSearchMusic} />
        </div>
      </div>

      <div className="h-full">
        <Navbar onClickSearch={() => setShowPopover(true)} />

        {data?.pages && (
          <div className="pb-10 bg-gray-100 min-h-full">
            <Content
              data={data.pages[data.pages.length - 1].results}
              searchTitle={musicQuery.replace("+", " ")}
            />

            <div className="mt-3 w-full">
              <Button
                text="Load more"
                type="button"
                onClick={handleLoadMore}
                className="border border-gray-300 bg-gray-200 text-gray-500 max-w-44 block mx-auto"
              />
            </div>
          </div>
        )}
      </div>

      <SearchPopover isShow={showPopover} onClose={() => setShowPopover(false)}>
        <div className="flex flex-col h-full items-center justify-center px-8">
          <SearchMusic
            onSearch={handleSearchMusic}
            buttonClassName="bg-linearColor"
            isLoading={isLoading}
          />
        </div>
      </SearchPopover>
    </>
  );
};

export default Home;
