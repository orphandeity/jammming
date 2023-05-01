import { useState } from "react";

interface SearchBarProps {
  onSearch: (term: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [term, setTerm] = useState("");

  function handleTermChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTerm(event.target.value);
  }

  function search() {
    onSearch(term);
  }

  return (
    <>
      <input
        type="text"
        placeholder="Enter a song title"
        onChange={handleTermChange}
      />
      <button onClick={search}>search</button>
    </>
  );
}

export default SearchBar;
