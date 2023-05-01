import styles from "./SearchResults.module.css";
import Tracklist from "../Tracklist/Tracklist";

interface searchResultsProps {
  searchResults: TrackType[];
  onAddTrack: (track: TrackType) => void;
}

function SearchResults({ searchResults, onAddTrack }: searchResultsProps) {
  return (
    <div className={styles.searchResults}>
      <h2>Search Results</h2>
      <Tracklist tracks={searchResults} onAddTrack={onAddTrack} />
    </div>
  );
}

export default SearchResults;
