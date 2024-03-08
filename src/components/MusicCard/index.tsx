import { MusicResponseTypes } from "../../types/music.types";

const MusicCard = ({
  trackName,
  artistName,
  artworkUrl100,
  primaryGenreName,
  trackHdPrice,
}: MusicResponseTypes) => {
  return (
    <>
      <div className="rounded-lg bg-white">
        <div className="p-2 flex gap-4 items-center">
          <img
            src={artworkUrl100}
            className="size-24 object-cover bg-blue-500 rounded-lg"
          />
          <div className="flex flex-col gap-4 flex-1">
            <div className="pe-2 h-16">
              <small>{artistName}</small>
              <span className="block text-lg font-bold line-clamp-2">
                {trackName}
              </span>
            </div>
            <div className="flex justify-between">
              <div className="rounded-full bg-green-500 py-0.5 px-3 text-white text-sm">
                {primaryGenreName}
              </div>
              <div className="flex gap-2 items-center">
                <img
                  src="currency-dollar.webp"
                  srcSet="currency-dollar@2x.webp 2x, currency-dollar@3x.webp 3x"
                />
                <span className="text-sm text-yellow-500">{trackHdPrice}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MusicCard;
