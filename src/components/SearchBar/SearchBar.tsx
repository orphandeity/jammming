interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<string>;
}

function SearchBar({ searchQuery, setSearchQuery }: SearchBarProps) {
  return (
    <>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button>search</button>
    </>
  );
}

export default SearchBar;
