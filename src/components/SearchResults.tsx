import Tracklist from "./Tracklist";

interface searchResultsProps {
  searchResults: TrackType[];
  onAddTrack: (track: TrackType) => void;
}

function SearchResults({ searchResults, onAddTrack }: searchResultsProps) {
  return (
    <div className="mx-auto space-y-4">
      <h2 className="text-2xl font-semibold">Search Results</h2>
      <Tracklist tracks={searchResults} onAddTrack={onAddTrack} />
    </div>
  );
}

export default SearchResults;
