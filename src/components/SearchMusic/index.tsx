import { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { cn } from "../../utils/cn";

interface SearchMusicProps {
  onSearch: (value: string) => void;
  isLoading?: boolean;
  buttonClassName?: string;
}

const SearchMusic = ({
  onSearch,
  isLoading,
  buttonClassName,
}: SearchMusicProps) => {
  const [music, setMusic] = useState("");

  const onInputChange = (value: string) => {
    setMusic(value);
  };

  const handleSearch = () => {
    const searchMusicValue = music.replace(/\s+/g, "+");

    onSearch(searchMusicValue);

    setMusic("");
  };
  return (
    <div className="w-full space-y-4">
      <Input
        onInputChange={onInputChange}
        placeholder="Artist / Album / Title"
        className="font-medium"
        value={music}
      />
      <Button
        text="Search"
        className={cn(
          "bg-white/10 hover:bg-white/20 transition-all text-white",
          isLoading ? "bg-white/30" : "",
          buttonClassName
        )}
        isLoading={isLoading}
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchMusic;
