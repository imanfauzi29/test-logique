import { PropsWithChildren } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { cn } from "../../utils/cn";

interface SearchPopoverProps extends PropsWithChildren {
  isShow?: boolean;
  onClose?: () => void;
}

const SearchPopover = ({ children, onClose, isShow }: SearchPopoverProps) => {
  return (
    <div
      className={cn(
        "fixed z-20 w-full h-full bg-gray-900/90 top-0 left-0 transition-all",
        isShow ? "visible opacity-100" : "hidden opacity-0"
      )}
    >
      <div className="max-w-screen-sm h-full relative mx-auto">
        <button onClick={onClose} className="absolute right-5 top-5 text-white">
          <IoCloseSharp className="size-7" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default SearchPopover;
