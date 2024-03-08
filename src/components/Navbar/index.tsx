import { CiSearch } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";

interface NavbarProps {
  onClickSearch: () => void;
}

const Navbar = ({ onClickSearch }: NavbarProps) => {
  return (
    <div className="py-3 px-4 flex justify-between bg-linearColor items-center">
      <button type="button" className="text-white">
        <IoMdMenu className="size-8" />
      </button>
      <img
        src="ngmusic.webp"
        srcSet="ngmusic@2x.webp 2x, ngmusic@3x.webp 3x"
        className="w-auto h-5"
      />
      <button onClick={onClickSearch} type="button" className="text-white">
        <CiSearch className="size-8" />
      </button>
    </div>
  );
};

export default Navbar;
