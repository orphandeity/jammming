import { useState } from "react";
import { Search } from "lucide-react";
import VisuallyHidden from "./VisuallyHidden";

interface SearchBarProps {
  onSearch: (term: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [term, setTerm] = useState("");

  function handleTermChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTerm(event.target.value);
  }

  function search(ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    ev.preventDefault();
    onSearch(term);
  }

  return (
    <form className="flex gap-2">
      <input
        type="text"
        placeholder="Enter a song title"
        onChange={handleTermChange}
        className="w-full rounded-md border border-neutral-300 px-4 py-2 transition-colors placeholder:text-neutral-300 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <button
        onClick={search}
        className="inline-flex flex-col items-center justify-center rounded-md border border-neutral-300 bg-white px-4 py-2 text-xs"
      >
        <Search />
        <VisuallyHidden>search</VisuallyHidden>
      </button>
    </form>
  );
}

export default SearchBar;
