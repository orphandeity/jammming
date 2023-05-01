import styles from "./SearchResults.module.css";
import Track from "../Track/Track";

interface searchResultsProps {
  searchResults: TrackType[];
  onAddTrack: (track: TrackType) => void;
}

function SearchResults({ searchResults, onAddTrack }: searchResultsProps) {
  return (
    <>
      <h2>Search Results</h2>
      <ul className={styles.resultsList}>
        {searchResults.map((track) => (
          <li key={track.id} className={styles.item}>
            <button onClick={() => onAddTrack(track)}>add</button>
            <Track track={track} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default SearchResults;
